import React from 'react';
import ReactDOM from 'react-dom';
const rootElement = document.getElementById("root");

let _state = [];
//index是_state这个数组里面的下标,由于这里只用了两个useState，故这里index只能到1
let index = 0;
const myUseState = initialValue =>{
  const currentIndex = index;
    console.log("此时的 currentIndex为：" +currentIndex);
    _state[currentIndex] =
      _state[currentIndex] === undefined ? initialValue : _state[currentIndex];
  const setState = newValue =>{
    _state[currentIndex] = newValue;
    render();
  }
    index += 1;
    console.log("此时的_state为"+_state);
    // <br/>
    // console.log("此时的_state长度为"+_state.length);
    return [_state[currentIndex],setState]
}
const render = ()=>{
    //如果这里不重置为0,那么_state这个数组里面的元素个数就会不断增加
  index = 0;
  ReactDOM.render(<App />,rootElement);
}

const App = ()=>{

  const [n,setN] = myUseState(0);
  const [m,setM] = myUseState(0);
  return (
      <div className="App">
        <p>此时的n为: {n}</p>
        <p>
          <button onClick={()=> setN(n+1)}>+1</button>
        </p>
        <p>此时的m为：{m}</p>
        <p>
          <button onClick={()=> setM(m+1)}>+1</button>
        </p>
      </div>
  )


}




export default App;
