import MovieReview from "../components/MovieReview"

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
        </>
    )
}

export default MovieInfo