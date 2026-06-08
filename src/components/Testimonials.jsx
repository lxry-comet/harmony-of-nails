export default function Testimonials() {
	const styles = {
		section: {
			width: '100%',
			maxWidth: '1100px',
			margin: '0 auto',
			padding: '60px 40px',
			textAlign: 'center',
			fontFamily: 'sans-serif'
		},
		title: { fontSize: '32px', fontWeight: 'bold', marginBottom: '12px' },
		subtitle: { fontSize: '15px', color: '#555555', marginBottom: '40px' },
		flex: {
			display: 'flex',
			// flexWrap: 'wrap',
			justifyContent: 'center',
			alignItems: 'stretch',
			gap: '24px',
			width: '100%',
			maxWidth: '1100px',
			margin: '0 auto'
		},
		card: {
			backgroundColor: '#f5f5f5',
			borderRadius: '8px',
			padding: '24px',
			textAlign: 'center',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between',
			alignItems: 'center',
			minHeight: '180px'
		},
		cardHeader: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			marginBottom: '15px',
			gap: '10px'
		},
		userBox: { display: 'flex', alignItems: 'center', gap: '10px' },
		avatar: {
			width: '32px',
			height: '32px',
			borderRadius: '50%',
			backgroundColor: '#dcdcdc'
		},
		userName: { fontSize: '14px', fontWeight: 'bold' },
		stars: { color: '#ffb703', fontSize: '12px' },
		text: {
			fontSize: '15px',
			lineHeight: '1.4',
			color: '#333333',
			marginBottom: '20px'
		},
		footerIcons: {
			display: 'flex',
			justifyContent: 'center',
			gap: '8px',
			fontSize: '14px'
		}
	}
	const reviews = [
		{
			name: 'Amina R.',
			text: 'Idealny kształt i bardzo trwały połysk. Żel wytrzymał prawie 4 tygodnie!'
		},
		{
			name: 'Sofia K.',
			text: 'Stylizacja rzęs wyszła dokładnie tak, jak na zdjęciu referencyjnym — czysto i równo.'
		},
		{
			name: 'Maya T.',
			text: 'Super relaksująca wizyta. Bardzo higienicznie i przemiła obsługa.'
		}
	]
	return (
		<section style={styles.section} id='opinie'>
			{' '}
			<h2 style={styles.title}>Opinie klientek</h2>{' '}
			<p style={styles.subtitle}>
				Rzeczywiste słowa od osób, które wracają do nas z przyjemnością.
			</p>{' '}
			<div style={styles.flex}>
				{' '}
				{reviews.map((rev, idx) => (
					<div key={idx} style={styles.card}>
						{' '}
						<div>
							{' '}
							<div style={styles.cardHeader}>
								{' '}
								<div style={styles.userBox}>
									{' '}
									<div style={styles.avatar}></div>{' '}
									<span style={styles.userName}>{rev.name}</span>{' '}
								</div>{' '}
								<span style={styles.stars}>★★★★★</span>{' '}
							</div>{' '}
							<p style={styles.text}>{rev.text}</p>{' '}
						</div>{' '}
						<div style={styles.footerIcons}>
							{' '}
							<span>⭐</span>
							<span>💬</span>{' '}
						</div>{' '}
					</div>
				))}{' '}
			</div>{' '}
		</section>
	)
}
