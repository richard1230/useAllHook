import React ,{useState}from 'react';
import ReactDOM from 'react-dom';

const App = ()=>{
 const [n,setN] = useState(0)
    const onClick = ()=>{
     //这里传的是一个操作，不会产生之前的那个问题
        setN(n=>n+1)
        setN(n=>n+1)

    }
    return(
        <div className="App">
            <h1>n：{n}</h1>
            <button onClick={onClick}>Click</button>
        </div>
    )

}




export default App;
