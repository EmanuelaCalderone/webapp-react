//importo Link del modulo react-router
import { Link } from "react-router-dom"

const Header = () => {

    return (
        <nav>
            <div>
                <Link className="header-navbar" to="/">MOVIES</Link>            </div>
        </nav>
    )
}
export default Header;