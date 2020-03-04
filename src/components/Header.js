import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1 id="header-title">Ubiqum Bookstore</h1>
        <input
          id="search-bar"
          onChange={event => this.props.search(event.target.value)}
          type="textarea"
          placeholder="Search..."
        ></input>
      </header>
    );
  }
}

/*
function searchBar() {
  let searchbar = document.getElementById("search-bar");
  let value = searchbar.value.toUpperCase();
  let container = document.getElementByClassName("flip-card-container");
  let cards = container.getElementsByClassName("flip-card");

  for (i = 0; i < cards.length; i++) {
    let title = cards[i].textContent.toUpperCase();
    if (title.includes(value)) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
}
*/
