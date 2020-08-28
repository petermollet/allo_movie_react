import React, { Component } from 'react';
import Style from './MovieElement.module.scss';

export default class MovieElement extends Component {


  click = () => {
    this.props.updateSelectedMovie(this.props.movie.title);
  }


  render() {
    return (
        <div onClick={ this.click }  className={ "d-flex flex-row bg-white " + Style.container }>
          <img width="150" height="220" alt="film" src={ this.props.movie.img } />
          <div className="flex-fill d-flex flex-column p-3">
            <h5>{ this.props.movie.title }</h5>
            <hr className="w-100" />
            <span className="flex-fill">{ this.props.movie.details }</span>
            <div className="d-flex flex-row justify-content-end">
              { this.props.isFavorite ? (
                <button onClick={ () => { this.props.removeFavorites(this.props.movie.title) }} className="btn btn-small btn-danger">Remove</button>
              ) : (
                <button onClick={ () => { this.props.addFavorites(this.props.movie.title) }} className="btn btn-small btn-primary">Add</button>
              )}
            </div>
          </div>
        </div>
    );
  }
}