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
					<a href='#uslugi' className={styles.link}>
						Usługi
					</a>
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
		</nav>
	)
}
