import {
  Route,
  Routes,
  HashRouter,
  NavLink
} from 'react-router-dom'
import './App.css'
import PokemonList from './pages/PokemonListPage'
import Profile from './pages/ProfilePage'
import PokemonDetailPage from './pages/PokemonDetail'
import RandomPokemon from './pages/RandomPage'

function App(){

  return (
    <HashRouter>
      <div>
        <NavLink to='/'>Pokemon List</NavLink>
        <NavLink to='/profile'>Profile</NavLink>
        <NavLink to='/random'>Random</NavLink>
      </div>
      <Routes>
        <Route path='/' element={<PokemonList/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/pokemon/:name' element={<PokemonDetailPage />}></Route>
        <Route path='/random' element={<RandomPokemon />}></Route>
      </Routes>
    </HashRouter>
  )
}
export default App