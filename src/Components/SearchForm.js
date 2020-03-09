import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchParam: '',
      printType: '',
      bookType: '',
      error: null,
    };
  }

  searchParamChanged(val) {
    this.setState({
      searchParam: val,
    });
  }

  printTypeChanged(val) {
    this.setState({
      printType: val,
    });
  }

  bookTypeChanged(val) {
    this.setState({
      bookType: val,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      error: null,
    });

    const url = 'https://www.googleapis.com/books/v1/volumes?';
    const query = `q=${this.state.searchParam}`;
    const printType = this.state.printType
      ? `&printType=${this.state.printType}`
      : '';
    const bookType = this.state.bookType
      ? `&filter=${this.state.bookType}`
      : '';

    fetch(url + query + printType + bookType)
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return res.json();
      })
      .then(data => this.props.onSearch(data))
      .catch(err => {
        this.setState({
          error: err.message,
        });
      });
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        {this.state.error ? <div>{this.state.error}</div> : null}
        <label htmlFor="search">Search:</label>
        <input
          onChange={e => this.searchParamChanged(e.target.value)}
          type="text"
          id="search"
          placeholder="Enter search here..."
        />
        <input type="submit"></input>
        <select
          onChange={e => this.printTypeChanged(e.target.value)}
          name="print-type"
          id="print-type"
        >
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>
        <select
          onChange={e => this.bookTypeChanged(e.target.value)}
          name="book-type"
          id="book-type"
        >
          <option value="">No Filter</option>
          <option value="full">Full text viewable</option>
          <option value="free-ebooks">Free e-book</option>
          <option value="paid-ebooks">Paid e-book</option>
          <option value="ebooks">All e-book</option>
        </select>
      </form>
    );
  }
}
export default SearchForm;
