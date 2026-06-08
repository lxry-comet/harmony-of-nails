export default function Hero() {
	const styles = {
		hero: {
			width: '100%',
			maxWidth: '1100px',
			margin: '0 auto',

			// backgroundColor: '#666666',
			color: '#212121	',
			padding: '60px 40px',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			textAlign: 'center',
			gap: '40px',
			fontFamily: 'sans-serif'
		},
		content: { flex: 1, maxWidth: '600px' },
		title: { fontSize: '42px', fontWeight: 'bold', marginBottom: '20px' },
		description: {
			fontSize: '16px',
			lineHeight: '1.5',
			marginBottom: '30px',
			color: '#212121	'
		},
		buttons: {
			display: 'flex',
			justifyContent: 'center',
			gap: '15px',
			marginBottom: '30px'
		},
		btnOutline: {
			border: '1px solid #38bdf8',
			background: 'transparent',
			color: '#000000',
			padding: '12px 24px',
			borderRadius: '8px',
			cursor: 'pointer',
			fontSize: '15px',
			fontWeight: '500'
		},
		btnFilled: {
			border: '1px solid #38bdf8',
			background: 'rgb(56, 189, 248)',
			color: '#000000',
			padding: '12px 24px',
			borderRadius: '8px',
			cursor: 'pointer',
			fontSize: '15px',
			fontWeight: '500'
		},
		tags: { display: 'flex', flexWrap: 'wrap', gap: '10px' },
		tag: {
			background: 'rgba(255, 255, 255, 0.3)',
			padding: '6px 14px',
			borderRadius: '6px',
			fontSize: '13px'
		},
		imagePlaceholder: {
			width: '100%',
			maxWidth: '500px',
			height: '300px',
			backgroundColor: '#a3a3a3',
			borderRadius: '4px'
		}
	}
	const categories = [
		'Manicure',
		'Pedicure',
		'Depilacja',
		'Stylizacja brwi',
		'Stylizacja rzęs'
	]
	return (
		<section style={styles.hero}>
			{' '}
			<div style={styles.content}>
				{' '}
				<h1 style={styles.title}>Harmony of Nails</h1>{' '}
				<p style={styles.description}>
					{' '}
					Manicure, pedicure oraz stylizacje — dbamy o komfort, czystość i
					perfekcyjne wykończenie.{' '}
				</p>{' '}
				<div style={styles.buttons}>
					{' '}
					<button style={styles.btnOutline}>Zobacz usługi</button>{' '}
					<button style={styles.btnFilled}>Umów wizytę</button>{' '}
				</div>{' '}
				<div style={styles.tags}>
					{' '}
					{categories.map((cat, i) => (
						<span key={i} style={styles.tag}>
							{cat}
						</span>
					))}{' '}
				</div>{' '}
			</div>{' '}
			<div style={styles.imagePlaceholder}></div>{' '}
		</section>
	)
}
