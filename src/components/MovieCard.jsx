//importo Link del modulo react-router
import { Link } from "react-router-dom"

const MovieCard = () => {

    return (

        <div className="movie-card">
            <Link className="card" to="/"></Link>
            {/* immagine copertina film statica di prova */}
            <img className="card-img-top" src="http://localhost:3000/img/movies_cover/inception.jpg" alt="descrizione immagine" />
            <h5 className="movie-title">Titolo film</h5>
            <address><i>Regista</i></address>
            <p className="card-text">Trama</p>
        </div>

    )
}
export default MovieCard;