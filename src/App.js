import React, {useState, useReducer} from 'react';
import ReactDOM from 'react-dom';

//1.创建初始值
const initial = {
    n: 0
}

//2.创建所有操作
const reducer = (state, action) => {
    if (action.type === 'add') {
        return (
            {n: state.n + action.number}
        )
    } else if (action.type === 'multi') {
        return (
            {
                n: state.n * 2
            }
        )
    } else {
        throw new Error('unknow type')
    }
}

const App = () => {
    //3.state保存初始状态，可以读；dispatch可以写
    const [state, dispatch] = useReducer(reducer, initial)
    //从初始状态里面取值
    const {n} = state
    const onClick = () => {
        //4.调用写
        dispatch({type: 'add', number: 1})
    }
    const onClick2 = () => {
        dispatch({type: 'add', number: 2})
    }

    return (
        <div className="App">
            <h1>n:{n}</h1>
            <button onClick={onClick}>+1</button>
            <button onClick={onClick2}>+2</button>
        </div>
    )


}


export default App;
