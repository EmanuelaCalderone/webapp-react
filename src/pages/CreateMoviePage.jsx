//importo axios
import axios from "axios";
// importo Link e useNavigate del modulo react-router
import { Link, useNavigate } from "react-router-dom"
// importo lo useState per la gestione dei dati del form
import { useState } from "react";

//stato iniziale del form con i campi per l'aggiunta del nuovo film
const initialData = {
    title: "",
    director: "",
    genre: "",
    release_year: "",
    abstract: "",
    image: null,
};

//definisco l'endpoint dell'API per gestire le richieste ai film nel backend locale
const endpointApi = "http://localhost:3000/api/movies";

//definisco il componente
const CreateMoviePage = () => {

    //inizializzo useNavigate per la navigazione tra le pag
    const navigate = useNavigate();

    //definisco gli stati iniziali del form, nizializzandolo con initialData
    const [formDataObj, setFormDataObj] = useState(initialData);

    //funzione per aggiornare lo stato dopo compilazione form
    const setFieldValue = (e) => {
        const { value, name } = e.target;
        //se il campo è image, salvo direttamente il file
        if (name === "image") setFormDataObj({ ...formDataObj, image: e.target.files[0] });
        //altrimenti aggiorno il valore del campo nel form
        else setFormDataObj({ ...formDataObj, [name]: value });
    }

    //setto la funzione per gestire l'invio del form
    const handleSubmit = (e) => {
        //evito comportamento predefinito form
        e.preventDefault();

        //creo l'oggetto formData per inviare i dati del form in formato multipart/form-data, necessario per l'upload di file come immagini
        const formData = new FormData();
        formData.append("title", formDataObj.title);
        formData.append("director", formDataObj.director);
        formData.append("genre", formDataObj.genre);
        formData.append("release_year", formDataObj.release_year);
        formData.append("abstract", formDataObj.abstract);
        formData.append("image", formDataObj.image);

        //richiesta post per inviare i dati del film al backend
        axios.post(endpointApi, formData, { headers: { "Content-Type": "multipart/form-data" } })
            .then(
                //reindirizzo alla home dopo l'invio dei dati
                () => { navigate("/") }
            )
            //gestione errori
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            {/* header */}
            <header className="bg-light p-3">
                <h1>Add a New Movie</h1>
            </header>

            {/* sezione del form per aggiungere nuovo film */}
            <section id="movie-form">
                <form onSubmit={handleSubmit}>
                    {/* campo titolo */}
                    <div className="mb-4">
                        <label>Title:</label>
                        <input
                            className="form-control"
                            name="title"
                            type="text"
                            value={formDataObj.title}
                            onChange={setFieldValue}
                            required
                        />
                    </div>

                    {/* campo regista*/}
                    <div className="mb-4">
                        <label>Director:</label>
                        <input
                            className="form-control"
                            name="director"
                            type="text"
                            value={formDataObj.director}
                            onChange={setFieldValue}
                            required
                        />
                    </div>

                    {/* campo genere */}
                    <div className="mb-4">
                        <label>Genre:</label>
                        <input
                            className="form-control"
                            name="genre"
                            type="text"
                            value={formDataObj.genre}
                            onChange={setFieldValue}
                            required
                        />
                    </div>

                    {/* campo anno uscita */}
                    <div className="mb-4">
                        <label>Release Year:</label>
                        <input
                            className="form-control"
                            name="release_year"
                            type="number"
                            value={formDataObj.release_year}
                            onChange={setFieldValue}
                            required
                        />
                    </div>

                    {/* campo selezione immagine */}
                    <div className="mb-4">
                        <label>Image:</label>
                        <input
                            className="form-control"
                            name="image"
                            type="file"
                            onChange={setFieldValue}
                            required
                        />
                    </div>

                    {/* campo trama film */}
                    <div className="mb-4">
                        <label>Abstract:</label>
                        <textarea
                            className="form-control"
                            name="abstract"
                            value={formDataObj.abstract}
                            onChange={setFieldValue}
                            required
                        ></textarea>
                    </div>

                    <div className="border-top mb-3 pt-3 d-flex justify-content-between">
                        {/* pulsante per tornare indietro */}
                        <Link className="btn btn-secondary" to="/">Back</Link>
                        {/* pulsante invio film */}
                        <button className="btn btn-success" type="submit">
                            Add Movie
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default CreateMoviePage