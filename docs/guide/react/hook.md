# Hook
### 动机
1. 组件之间复用状态逻辑很难, 官方解决方案是: 渲染属性(Render Props)和高阶组件(Higher-Order Components), 会导致组件树层级很深
2. 复杂组件难以理解: 生命周期钩子函数逻辑混乱, 产生巨大组件(很多代码必须写在类里面)
3. class难理解, 必须理解this工作方式, 许多方法需要bind 

### 使用规则
1. 不能将hook放在循环, 条件语句或嵌套方法内. 确保在React函数最顶层调用hook. 这样能确保hook在每一次渲染中都按同样的顺序被调用
2. 只在React函数中调用hook, 也可以在自定义hook中调用其它hook
3. 命名规范:
    - useState返回数组的第二项以set开头(约定)
    - 自定义hook以use开头, 可被lint校验

## 1. State Hook
### useState
 当我们使用useState定义state变量的时候, 返回的是一个有两个值的数组. 第一个值是当前的state, 第二个值是更新state的函数, 可传任意类型的变量, 或一个接收state旧值的函数, 其返回值作为state新值
```javascript
  const Index = () => {
    const [count, setCount] = useState(0);
    return (
      <Card>
        <div>Count: {count}</div>
        <Button onClick={() => setCount(count + 1)}>+</Button>
        <Button onClick={() => setCount((pre: any) => pre - 1)}>-</Button>
      </Card>
    );
  };
  
```
> set方法不会像class组件的setState一样做合并, 

> 所以,如果数据结构简单, 可以将变量根据数据结构需要放在不同的usestate中, 避免放入一个对象中大量使用类似{...state, value}形式

> 如果数据结构复杂, 建议使用useReducer管理组件的state

### useReducer
```javascript
const [state, dispatch] = useReducer(reducer, initialArg, init)
```
useReducer 接收三个参数，第一个参数为一个 reducer 函数，第二个参数是reducer的初始值，第三个参数为可选参数，值为一个函数，可以用来惰性提供初始状态
```javascript
const initVal = {count: 0};

const init = (val: any) => ({count: val});

const changeCount = (state: any, action: any) => {
  switch(action.type) {
    case 'add': 
      return {count: state.count+1};
    case 'delete':
      return {count: state.count-1};
    case 'reset':
      return init(action.payload);
    default:
      return state
  }
}

const Index = () => {
  const [state, dispatch] = useReducer(changeCount, initVal);

  return (
    <Card>
      <div>Count: {state.count}</div>
      <Button onClick={() => dispatch({ type: 'add' })}>+</Button>
      <Button onClick={() => dispatch({ type: 'delete' })}>-</Button>
      <Button onClick={() => dispatch({ type: 'reset', payload: 0 })}>Reset</Button>
    </Card>
  );
};
```

## 2. Effect Hook
### useEffect
useEffect 接收两个参数，没有返回值
- 第一个参数为 effect 函数: 里面可以有个return函数(先执行 returnFuncton 再执行 effect，比如需要做定时器的清除)
- 第二个参数 array 作为有条件触发情况时的条件限制：
  - 如果不传，则每次 componentDidUpdate 时都会先触发 returnFunction（如果存在），再触发 effect。
  - 如果为空数组[]，componentDidUpdate 时不会触发 returnFunction 和 effect。
  - 如果只需要在指定变量变更时触发 returnFunction 和 effect，将该变量放入数组。
  ```javascript
    useEffect(() => {
      return () => {

      }
    }, array)
  ```
> effect 函数触发时间为在浏览器完成渲染之后。 如果需要在渲染之前触发，需要使用 useLayoutEffect

### useLayoutEffect
该方法是同步方法，在浏览器 paint 之前执行，会阻碍浏览器 paint，只有当我们需要进行DOM的操作时才使用该函数（比如设定 DOM 布局尺寸，这样可以防抖动）。
```javascript
  useLayoutEffect(effect, array)
```

## 3. Context Hook
- 设计目的: 为共享那些被认为对于一个组件树而言是“全局”的数据
- 使用场景： context 通过组件树提供了一个传递数据的方法，从而避免了在每一个层级手动的传递 props 属性。
- 不要仅仅为了避免在几个层级下的组件传递 props 而使用 context，它是被用于在多个层级的多个组件需要访问相同数据的情景。

```javascript
// 父组件
import { useState, createContext } from "react";
import { Button, Card } from 'antd';
import FirstChild from './components/FirstChild';

const themes = {
  pink: {
    background: 'pink'
  }
}

export const ThemeContext = createContext(themes.pink);

const Index = () => {
  const [colorObj, setColorObj] = useState<any>(themes.pink);

  return (
    <Card>
      <ThemeContext.Provider value={colorObj}>
        <FirstChild />
      </ThemeContext.Provider>
      <Button onClick={() => setColorObj({background: 'red'})}>变红色</Button>
    </Card>
  )
}
export default Index

// 第一子组件
import SecondChild from './SecondChild';
const Index = () => {
  return ( <SecondChild />)
}
export default Index

// 第二子组件
import { useContext } from "react";
import { ThemeContext } from '../UseContext';

const Index = () => {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ width: '100px', height: '100px', border: '1px solid #000', backgroundColor: theme.background }}></div>
  )
}
export default Index
```

