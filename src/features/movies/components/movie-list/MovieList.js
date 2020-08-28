import React, { Component } from 'react';
import MovieElement from './movie-element/MovieElement';

export default class MovieList extends Component {

  render() {
    return (
      <div className="w-75 d-flex flex-row flex-wrap justify-content-center">
        { this.props.movies.map( (m,index) =>(
          <MovieElement
            key={ m.title + index } 
            movie={ m } 
            isFavorite={ this.props.favorites.includes(m.title) }
            addFavorites={ this.props.addFavorites }
            removeFavorites={ this.props.removeFavorites }
            updateSelectedMovie={ () => {this.props.updateSelectedMovie(index)} }
          />
        ))}
      </div>
    );
  }
}