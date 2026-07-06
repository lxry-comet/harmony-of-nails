import { FiMail, FiPhone } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import styles from './Header.module.css'

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<div className={styles.logoContainer}>
				<div className={styles.logoCircle}></div>
				<span className={styles.logoText}>Harmony of Nails</span>
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
					<a href='#portfolio' className={styles.link}>
						Portfolio
					</a>
				</li>
				<li>
					<a href='#opinie' className={styles.link}>
						Opinie
					</a>
				</li>
				<li>
					<a href='#cennik' className={styles.link}>
						Cennik
					</a>
				</li>
				<li>
					<a href='#kontakt' className={styles.link}>
						Kontakt
					</a>
				</li>
			</ul>

			<ul className={styles.navContacts}>
				<li>
					<FiPhone className={styles.icon} />
					<a href='tel:+48000000000' className={styles.link}>
						+48 000 000 000
					</a>
				</li>
				<li>
					<FiMail className={styles.icon} />
					<a href='mailto:email@gmail.com' className={styles.link}>
						email@gmail.com
					</a>
				</li>
			</ul>

			<div className={styles.mobileMenu}>
				<BurgerMenu />
			</div>
		</nav>
	)
}
