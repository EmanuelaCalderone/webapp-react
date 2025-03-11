import MovieReview from "../components/MovieReview"
//importo Link del modulo react-router
import { Link } from "react-router-dom"

const MovieInfo = () => {
    return (
        <>
            <div className="movie-info">
                <img></img>
                <h1>titolo film</h1>
                <p>regista</p>
                <p>genere</p>
                <p>anno</p>
                <p>trama</p>
                <MovieReview />
            </div>

            <section className="reviews">
                <h4>Le recensioni della community</h4>
                <p>Elenco recensioni</p>
            </section>

            <footer>
                <Link className="#" to="/">Torna alla Home</Link>
            </footer>
        </>
    )
}

export default MovieInfo