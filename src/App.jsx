//importo la homepage
import HomePage from './pages/HomePage';
//importo la pagina di dettaglio dei film
import MovieInfo from './pages/MovieInfo';

//importo layout
import DefaultLayout from './layouts/DefaultLayout';

//importo rotte da react-router (radice rotte, blocco rotte, singole rotte)
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//importo la pagina NotFoundPage
import NotFoundPage from './pages/NotFoundPage';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          {/* HomePage */}
          <Route index path="/" element={<HomePage />} />
          {/* Dettagli film */}
          <Route path="/movies/:id" element={<MovieInfo />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
