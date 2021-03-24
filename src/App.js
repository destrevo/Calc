import './App.css';
import React,{useState} from 'react';

const numbers = [1,2,3,4,5,6,7,8,9,0]
const operators =["+","-"]

function App() {
  const [array, setarray] = useState([])
  const [dC, setDc] = useState()

  const ClickedButton = (number) => {
    if (array[array[0]] === "0") {
      return
    } 
    if (array[array.length-1] === "0" && (array[array.length-2] ==="+" || array[array.length-2] === "-")) {
      return
    } 
     setarray(array.concat( number.toString()))
    };
  const Operator = (xS) => {
    if(array[array.length-1]==='+'|| array[array.length-1]==='-' ){
      return
    }
    if (array.length === 0 && xS === '+'){
      return
    }
   setarray(array.concat(xS))
    }
  
 const ResultBtn = () => {
  if(array[array.length-1]==='+' || array[array.length-1]==='-'){
    DeleteBtn()
    }
 /* ebben a környezetben biztonságos az EVAL mivel kontrollált inputok vannak, így nincs szükség külső algoritmus használatára */
    setDc(eval(array.join("")))

 };

 
 const DeleteBtn = () => {
  array.splice(array.length-1, 1)
  let res = Array.of(...array)
  setarray(res)
 };
 const ClearBtn = () => {
  setarray([])
  setDc(null)
 };



  return (
    <div className="App">
      <div className="display">{array}<h2>{dC}</h2></div>
      
      <div className="controls">
        {numbers.map((num,key) => {
          return <button key={key} type="number"onClick={()=>{(ClickedButton(num))}}>{num}</button>
        })}
        <button onClick={()=>{(ClearBtn())}}>Clear</button>
        <button onClick={()=>{(DeleteBtn())}}>Delete</button>
        <div className="operators">
        {operators.map((xS,key) => {
          return <button key={key} type="text"onClick={()=>{(Operator(xS))}}>{xS}</button>
        })}
        </div>
        <button onClick={()=>{(ResultBtn())}}>=</button>
      </div>
    </div>
  );
}

export default App;
