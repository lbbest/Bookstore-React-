import React from "react";

export default function Book(props) {
  const book = props.book;
  // console.log(book.imageLinks.thumbnail);
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            className="book-cover"
            src={book.volumeInfo.imageLinks.thumbnail + "&zoom=6"}
            alt="book cover"
          ></img>
        </div>

        <div className="flip-card-back">
          <a
            href={book.volumeInfo.imageLinks.thumbnail + "&zoom=6"}
            data-fancybox
          >
            <h2 className="book-title">
              {book.volumeInfo.title.toUpperCase()}
            </h2>
            <p className="book-description">{book.volumeInfo.subtitle}</p>
          </a>
          <a
            href={book.volumeInfo.infoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="more-info-btn">More Info</button>
          </a>
        </div>
      </div>
    </div>
  );
}
