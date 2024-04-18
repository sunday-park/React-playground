import { useState, useEffect } from 'react';
import axios from 'axios'

function App() {

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    getMovies();
  }, [])

  const getMovies = async () => {
    try {
      const res = await(
        await axios.get('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year')
      ).data;
      setMovies(res.data.movies);
      setLoading(false);
    } catch (err){
      console.error(err)
    }
  }

  console.log(movies);

  return (
    <div className="App">
      {loading ? <strong>Loading...</strong> :
        <div>
          {movies.map((movie)=>{
            return (
              <div key={movie.id}>
                <img src={movie.medium_cover_image}></img>
                <h4>{movie.title}</h4>
                <div>{movie.genres.map((genre, i)=>{
                  return ( <span key={i}> {genre} / </span> )
                })}</div>
                <div>{movie.summary}</div>
              </div>
            )
          })}
        </div>
      }
    </div>
  );
}

export default App;
