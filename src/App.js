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
    },
    {
      name: "Richest man in Babylon",
      rating: "4/5"
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
    },
    {
      name: "Guide to Investing",
      rating: "4/5"
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
    <div className="background">
      <div className="App">
        <h1 className="heading">📚 Book Recommendation 📚</h1>
        <p
          className="heading"
          style={{ fontSize: "smaller", fontWeight: "bold" }}
        >
          {" "}
          Here are some of my favourite book recommendations. Select a genre to
          get started{" "}
        </p>

        <div className="genre">
          {Object.keys(bookDB).map((genre) => (
            <button
              className="genre"
              onClick={() => genreClickHandler(genre)}
              style={{
                cursor: "pointer",
                background: "#adbce6",
                borderRadius: "0.5rem",
                padding: "0.5rem  1rem",
                border: "1px black",
                margin: "1rem 0.3rem"
              }}
            >
              {genre}
            </button>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <ul style={{ paddingInlineStart: "3" }}>
            {bookDB[selectedGenre].map((book) => (
              <li
                key={book.name}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "1px solid #D1D5DB",
                  backgroundColor: "#add8e6",
                  width: "70%",
                  margin: "1rem 0rem",
                  borderRadius: "0.5rem",
                  margin: "auto",
                  marginTop: "10px"
                }}
              >
                {" "}
                <div className="bookname" style={{ fontSize: "larger" }}>
                  {" "}
                  {book.name}{" "}
                </div>
                <div style={{ fontSize: "smaller" }}> {book.rating} </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
