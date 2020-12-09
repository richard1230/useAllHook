import React, {useState, useReducer, useEffect, useLayoutEffect,useMemo} from 'react';
import ReactDOM from 'react-dom';


const App = () => {
    console.log("app执行了");
    const [n, setN] = React.useState(0);
    const [m, setM] = React.useState(0);
    const onClick = () => {
        setN(n + 1);
    };

    const onClickChild = useMemo(() => {
        return ()=>{
            console.log(m);
        }
    },[m])//只有m在变化的时候onClickChild才执行
    return (
        <div className="App">
            <div>
                <button onClick={onClick}>update n {n}</button>
            </div>
            <Child2 data={m} onClick={onClickChild}/>
        </div>
    )

}

const Child = (props) => {
    console.log("child 执行了");
    console.log('假设这里有大量代码')
    return <div
        onClick={props.onclick}
    >
        child: {props.data}
    </div>;
}

const Child2 = React.memo(Child);
export default App;
