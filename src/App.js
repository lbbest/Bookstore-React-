import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Book from "./components/Book";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
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

  searchBar = term => {
    for (let i = 0; i < this.state.books.length; i++) {
      let title = this.state.books[i].title;
      let description = this.state.books[i].description;
      if (title.includes(term) || description.includes(term)) {
        // this.setState (UPDATE STATE HERE)
        console.log(this.state.books[i]);
      }
    }
  };

  render() {
    return (
      <div className="App">
        <Header search={this.searchBar} />
        <div className="content-container">
          {this.state.books.map((book, index) => {
            return <Book key={index} book={book} />;
          })}
        </div>
      </div>
    );
  }
}
export default App;
