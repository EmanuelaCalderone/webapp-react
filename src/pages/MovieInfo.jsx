//importo Link del modulo react-router
import { Link } from "react-router-dom"

//importo componente di listato
import MovieReview from "../components/MovieReview"

const MovieInfo = () => {
    return (
        <>
            <header id="movie">
                <div className="movie-cover">
                    <img className="card-img-top" src="http://localhost:3000/img/movies_cover/inception.jpg" alt="descrizione immagine" />

                    <div className="movie-info">
                        <h1>titolo film</h1>
                        <p>regista</p>
                        <p>genere</p>
                        <p>anno</p>
                        <p>trama</p>
                    </div>
                </div>
            </header>

            <section className="reviews">
                <h4>Le recensioni della community</h4>
                <MovieReview />
                <MovieReview />
                <MovieReview />
                <MovieReview />
                <MovieReview />
                <MovieReview />
            </section>

            <footer>
                <Link className="#" to="/">Torna alla Home</Link>
            </footer>
        </>
    )
}

export default MovieInfo