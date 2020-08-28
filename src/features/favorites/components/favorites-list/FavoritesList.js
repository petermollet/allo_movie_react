import React, { Component } from 'react';
import FavoritesElement from './favorites-element/FavoritesElement';

export default class FavoritesList extends Component {

  render() {
    return (
      <div className="w-75 d-flex flex-row flex-wrap justify-content-center">
        { this.props.favorites.map( (f,index) =>(
        <FavoritesElement
          key={ f.title + index } 
          favorites={ f }
          removeFavorites={ this.props.removeFavorites }
        />
        ))}
      </div>
    );
  }
}