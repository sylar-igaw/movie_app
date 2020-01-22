import React from 'react';
import axios from 'axios';
import Movie from './Movie'
import "./App.css"
import "./Movie.css"

class App extends React.Component{
  constructor(props){
    super(props);
    console.log('constructor');
  }
  state = {
    isLoading : true,
    movie : []
  };
  render() {
    const {isLoading, movies} = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
              <span className="loader__text">Loading...</span>
          </div>
          ): (
            <div className="movies">
              {movies.map(movie => (  
                <Movie 
                  key={movie.id} 
                  id={movie.id} 
                  year={movie.year} 
                  title={movie.title} 
                  summary={movie.summary} 
                  poster={movie.medium_cover_image} 
                  rating={movie.rating}
                  genres = {movie.genres}
                  ></Movie>
              ))}
            </div>
          )
        }
      </section>
    )}
  getMovies = async () => {
    const {
      data : {
        data : { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    console.log(movies);
    this.setState({movies, isLoading:false });
  }
  componentDidMount(){
    this.getMovies();
    

  }

}

export default App;