## 4. Ref Hook
### useRef
- useRef 返回的都是相同的引用
- 组件引用
- 替代this: 可以存放任何变量。useRef 可以很好的解决闭包带来的不方便性

```javascript
import { useState, useRef } from 'react';
import { Card, Button, Input } from 'antd';
import Child from './useImperativeHandle';

const Index = () => {
  const inputRef = useRef();
  const childRef = useRef();

  const onFocus = () => {
    inputRef.current.focus();
  }

  const changeColor = () => {
    childRef.current.changeRed();
  }

  // 例子3: 点击'点击'按钮, 然后点击'弹窗提示'按钮, 再多次点击'点击'
  const [count, setCount] = useState(0);
  const lastCount = useRef();
  lastCount.current = count;
  const onAlert = () => {
    setTimeout(()=> {
      // 此处如果直接count, 会和后续点击的值结果不一样
      alert(lastCount.current)
    }, 2000)
  }

  return (
    <>
      <Card>
        <Input ref={inputRef} />
        <Button onClick={onFocus}>input聚焦</Button>
      </Card>
      <Card>
        <div>useImperativeHandle</div>
        <Child ref={childRef} />
        <Button onClick={changeColor}>运行子组件方法</Button>
      </Card>
      <Card title='替代this的用法'>
        <div>你点击了{count}次</div>
        <Button onClick={() => setCount(count+1)}>点击</Button>
        <Button onClick={onAlert}>弹窗提示</Button>
      </Card>
    </>
  )
}
export default Index;
```

### useImperativeHandle
- useImperativeHandle 需要和 forwardRef 同时使用，自定义暴露给父组件的实例值
- useImperativeHandle 有三个参数：
  - 第一个参数，接收一个通过 forwardRef 引用父组件的 ref 实例。
  - 第二个参数一个回调函数，返回一个对象，对象里面存储需要暴露给父组件的属性或方法。
  - 第三个参数为一个可选参数，该参数是一个依赖项数组，就像 useEffect 那样。

```javascript
import { useState, forwardRef, useImperativeHandle } from 'react';
import { Card } from 'antd';

interface IndexProps {
  parentRef: any
}

const Index = (props: IndexProps) => {
  const { parentRef } = props;
  const [color, setColor] = useState('#fff');

  const changeRed = () => setColor('#f00');

  useImperativeHandle(parentRef, () => ({
    changeRed
  }));

  return (
    <Card>
      <div style={{ width: '100px', height: '100px', border: '1px solid #000', backgroundColor: color }}></div>
    </Card>
  )
}
export default forwardRef((props: any, parentRef: any) => <Index {...props} parentRef={parentRef}/>);
```

## 5. 性能优化
### useMemo
- 可以传两个参数
  - 第一个参数为一个工厂函数，返回一个缓存的值，也就是仅当重新渲染时数组中的值发生改变时，回调函数才会重新计算缓存数据，这可以使得我们避免在每次重新渲染时都进行复杂的数据计算。
  - 第二个参数为一个依赖项数组，只有依赖项中的数据发生改变时才重新计算值，用法同 useEffect 的依赖项数组

```javascript
// 父组件
import { useState } from 'react';
import { Card, Button } from 'antd';
import Child from './components/MemoChild';

const Index = () => {
  const [color, setColor] = useState('red');
  const [count, setCount] = useState(0);

  const changeColor = () => {
    const result = color === 'red' ? 'green' : 'red'
    setColor(result)
  }

  return (
    <>
      <Card>
        <Child color={color} />
        <Button onClick={changeColor}>{color === 'red' ? '变绿色' : '变红色'}</Button>
        <div>计数{count}次</div>
        <Button onClick={() => setCount(count+1)}>计数</Button>
      </Card>
    </>
  )
}
export default Index;

// 子组件
import { useMemo } from 'react';

interface IndexProps {
  color: string;
}

const Index = (props: IndexProps) => {
  const {color} = props;

  const actionColor = () => console.log(color);

  // 此处若不用useMemo, 那么点击父组件的'计数'按钮, 父组件state改变, 重新渲染, 也会造成子组件中的actionColor方法渲染
  useMemo(() => {
    actionColor()
  }, [color])

  return (
    <div style={{ width: '100px', height: '100px', border: '1px solid #000', backgroundColor: color }}></div>
  )
}

export default Index;
```

### useCallback
用法同useMemo

## 6. debugger
### useDebugValue
- useDebugValue 可用于在 React 开发者工具中显示自定义 hook 的标签。
- useDebugValue 接收两个参数，根据传入参数数量的不同有不同的使用方式：
  - 直接传 debug 值 (下例子1)
  - 延迟格式化 debug 值 (下例子2)

## 7. 自定义hook
- Hooks 代码还可以封装起来，变成一个自定义的 Hook，便于共享

```javascript
// 自定义Hook
import { useState, useEffect, useCallback, useDebugValue } from "react";

export const useWinSize = () => {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })

  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }, [])

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('reisze', onResize)
    }
  }, [onResize]);

  // useDebugValue
  const date = new Date();
  useDebugValue(size.width > 1000 ? '1' : '2');
  useDebugValue(date, date => date.toDateString());
  return size
}

// 父页面
import { useWinSize } from './components/UseWinSize';

const Index = () => {
  const size = useWinSize()
  return (
    <div>
      页面Size:{size.width}x{size.height}
    </div>
  )
}
export default Index
```
