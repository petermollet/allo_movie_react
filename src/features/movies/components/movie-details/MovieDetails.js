import React, { Component } from 'react';

export default class MovieDetails extends Component {

    render() {
        return (
                <div className="w-25 p-4 d-flex flex-column bg-white">
                    <h5>{ this.props.movie.title }</h5>
                    <hr className="w-100"></hr>
                    <div>
                        <img className="d-block mx-auto  w-50" alt="img" src={ this.props.movie.img } />
                    </div>
                    <hr className="w-100"></hr>
                    <span className="text-secondary">{ this.props.movie.details }</span>
                    <span>{ this.props.movie.description }</span>
                </div>
            );    
        }

}

