import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Book from "./components/Book";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      search: "",
    };
  }

  componentDidMount() {
    fetch(
      // "https://cors-anywhere.herokuapp.com/https://api.itbook.store/1.0/search/react/"
      "https://www.googleapis.com/books/v1/volumes?q=code+insubject:programming&maxResults=40&printType=books&key=AIzaSyD_2gAgLSkD5ZeqmMjVqboYNdtBJ2R6ZFg"
    )
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        // console.log(result);
        this.setState({ books: result.items });
      });
  }

  handleSearch = (search) => {
    this.setState({ search });
  };

  searchBar = () => {
    let search = this.state.books.filter((books) => {
      return books.volumeInfo.title
        .toUpperCase()
        .includes(this.state.search.toUpperCase()); // ||
      // books.volumeInfo.subtitle.includes(this.state.search)
    });
    return search;
  };

  render() {
    const filteredBooks = this.searchBar();
    console.log(filteredBooks);
    return (
      <div className="App">
        <Header search={this.handleSearch} />
        <div className="content-container">
          {this.state.books &&
            filteredBooks.map((book, index) => {
              return <Book key={index} book={book} />;
            })}
        </div>
      </div>
    );
  }
}

export default App;
