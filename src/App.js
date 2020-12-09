import React, {useState, useReducer, useEffect,useLayoutEffect} from 'react';
import ReactDOM from 'react-dom';


const App = () => {
    const [n, setN] = useState(0);
    const onClick = () => {
        setN(i => i + 1)
    }
    useEffect(() => {
        console.log("第一次渲染之后就执行");
    }, [])//[]里面的的变量变化时就执行 => 不会执行

    useLayoutEffect(() => {
        console.log("这里是执行useLayoutEffect1");
    })//n变化的时候才执行

    useLayoutEffect(() => {
        console.log("这里是执行useLayoutEffect2");
    });
    return (
        <div>
            n:{n}
            <button onClick={onClick}>+1</button>
        </div>
    )

}


export default App;
