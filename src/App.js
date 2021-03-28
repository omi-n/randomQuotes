import "./styles.css";
import ReactFCCtest from "react-fcctest";
import React,  { Component } from 'react';

// there are no organized/file-separated components because freecodecamp's system didnt want to work with them.

export default function App() {
  return (
    <div className="App">
      <ReactFCCtest />
      <QuoteBox />
    </div>
  );
}

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteWords: quote[0],
      quoteAuthor: quote[1],
    };
    this.newQuote.bind(this);
  }
  newQuote() {
    let newQuote = randomQuote(quotes);
    this.setState({
      quoteWords: newQuote[0],
      quoteAuthor: newQuote[1],
    })
  }
  render() {
    return (
      <div id="quote-box">
        <h1 id="text">{this.state.quoteWords}</h1>
        <h3 id="author">{this.state.quoteAuthor}</h3>
        <br />
        <button id="new-quote" onClick={this.newQuote.bind(this)}>New quote!</button>
        <a href="https://twitter.com/intent/tweet" id="tweet-quote" target="_blank">Tweet this quote!</a>
      </div>
    )
  }
}

const quotes = {
  "Oscar Wilde": "Be yourself; everyone else is already taken.",
  "Marilyn Monroe": "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  "Albert Einstein": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  "Frank Zappa": "So many books, so little time.",
  "Marcus Tullius Cicero": "A room without books is like a body without a soul.",
  "Bernard M. Baruch": "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
}

const randomQuote = (obj) => {
  let keys = Object.keys(obj);
  let randomIndex = keys.length * Math.random() << 0;
  let index = randomIndex;
  return [obj[keys[index]], keys[index]];
};

let quote = randomQuote(quotes);
