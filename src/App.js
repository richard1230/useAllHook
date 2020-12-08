import React ,{useState}from 'react';
import ReactDOM from 'react-dom';

const App = ()=>{
 const [n,setN] = useState(0)
    const onClick = ()=>{
        setN(n+1)
        setN(n+1)

    }
    return(
        <div className="App">
            <h1>n：{n}</h1>
            <button onClick={onClick}>Click</button>
        </div>
    )

}




export default App;
