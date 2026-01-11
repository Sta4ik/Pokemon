import {
  Route,
  Routes,
  HashRouter,
} from 'react-router-dom'
import './styles/App.css'
import PokemonListPage from './pages/PokemonListPage'
import Profile from './pages/ProfilePage'
import PokemonDetailPage from './pages/PokemonDetail'
import RandomPokemonPage from './pages/RandomPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Header from './components/Header/Header'

function App() {

  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path='/' element={<PokemonListPage />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/pokemon/:name' element={<PokemonDetailPage />}></Route>
        <Route path='/random' element={<RandomPokemonPage />}></Route>
        <Route path='/*' element={<NotFoundPage />}></Route>
      </Routes>
    </HashRouter>
  )
}
export default App