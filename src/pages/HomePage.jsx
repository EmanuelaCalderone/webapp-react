import MovieCard from "../components/MovieCard"
//importo axios
import axios from "axios"
//uso di state e effecti
import { useState, useEffect } from "react"


const HomePage = () => {

    //setto lo stato del componente
    const [movies, setMovies] = useState([])

    //funzione di fetching dei dati della lista dei film (INDEX)
    const fetchMovies = () => {
        axios.get("http://localhost:3000/api/movies")
            .then(
                res => {
                    setMovies(res.data)
                }
            )
            .catch(err => console.log(err))
    }

    useEffect(fetchMovies, []);

    //funzione di rendering delle card dei film
    const renderMovies = () => {
        return movies.map(
            movie => {
                return (
                    <div className="col" key={movie.id}>
                        <MovieCard movieProp={movie} />
                    </div>

                )
            }
        )
    }

    return (
        <>
            <h1 className="movies_list">Lista film</h1>
            <div className="movies-container">
                {renderMovies()}
            </div>
        </>
    )
}

export default HomePage