//importo la homepage
import HomePage from './pages/HomePage';
//importo la pagina di dettaglio dei film
import MovieInfo from './pages/MovieInfo';

//importo layout
import DefaultLayout from './layouts/DefaultLayout';

//importo rotte da react-router (radice rotte, blocco rotte, singole rotte e Outlet)
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

//importo la pagina NotFoundPage
import NotFoundPage from './pages/NotFoundPage';

//importo la rotta della pagina CreateMoviePage
import CreateMoviePage from './pages/CreateMoviePage';

//importo il loader
import Loader from "./components/Loader";

//importo l'header
import Header from "./components/Header";

//definisco il componente principale
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          {/* HomePage */}
          <Route index path="/" element={<HomePage />} />
          {/* Inserisco la rotta per la pagina con il form per l'inserimento del nuovo film */}
          <Route path="/movies/create" element={<CreateMoviePage />} />
          {/* Dettagli film */}
          <Route path="/movies/:id" element={<MovieInfo />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
