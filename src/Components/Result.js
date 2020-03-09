import React, { Component } from 'react';
import './Result.css';

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
      <li className="result-item">
        <h2>{this.props.title}</h2>
        <img src={this.props.imageUrl} alt="book cover" />
        <div className="details">
          <p>
            Author:{' '}
            {this.props.author ? this.props.author[0] : 'No info available'}
          </p>
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
        </div>
      </li>
    );
  }
}

export default Result;
