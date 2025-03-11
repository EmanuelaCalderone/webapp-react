import MovieCard from "../components/MovieCard"

const HomePage = () => {
    return (
        <>
            <h1 className="movies_list">Lista film</h1>
            <div className="movies-container">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
        </>
    )
}

export default HomePage