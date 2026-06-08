export default function Navbar() {
	const styles = {
		navbar: {
			width: '100%',
			maxWidth: '1100px',
			margin: '0 auto',
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			padding: '20px 40px',
			borderBottom: '1px solid #e0e0e0',
			backgroundColor: '#ffffff',
			fontFamily: 'sans-serif'
		},
		logoContainer: { display: 'flex', alignItems: 'center', gap: '12px' },
		logoCircle: {
			width: '32px',
			height: '32px',
			backgroundColor: '#e0e0e0',
			borderRadius: '50%'
		},
		logoText: { fontSize: '22px', fontWeight: 'bold', color: '#000000' },
		navLinks: {
			display: 'flex',
			justifyContent: 'center',
			gap: '24px',
			listStyle: 'none',
			margin: 0,
			padding: 0
		},
		link: {
			textDecoration: 'none',
			color: '#333333',
			fontSize: '15px',
			fontWeight: '500',
			cursor: 'pointer'
		}
	}
	return (
		<nav style={styles.navbar}>
			{' '}
			<div style={styles.logoContainer}>
				{' '}
				<div style={styles.logoCircle}></div>{' '}
				<span style={styles.logoText}>Harmony of Nails</span>{' '}
			</div>{' '}
			<ul style={styles.navLinks}>
				{' '}
				<li>
					<a href='#uslugi' style={styles.link}>
						Usługi
					</a>
				</li>{' '}
				<li>
					<a href='#portfolio' style={styles.link}>
						Portfolio
					</a>
				</li>{' '}
				<li>
					<a href='#opinie' style={styles.link}>
						Opinie
					</a>
				</li>{' '}
				<li>
					<a href='#cennik' style={styles.link}>
						Cennik
					</a>
				</li>{' '}
				<li>
					<a href='#kontakt' style={styles.link}>
						Kontakt
					</a>
				</li>{' '}
			</ul>{' '}
		</nav>
	)
}
