import {
  Route,
  Routes,
  HashRouter,
} from 'react-router-dom'
import './styles/App.css'
import Header from './components/Header/Header'
import { PokemonDetailPage, ProfilePage, PokemonListPage, RandomPage, NotFoundPage } from './pages';

function App() {

  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path='/' element={<PokemonListPage />}></Route>
        <Route path='/profile' element={<ProfilePage />}></Route>
        <Route path='/pokemon/:name' element={<PokemonDetailPage />}></Route>
        <Route path='/random' element={<RandomPage />}></Route>
        <Route path='/*' element={<NotFoundPage />}></Route>
      </Routes>
    </HashRouter>
  )
}
export default App