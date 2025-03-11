//importo Link del modulo react-router
import { Link } from "react-router-dom"

const MovieReview = () => {

    return (

        <div>
            <Link className="review" to="/"></Link>
            <p className="review-text">
                testo recensione
            </p>
            <address><i>Nome autore recensione</i></address>
        </div>

    )
}
export default MovieReview;