import React, { Component } from 'react';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
    };
  }

  toggleShowDetails() {
    this.setState({
      showDetails: !this.state.showDetails,
    });
  }

  render() {
    return (
      <li>
        <h1>{this.props.title}</h1>
        <img src={this.props.imageUrl} alt="book cover" />
        <p>Author: {this.props.author}</p>
        <p>
          Price:
          {this.props.saleInfo.saleability === 'FOR_SALE'
            ? ' $' + this.props.saleInfo.listPrice.amount
            : ' Not for sale'}
        </p>
        <button type="button" onClick={() => this.toggleShowDetails()}>
          Show Details
        </button>
        {this.state.showDetails ? <p>{this.props.desc}</p> : null}
      </li>
    );
  }
}

export default Result;
