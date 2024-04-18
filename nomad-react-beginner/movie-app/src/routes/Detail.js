import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'


function Detail() {

    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);

    const movieId = useParams();
    console.log(movieId);

    useEffect(()=>{
        getMovie();
    }, [])

    const getMovie = async() => {
        try {
        const res = await(
            await axios.get(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${movieId.id}`
            )
        ).data;
            setMovie(res.data.movie);
            setLoading(false);
        } catch (err){
            console.error(err);
        }
    }

    console.log(movie);

    return (
        <div>
        {loading ? (<strong>Loading...</strong>) : (
            <div className='card'>
                <img src={movie.medium_cover_image
    } alt="movieCoverImage"/>
                <h3>{movie.title}</h3>
                <div>{movie.year}</div>
                <div>{movie.rating}</div>
                <div>{movie.runtime}min</div>
                <ul>{movie.genres && movie.genres.map((genre, i)=>{
                    return (
                        <li>{genre}</li>
                    )
                })}

                </ul>
                <div>{movie.description_full}</div>
            </div>
        )}
        </div>
    )
}

export default Detail