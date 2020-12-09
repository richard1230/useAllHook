import React, {useState, useReducer,useEffect} from 'react';
import ReactDOM from 'react-dom';



const App = () => {
    const [n,setN]= useState(0);
    const onClick = ()=>{
        setN(i=>i+1)
    }
    useEffect(()=>{
        console.log("第一次渲染之后就执行");
    },[])//[]里面的的变量变化时就执行 => 不会执行

    useEffect(()=>{
        if (n !== 0){
            console.log("n变化了");
        }
    },[n])//n变化的时候才执行

    useEffect(()=>{
        console.log("无论何时变化都执行");
    });
    return(
        <div>
            n:{n}
            <button onClick={onClick}>+1</button>
        </div>
    )

}


export default App;
