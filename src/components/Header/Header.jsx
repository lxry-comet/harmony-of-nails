import { Link } from 'react-router-dom'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import styles from './Header.module.css'

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<div className={styles.logoContainer}>
				<Link to='/' className={styles.logoText}>
					Harmony of Nails
				</Link>
			</div>
			<ul className={styles.navLinks}>
				<li>
					<Link to='/' className={styles.link}>
						Strona główna
					</Link>
				</li>
				<li>
					<Link to='/uslugi' className={styles.link}>
						Usługi
					</Link>
				</li>
				<li>
					<Link to='/portfolio' className={styles.link}>
						Portfolio
					</Link>
				</li>
				<li>
					<Link to='/salony' className={styles.link}>
						Salony
					</Link>
				</li>
				<li>
					<Link to='/kontakt' className={styles.link}>
						Kontakt
					</Link>
				</li>
			</ul>

			<Link to='/salony' className={styles.bookButton}>
				Umów wizytę
			</Link>

			<div className={styles.mobileMenu}>
				<BurgerMenu />
			</div>
		</nav>
	)
}
