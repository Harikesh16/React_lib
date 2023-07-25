import logo from './logo.svg';
import { useState} from 'react';
import './App.css';

function App() {
 
  const [isbn, setISBN] = useState('');
  const [title , setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [history, setHistory] = useState([]);
  const [details, setDetails] = useState([]);

  const set1 = (e) => {
    // console.log(firstNumber)
    setISBN(e.target.value);
  }

  const set2 = (e) => {
    // console.log(secondNumber)
    setTitle(e.target.value);
  }
  const set3 = (e) => {
    // console.log(secondNumber)
    setPrice(e.target.value);
  }

  const doAddition = () => {
    // console.log(a+b);
    // setSum(Number(firstNumber) + Number(secondNumber));
    setHistory([...history , {"isbn" : isbn, "title" : title, "price" : price}]);
    setISBN('');
    setTitle('');
    setPrice('');
  }

  const showdetails = (a, b, c) => {
    setDetails([{"isbn" : a, "title" : b, "price" : c}])

  }

  // const myfunc = (isbn) =>{
  //   return history.isbn !== isbn;
  // }


  const removebook = (a) =>{
    setHistory(history.filter(x => x.isbn !== a));
    setDetails([{}])
  }
 
  // function addBookToTable(serialNumber, isbn, title, price) {
  //   const table = document.getElementById("bookTable");
  //   const row = table.insertRow(-1);
  
  //   const serialNumberCell = row.insertCell(0);
  //   serialNumberCell.innerHTML = serialNumber;
  
  //   const isbnCell = row.insertCell(1);
  //   isbnCell.innerHTML = isbn;
  
  //   const titleCell = row.insertCell(2);
  //   titleCell.innerHTML = title;
  
  //   const priceCell = row.insertCell(3);
  //   priceCell.innerHTML = price;
  // }

  // function displayBooks() {
  //   let serialNumber = 1;
  //   for (const book of history) {
  //     addBookToTable(serialNumber, book.isbn, book.title, book.price);
  //     serialNumber++;
  //   }
  // }
  

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
      {/* <form> */}
      <h1>Books</h1>
      <label htmlFor="ISBN">ISBN:</label>
      <input type="text" id="ISBN" name="ISBN" value  = {isbn} onChange = {set1}></input>
      <label htmlFor="Title">Title:</label>
      <input type="text" id="Title" name="Title" value = {title} onChange = {set2}></input>
      <label htmlFor="price">Price:</label>
      <input type="text" id="price" name="price" value = {price} onChange = {set3}></input>
      <button onClick = {doAddition}>Add</button> 
      {/* </form> */}



    <table id = "bookTable">
      <tr>
        <th>index</th>
        <th>isbn</th>
        <th>View Details</th>
      </tr>
      {history.map((n,index) => <tr><td>{index+1}</td><td>{n.isbn}</td><td><button 
      onClick ={() => showdetails(n.isbn, n.title, n.price)}
      >View</button><button onClick = {() => removebook(n.isbn)}>Remove</button></td></tr>)}
      
    </table>

    {/* {displayBooks()} */}

    <table id = "Details">
      <tr>
        <th>isbn</th>
        <th>title</th>
        <th>price</th>
      </tr>
      {details.map((n,index) => <tr><td>{n.isbn}</td><td>{n.title}</td><td>{n.price}</td></tr>)}
    </table>


      {/* History : {history.map(n => Array.indexof(n))} */}
      {/* <button onClick = {doAddition}>Add</button> */}
      {/* <div>The sum of the numbers is  {sum}</div><br></br>
      History : {history.map (n => n + ",")} */}
      

    </div>
  );
}

export default App;
