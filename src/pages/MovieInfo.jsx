import MovieReview from "../components/MovieReview"

const MovieInfo = () => {
    return (
        <>
            <div className="movie-info">
                <img></img>
                <h1>titolo film</h1>
                <span>regista</span>
                <span>genere</span>
                <span>anno</span>
                <span>trama</span>
                <MovieReview />
            </div>
        </>
    )
}

export default MovieInfo