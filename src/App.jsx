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

function App() {

  return (
    <HashRouter>
      <div>
        <NavLink to='/'>Pokemon List</NavLink>
        <NavLink to='/profile'>Profile</NavLink>
      </div>
      <Routes>
        <Route path='/' element={<PokemonList/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/pokemon/:name' element={<PokemonDetailPage />}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App
