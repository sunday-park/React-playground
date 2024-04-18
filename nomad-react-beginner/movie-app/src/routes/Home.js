import { useState, useEffect } from 'react';

import axios from 'axios'
import Movie from '../components/Movie'

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = async () => {
        try {
        const res = await (
            await axios.get(
            "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
            )
        ).data;
        setMovies(res.data.movies);
        setLoading(false);
        } catch (err) {
        console.error(err);
        }
    };

    console.log(movies);

    return (
        <div>
        {loading ? (
            <strong>Loading...</strong>
        ) : (
            <div>
            {movies.map((movie) => {
                return (
                <Movie
                    key={movie.id}
                    coverImg={movie.medium_cover_image}
                    title={movie.title}
                    genres={movie.genres}
                    summary={movie.summary}
                />
                );
            })}
            </div>
        )}
        </div>
    );
}

export default Home;
