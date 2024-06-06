import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import BookCard from "./BookCard";

function App() {
  const [books, setBooks] = useState([]);

  // Run the function when page loads.
  useEffect(() => {
    fetchAllBooks();
  }, []);

  const fetchAllBooks = async () => {
    await fetch(
      `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_VERSION}
      /books`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBooks(data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Book catalog</h1>
      {books.map((book) => {
        return <BookCard book={book} />;
      })}
    </div>
  );
}

export default App;
