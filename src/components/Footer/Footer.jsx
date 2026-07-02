import styles from './Footer.module.css'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.topRow}>
				<span>© 2026 Harmony of Nails. Wszystkie prawa zastrzeżone.</span>
				<span>Godziny: Pon–Sob 10:00–19:00</span>
				<span>
					Lokalizacja: Centrum miasta (
					<a href='#mapa' className={styles.link}>
						zobacz mapę
					</a>
					)
				</span>
			</div>
			<div className={styles.bottomRow}>
				<span>Kontakt: hello@harmonyofnails.com • +48 600 123 456</span>
			</div>
		</footer>
	)
}
