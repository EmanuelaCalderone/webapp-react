//importo axios
import axios from "axios"

//uso di state ed effect
import { useState, useEffect } from "react"

//importo Link del modulo react-router
import { Link, useParams, useNavigate } from "react-router-dom"

//importo componente di listato
import MovieReview from "../components/MovieReview"

//importo il componente con il form
import ReviewForm from './../components/ReviewForm';

const MovieInfo = () => {

    //recupero l'id del film
    const { id } = useParams();

    //uso redirect con useNavigate();
    const redirect = useNavigate();

    //setto stato componente
    const [movie, setMovie] = useState({});

    //funzione di chiamata all'API per dettaglio di ogni singolo  film
    const fetchMovie = () => {
        axios.get("http://localhost:3000/api/movies/" + id)
            .then(
                res => {
                    setMovie(res.data)
                }
            )
            .catch(err => {
                console.log(err);
                if (err.status === 404) redirect("/404")
            }
            )
    }

    //chiamata all'API per montaggio componente
    useEffect(fetchMovie, []);

    //funzione di rendering delle recensioni
    const renderReviews = () => {
        return movie.reviews?.map(
            review => <MovieReview key={review.id} reviewProp={review} />
        )
    }

    return (
        <>
            <header id="movie">
                <div className="movie-cover">
                    {/* immagine */}
                    <img className="card-img-top" src={movie.image} alt={movie.title} />

                    <div className="movie-info">
                        {/* titolo */}
                        <h5 className="movie-title">{movie.title}</h5>
                        {/* regista */}
                        <address><i>Regia di: {movie.director}</i></address>
                        {/* genere */}
                        <span>{movie.genre}</span>
                        {/* anno di uscita */}
                        <span>{movie.release_year}</span>
                        {/* trama */}
                        <p className="card-text">{movie.abstract}</p>
                    </div>
                </div>
            </header>

            <section id="reviews">
                <header className="reviews-header">
                    <h4>Our community reviews</h4>
                </header>
                {/* recensioni */}
                {renderReviews()}
            </section>

            {/* componente form */}
            <section>
                <ReviewForm movie_id={movie.id} reloadReviews={fetchMovie} />
            </section>

            <footer>
                <Link className="#" to="/">Torna alla Home</Link>
            </footer>
        </>
    )
}

export default MovieInfo