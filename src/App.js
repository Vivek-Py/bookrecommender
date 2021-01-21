import React, { useState } from "react";
import "./styles.css";

const bookDB = {
  Fiction: [
    {
      name: "Jane Eyre",
      rating: "5/5"
    },
    {
      name: "The Alchemist",
      rating: "4.5/5"
    }
  ],

  Business: [
    {
      name: "Zero to One",
      rating: "3.5/5"
    },
    {
      name: "Rich Dad Poor Dad",
      rating: "5/5"
    }
  ],

  SelfHelp: [
    {
      name: "How to win friends and Influence People.",
      rating: "4/5"
    },
    {
      name: "Richest Man in Babylon",
      rating: "5/5"
    }
  ],

  Coding: [
    { name: "Python Cookbook", rating: "4/5" },
    { name: "Learn Python: the hard way", rating: "3.5/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>Book Recommender 📚</h1>
      <p style={{ fontSize: "smaller", fontWeight: "bold" }}>
        {" "}
        Here are some of my favourite book recommendations. Select a genre to
        get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#e1e0b9",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                backgroundColor: "#fffdd0",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                margin: "auto",
                marginTop: "10px"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
