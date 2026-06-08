export default function Portfolio() {
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
			flexDirection: 'row',
			flexWrap: 'wrap',
			justifyContent: 'center',
			alignItems: 'stretch',
			gap: '24px',
			width: '100%',
			maxWidth: '1100px',
			margin: '0 auto'
		},
		card: {
			border: '1px solid #efefef',
			borderRadius: '8px',
			overflow: 'hidden',
			textAlign: 'left',
			backgroundColor: '#ffffff'
		},
		imgPlaceholder: {
			height: '260px',
			backgroundColor: '#e9e9e9',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			padding: '24px',
			textAlign: 'center',
			position: 'relative'
		},
		imgText: { fontSize: '13px', color: '#444444', lineHeight: '1.4' },
		dots: { position: 'absolute', bottom: '12px', display: 'flex', gap: '4px' },
		dot: {
			width: '6px',
			height: '6px',
			borderRadius: '50%',
			backgroundColor: '#cbd5e1'
		},
		activeDot: {
			width: '16px',
			height: '6px',
			borderRadius: '3px',
			backgroundColor: '#38bdf8'
		},
		body: {
			padding: '20px',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			textAlign: 'center'
		},
		mainText: { fontSize: '15px', fontWeight: '500', marginBottom: '12px' },
		tagRow: { display: 'flex', gap: '8px', marginBottom: '16px' },
		tag: {
			backgroundColor: '#f1f5f9',
			padding: '4px 8px',
			borderRadius: '4px',
			fontSize: '11px',
			color: '#475569'
		},
		artistRow: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			gap: '8px',
			marginBottom: '12px'
		},
		miniAvatar: {
			width: '18px',
			height: '18px',
			borderRadius: '50%',
			backgroundColor: '#cbd5e1'
		},
		artistName: { fontSize: '13px', color: '#333333', fontWeight: '500' },
		icons: { display: 'flex', gap: '10px' }
	}
	const items = [
		{
			imgText: 'Delikatne, białe french z pojedynczym akcentem perłowym',
			main: 'Miękko, elegancko i idealnie na co dzień.',
			tags: ['Minimal', 'Perła'],
			artist: 'Leila'
		},
		{
			imgText:
				'Wyrazista geometria w czerwono-czarnej palecie na błyszczącej bazie',
			main: 'Ostre linie i wysoki kontrast — efekt zdecydowanie przyciąga wzrok!',
			tags: ['Geometria', 'Bold'],
			artist: 'Noor'
		},
		{
			imgText: 'Lawendowe ombre z subtelnym połyskiem na końcówkach',
			main: 'Marzycielskie ombre z delikatnym, świetlistym wykończeniem.',
			tags: ['Ombré', 'Sparkle'],
			artist: 'Amara'
		}
	]
	return (
		<section style={styles.section} id='portfolio'>
			{' '}
			<h2 style={styles.title}>Stylizacje w obiektywie</h2>{' '}
			<p style={styles.subtitle}>Kilka świeżych realizacji z naszego salonu.</p>{' '}
			<div style={styles.flex}>
				{' '}
				{items.map((item, idx) => (
					<div key={idx} style={styles.card}>
						{' '}
						<div style={styles.imgPlaceholder}>
							{' '}
							<p style={styles.imgText}>{item.imgText}</p>{' '}
							<div style={styles.dots}>
								{' '}
								<div style={styles.activeDot}></div>{' '}
								<div style={styles.dot}></div>{' '}
								<div style={styles.dot}></div>{' '}
							</div>{' '}
						</div>{' '}
						<div style={styles.body}>
							{' '}
							<p style={styles.mainText}>{item.main}</p>{' '}
							<div style={styles.tagRow}>
								{' '}
								{item.tags.map((t, i) => (
									<span key={i} style={styles.tag}>
										{t}
									</span>
								))}{' '}
							</div>{' '}
							<div style={styles.artistRow}>
								{' '}
								<div style={styles.miniAvatar}></div>{' '}
								<span style={styles.artistName}>
									Harmony Artist • {item.artist}
								</span>{' '}
							</div>{' '}
							<div style={styles.icons}>
								{' '}
								<span>📸</span>
								<span>💙</span>
								<span>🎨</span>{' '}
							</div>{' '}
						</div>{' '}
					</div>
				))}{' '}
			</div>{' '}
		</section>
	)
}
