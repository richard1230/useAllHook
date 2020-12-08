import React ,{useState}from 'react';
import ReactDOM from 'react-dom';

const App = ()=>{
 const [user,setUser] = useState({name:"richard",age:18})
    const onClick = ()=>{
     setUser({
         ...user,
         name: "Jack"
     })
    }
    return(
        <div className="App">
            <h1>{user.name}</h1>
            <h2>{user.age}</h2>
            <button onClick={onClick}>Click</button>
        </div>
    )

}




export default App;
