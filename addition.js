import logo from './logo.svg';
import { useState} from 'react';
import './App.css';

function App() {
 
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber , setSecondNumber] = useState(0);
  const [sum, setSum] = useState(0);
  const [history, setHistory] = useState([]);

  const set1 = (e) => {
    // console.log(firstNumber)
    setFirstNumber(e.target.value);
  }

  const set2 = (e) => {
    // console.log(secondNumber)
    setSecondNumber(e.target.value);
  }

  const doAddition = () => {
    // console.log(a+b);
    setSum(Number(firstNumber) + Number(secondNumber));
    setHistory([...history , Number(firstNumber) + Number(secondNumber)]);
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>Addition Calculator</h1>
      <label htmlFor="firstNumber">First number:</label>
      <input type="number" id="firstNumber" name="firstNumber" value  = {firstNumber} onChange = {set1}></input><br></br><br></br>
      <label htmlFor="secondNumber">Second number:</label>
      <input type="number" id="secondNumber" name="secondNumber" value = {secondNumber} onChange = {set2}></input><br></br><br></br>
      <button onClick = {doAddition}>Add</button><br></br><br></br>
      <div>The sum of the numbers is  {sum}</div><br></br>
      History : {history.map (n => n + ",")}
      

    </div>
  );
}

export default App;
