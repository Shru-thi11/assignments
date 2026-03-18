import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState("A new quote is coming here...");
  const [author, setAuthor] = useState("Author...");
  const getQuote = async () => {
    try {
      const res = await fetch("https://dummyjson.com/quotes/random");
      const data = await res.json();

      setQuote(data.quote);
      setAuthor(data.author);
    } catch (error) {
      console.error("Error:", error);
      setQuote("Oops. something went wrong");
      setAuthor("System");
    }
  };

  useEffect(() => {
    getQuote();
  }, []);
  return (
    <div className="container">
      <header className="header">
        <h1>Quote Generator</h1>
      </header>

      <div className="box">
        <p className="quote-text">"{quote}"</p>
        <p className='author'>{author}</p>
        <button className="new-quote-btn" onClick={getQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;