//importo axios
import axios from 'axios';

//importo lo useState
import { useState } from 'react';

//definisco il componente passando movie_id e realoadReviews come props
const ReviewForm = ({ movie_id, realoadReviews }) => {

    //definisco lo stato iniziale del form
    const initialValue = { name: "", text: "", vote: 1 };

    //creo la variabile di stato con i dati del form
    const [formData, setFormData] = useState(initialValue);

    //creo la funzione per creare l'oggetto con i valori del form
    const setFieldValue = (e) => {
        const { value, name } = e.target;
        //aggiorno lo stato del form con il nuovo valore inserito
        setFormData({ ...formData, [name]: value });
    }

    //definisco l'endpoint dell'API per l'invio della recensione
    const urlEndpoint = `http://localhost:3000/api/movies/${movie_id}/reviews`;

    //creo la funzione per inviare la richiesta al submit
    const submitReview = (e) => {
        //evito comportamento predefinito del form(refresh automatico pagina)
        e.preventDefault();

        //invio la richiesta POST all'API con i dati del form in formato JSON
        axios.post(urlEndpoint, formData, { headers: { 'Content-Type': 'application/json' } })
            .then(
                () => {
                    //resetto il form dopo l'invio
                    setFormData(initialValue)
                    //ricarico le recensioni
                    realoadReviews()
                }
            )
            //gestione errore
            .catch(err => console.log(err)
            )
    }

    return (
        //creo il div con il form
        <div className="card">
            <header className="card-header">
                <h5>Add your review</h5>
            </header>
            <div className="card-body">
                {/*inserisco form per l'inserimento della recensione*/}
                <form onSubmit={submitReview}>
                    <div className="form">
                        <label>User</label>
                        {/*creo l'input per il nome utente*/}
                        <input type="text" name="name" className="form-control" value={formData.name} onChange={setFieldValue} />
                    </div>
                    <div className="form">
                        <label>Review</label>
                        {/*area testo per la recensione*/}
                        <textarea className="form-control" name="text" value={formData.text} onChange={setFieldValue} ></textarea>
                    </div>
                    <div className="form">
                        <label>Voto</label>
                        <input type="number" min="1" max="5" className="form-control" name='vote' value={formData.vote} onChange={setFieldValue} />
                    </div>
                    <div className="button-form">
                        {/*pulsante per l'invio*/}
                        <button type="submit" className="button">
                            Send
                        </button>
                    </div>
                </form>
            </div>

        </div>

    )
}

export default ReviewForm;