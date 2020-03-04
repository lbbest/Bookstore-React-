import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Book from "./components/Book";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      search: ""
    };
  }

  componentDidMount() {
    fetch("https://api.myjson.com/bins/zyv02")
      .then(res => {
        return res.json();
      })
      .then(result => {
        this.setState({ books: result.books });
      });
  }

  handleSearch = search => {
    this.setState({ search });
  };

  searchBar = () => {
    let search = this.state.books.filter(books => {
      return (
        books.title.includes(this.state.search) ||
        books.description.includes(this.state.search)
      );
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
