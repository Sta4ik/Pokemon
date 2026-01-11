import { NavLink } from 'react-router-dom'
import styles from './header.module.css'

function Header() {
    return (
        <div className={styles.navigation}>
            <img src='icon.png' className={styles.icon}></img>
            <NavLink to='/'>Список покемонов</NavLink>
            <NavLink to='/profile'>Профиль</NavLink>
            <NavLink to='/random'>Случайный покемон</NavLink>
        </div>
    )
}
export default Header;