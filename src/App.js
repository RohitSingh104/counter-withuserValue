import "./styles.css";
import {useState} from 'react';
export default function App() {
  const [state,setState] = useState();
  const [count,updateCount] = useState(0);

  function setCount(e){
    
    updateCount(count+e)
  }

  function takeValue(e){
    setState(e.target.value);
  }
  return (
    <div className="App">
      <h1>{count}</h1>
      <input type="number" value={state} onChange={takeValue}/>
      <button onClick={()=>setCount(state)}>Increment</button>
    
    </div>
  );
}
