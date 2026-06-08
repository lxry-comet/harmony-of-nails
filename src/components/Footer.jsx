export default function Footer() {
	const styles = {
		footer: {
			width: '100%',
			maxWidth: '1100px',
			margin: '0 auto',
			padding: '40px 20px',
			borderTop: '1px solid #38bdf8',
			fontFamily: 'sans-serif',
			fontSize: '14px',
			color: '#111111',
			display: 'flex',
			flexDirection: 'column',
			gap: '20px',
			alignItems: 'center',
			textAlign: 'center'
		},
		topRow: {
			display: 'flex',
			justifyContent: 'center',
			gap: '40px',
			flexWrap: 'wrap',
			width: '100%',
			maxWidth: '1100px'
		},
		bottomRow: { fontWeight: '500' },
		link: { color: '#111111', textDecoration: 'none' }
	}
	return (
		<footer style={styles.footer}>
			{' '}
			<div style={styles.topRow}>
				{' '}
				<span>© 2026 Harmony of Nails. Wszystkie prawa zastrzeżone.</span>{' '}
				<span>Godziny: Pon–Sob 10:00–19:00</span>{' '}
				<span>
					{' '}
					Lokalizacja: Centrum miasta (
					<a href='#mapa' style={styles.link}>
						zobacz mapę
					</a>
					){' '}
				</span>{' '}
			</div>{' '}
			<div style={styles.bottomRow}>
				{' '}
				<span>Kontakt: hello@harmonyofnails.com • +48 600 123 456</span>{' '}
			</div>{' '}
		</footer>
	)
}
