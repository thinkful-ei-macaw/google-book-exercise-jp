import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import SearchResults from './Components/SearchResults';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
    };
  }

  setSearchResults(results) {
    this.setState({
      searchResults: [...results.items],
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Google Book Search</h1>
        </header>
        <SearchForm onSearch={results => this.setSearchResults(results)} />
        <SearchResults />
      </div>
    );
  }
}

export default App;
