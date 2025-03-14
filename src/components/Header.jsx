//importo Link del modulo react-router
import { Link } from "react-router-dom"

const Header = () => {

    return (
        <nav>
            <div>
                <Link className="header-navbar" to="/">MOVIES</Link>
                {/* aggiungo il link alla nuova rotta appena creata per l'inserimento di nuovi film */}
                <Link className="#" to="/movies/create">Add Movie</Link>
            </div>
        </nav>
    )
}
export default Header;