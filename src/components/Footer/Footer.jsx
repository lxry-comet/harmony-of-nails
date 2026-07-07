import styles from './Footer.module.css'
import { FiMail, FiPhone } from 'react-icons/fi'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.topRow}>
				<div className={styles.topRowElements}>
					<span>
						<FiPhone className={styles.icon} />
						<a href='tel:+48793965530' className={styles.link}>
							+48 793 965 530
						</a>
					</span>
					<span>
						<FiMail className={styles.icon} />
						<a
							href='mailto:biuro.harmonyofbeauty@gmail.com'
							className={styles.link}
						>
							biuro.harmonyofbeauty@gmail.com
						</a>
					</span>
				</div>
				<div>
					<span className={styles.hours}>Godziny: Pon–Pt 09:00–18:00</span>
				</div>
				<div className={styles.topRowElements}>
					<span className={styles.location}>
						Lokalizacja: Centrum miasta (
						<a
							href='https://www.google.com/maps?cid=15046654302001010948'
							className={styles.link}
						>
							zobacz mapę
						</a>
						)
					</span>
				</div>
			</div>
			<div className={styles.bottomRow}>
				© 2026 Harmony of Nails. Wszystkie prawa zastrzeżone.
			</div>
		</footer>
	)
}
