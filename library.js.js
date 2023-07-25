import { useState, useEffect} from 'react';
import './App.css';
import Book from './Book';

function App() {
 
  const [isbn, setISBN] = useState('');
  const [title , setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [history, setHistory] = useState([]);
  const [details, setDetails] = useState(null);
  const [searchbook, setSearchbook] = useState('');


  const onSearchBookChange = (event) => setSearchbook(event.target.value);

  const SearchBookInBooks = () => {
    setDetails(history.find(book => book.title.includes(searchbook)));
};

useEffect(() => {setISBN('');setTitle('');setPrice('');}, [history]);
  const set1 = (e) => {
    setISBN(e.target.value);
  }

  const set2 = (e) => {
    setTitle(e.target.value);
  }
  const set3 = (e) => {
    setPrice(e.target.value);
  }

  const doAddition = () => {
    setHistory([...history , {"isbn" : isbn, "title" : title, "price" : price}]);
    setISBN('');
    setTitle('');
    setPrice('');
  }

  const showdetails = (a, b, c) => {
    setDetails({"isbn" : a, "title" : b, "price" : c})

  }


  const removebook = (a) =>{
    setHistory(history.filter(x => x.isbn !== a));
    setDetails(null)
  }

  return (
    <div className="App">
      <h1>Books</h1>
      <label htmlFor="ISBN">ISBN:</label>
      <input type="text" id="ISBN" name="ISBN" value  = {isbn} onChange = {set1}></input>
      <label htmlFor="Title">Title:</label>
      <input type="text" id="Title" name="Title" value = {title} onChange = {set2}></input>
      <label htmlFor="price">Price:</label>
      <input type="text" id="price" name="price" value = {price} onChange = {set3}></input>
      <button onClick = {doAddition}>Add</button> 

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

    <div id="BookSearch">
                <h2>Book Search</h2>
                <input type="text" placeholder="Enter Title" value={searchbook} onChange={onSearchBookChange}/>
                <button id="search" onClick={SearchBookInBooks}>Search</button>
    </div>
    {details ? <Book  mydetails = {details} /> : "no books to show"}
      

    </div>
  );
}

export default App;
