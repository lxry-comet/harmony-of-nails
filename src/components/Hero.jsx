import img from '../../public/Ew1tr32T.jpg'
export default function Hero() {
	const styles = {
		hero: {
			width: '100%',
			minHeight: '80vh',
			position: 'relative',
			background: `url(${img}) center/cover no-repeat`,
			backgroundSize: 'cover',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			padding: '80px 20px',
			fontFamily: 'sans-serif',
			color: '#ffffff'
		},
		overlay: {
			position: 'absolute',
			inset: 0,
			background: 'rgba(0, 0, 0, 0.45)'
		},
		content: {
			position: 'relative',
			zIndex: 2,
			flex: 1,
			maxWidth: '900px',
			textAlign: 'center'
		},
		title: {
			fontSize: '52px',
			fontWeight: '800',
			marginBottom: '24px',
			color: '#ffffff',
			textShadow: '0 18px 40px rgba(0, 0, 0, 0.25)'
		},
		description: {
			fontSize: '18px',
			lineHeight: '1.7',
			marginBottom: '36px',
			color: '#f7f7f8',
			textShadow: '0 12px 30px rgba(0, 0, 0, 0.2)'
		},
		buttons: {
			display: 'flex',
			justifyContent: 'center',
			gap: '15px',
			marginBottom: '30px'
		},
		btnOutline: {
			border: '1px solid rgba(255, 255, 255, 0.85)',
			background: 'rgba(255, 255, 255, 0.12)',
			color: '#ffffff',
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
			<div style={styles.overlay} />
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
			</div>
		</section>
	)
}
