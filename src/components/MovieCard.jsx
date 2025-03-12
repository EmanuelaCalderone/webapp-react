//importo Link del modulo react-router
import { Link } from "react-router-dom"

const MovieCard = ({ movieProp }) => {
    const { id, title, director, genre, release_year, abstract, image } = movieProp;

    return (

        <div className="movie-card">
            <Link className="card" to={`/movies/${id}`}>Dettagli film</Link>
            {/* dati dinamici */}

            {/* immagine */}
            <img className="card-img-top" src={image} alt={title} />
            {/* titolo */}
            <h5 className="movie-title">{title}</h5>
            {/* regista */}
            <address><i>{director}</i></address>
            {/* genere */}
            <span>{genre}</span>
            {/* anno di uscita */}
            <span>{release_year}</span>
            {/* trama */}
            <p className="card-text">{abstract}</p>
        </div>
    )
}

export default MovieCard;