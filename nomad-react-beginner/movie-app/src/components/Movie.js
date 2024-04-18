import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Movie({ id, coverImg, title, genres, summary }) {

    return (
        <div>
            <img src={coverImg} alt="movieCoverImage" />
            <h3>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h3>
            <ul>{genres.map((genre, i)=>{
                return ( <li key={i}>{genre}</li> )
            })}</ul>
            <div>{summary}</div>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
}

export default Movie