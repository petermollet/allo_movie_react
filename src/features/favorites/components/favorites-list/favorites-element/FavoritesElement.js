import React, { Component } from 'react';
import Style from './FavoritesElement.module.scss';

export default class FavoritesElement extends Component {


  click = () => {
    this.props.updateSelectedFavorites(this.props.favorites.title);
  }


  render() {
    return (
        <div className={ "d-flex flex-row bg-white " + Style.container }>
          <img width="150" height="220" alt="film" src={ this.props.favorites.img } />
          <div className="flex-fill d-flex flex-column p-3">
            <h5>{ this.props.favorites.title }</h5>
            <hr className="w-100" />
            <span className="flex-fill">{ this.props.favorites.details }</span>
            <div className="d-flex flex-row justify-content-end">
              <button onClick={ () => { this.props.removeFavorites(this.props.favorites.title) }} className="btn btn-small btn-danger">Remove</button>
            </div>
          </div>
        </div>
    );
  }
}