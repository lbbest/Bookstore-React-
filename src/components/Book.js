import React from "react";

export default function Book(props) {
  const book = props.book;
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img className="book-cover" src={book.cover} alt="book cover"></img>
        </div>
        <div className="flip-card-back">
          <h2 className="book-title">{book.title.toUpperCase()}</h2>
          <p className="book-description">{book.description}</p>
          <a href={book.detail} data-fancybox>
            <button className="more-info-btn">More Info</button>
          </a>
        </div>
      </div>
    </div>
  );
}
