import React, { Component } from 'react';
import Result from './Result';

class SearchResults extends Component {
  render() {
    return (
      <ul>
        {' '}
        {this.props.results.map(result => {
          console.log(result.saleInfo);
          return (
            <Result
              title={result.volumeInfo.title}
              imageUrl={result.volumeInfo.imageLinks.smallThumbnail}
              author={result.volumeInfo.authors}
              saleInfo={result.saleInfo}
              desc={result.volumeInfo.description}
            />
          );
        })}
        ;
      </ul>
    );
  }
}
export default SearchResults;
