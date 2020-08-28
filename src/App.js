import React, { Component } from 'react';
import { Header } from './components';
import apiMovie, { apiMovieMap } from './conf/api.movie';
import apiFirebase from './conf/api.Firebase';
import Movies from './features/movies';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Favorites from './features/favorites';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: null,
      selectedMovie: 0,
      loaded: false,
      favorites:null
    };
  }

  updateSelectedMovie = (index) => {
    this.setState({
      selectedMovie: index
    })
  }

  componentDidMount() {
    apiMovie.get('/discover/movie')
            .then( res => res.data.results)
            .then( moviesAPI => {
              const movies = moviesAPI.map(apiMovieMap);
              this.updateMovies(movies);
            })
            .catch( err => console.log(err));

    apiFirebase.get('favorites.json')
               .then( res => {
                 let favorites = res.data ? res.data : [];
                 this.updateFavorites(favorites);
               })
  }

  updateMovies = (movies) => {
    this.setState({
      movies,
      loaded: this.state.favorites ? true:false
    })
  }

  updateFavorites = (favorites) => {
    this.setState({
      favorites,
      loaded: this.state.movies ? true:false
    })
  }

  addFavorites = (title) => {
    const movie = {...this.state.movies.find(m=>m.title===title)};
    this.setState({
      favorites:[...this.state.favorites, movie]
    }, () => {
      this.saveFavorites();
    });
  }

  removeFavorites = (title) => {
    const index = this.state.favorites.findIndex(m=>m.title===title);
    this.setState({
      favorites: this.state.favorites.filter((_,i)=>i!==index)
    }, () => {
      this.saveFavorites();
    });
  }

  saveFavorites = () => apiFirebase.put('favorites.json', this.state.favorites);

  render() {
    return (
      <Router>
          <div className="App d-flex flex-column">
            <Header />
            <Switch>
              <Route path="/movies" render={ (props) => {
                return (
                  <Movies
                    { ...props }
                    loaded={ this.state.loaded }
                    updateMovies={ this.updateMovies }
                    updateSelectedMovie={ this.updateSelectedMovie }
                    movies={ this.state.movies }
                    selectedMovie={ this.state.selectedMovie }
                    addFavorites={ this.addFavorites }
                    removeFavorites={ this.removeFavorites }
                    favorites={ this.state.favorites }
                  />
                )}} 
              />
              <Route path="/favorites" render={ (props) => {
                  return (
                    <Favorites 
                      {...props}
                      loaded={ this.state.loaded }
                      favorites={ this.state.favorites }
                      removeFavorites={ this.removeFavorites }
                    />
                )}}
              />
              <Redirect to="/movies" />
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;