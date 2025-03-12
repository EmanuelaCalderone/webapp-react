//importo Link modulo react-router
import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <div className="#">
            <h2>Page Not Found</h2>
            <p className="#">Sorry. The page you are looking for does not exist.</p>
            <Link className="#" to="/">Back to Home</Link>
        </div>
    )
}

export default NotFoundPage 