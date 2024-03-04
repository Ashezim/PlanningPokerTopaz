import { Link, useLocation } from 'react-router-dom'
import styles from './NavBar.module.css'
import Container from './Container'
import logo from '../../img/Logo-para-Site.png'

function NavBar() {

    const location = useLocation();

    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Topaz" />
                </Link>
                {location.pathname !== "/" && (
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Link to="/">Início</Link>
                        </li>
                    </ul>
                )}
            </Container>
        </nav >
    )
}

export default NavBar