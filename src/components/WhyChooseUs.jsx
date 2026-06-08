export default function WhyChooseUs() {
	const styles = {
		section: {
			maxWidth: '1100px',

			padding: '60px 40px',
			maxWidth: '1100px',
			margin: '0 auto',
			fontFamily: 'sans-serif'
		},
		topFlex: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			textAlign: 'center',
			marginBottom: '40px'
		},
		title: { fontSize: '32px', fontWeight: 'bold', marginBottom: '12px' },
		subtitle: { fontSize: '15px', color: '#555555' },
		rightPlaceholder: {
			width: '140px',
			height: '140px',
			backgroundColor: '#e5e5e5',
			borderRadius: '4px'
		},
		 flex: {
			display: ' flex',
			alignItems: 'center',
			justifyContent:'center',
			gap: '24px'
		},
		card: {
			border: '1px solid rgb(56, 189, 248)',
			borderRadius: '8px',
			padding: '24px',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			gap: '20px',
			backgroundColor: '#ffffff',
			textAlign: 'center'
		},
		leftBox: {
			width: '80px',
			height: '80px',
			backgroundColor: '#e5e5e5',
			borderRadius: '4px',
			flexShrink: 0
		},
		cardContent: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			textAlign: 'center'
		},
		cardTitle: { fontSize: '16px', fontWeight: 'bold', marginBottom: '4px' },
		cardSub: { fontSize: '12px', color: '#888888', marginBottom: '8px' },
		cardText: {
			fontSize: '14px',
			fontWeight: '600',
			lineHeight: '1.4',
			color: '#222222',
			marginBottom: '12px'
		},
		icons: { display: 'flex', gap: '8px' }
	}
	const items = [
		{
			title: 'Czysto i higienicznie',
			sub: 'Jednorazowe narzędzia i zdezynfekowane stanowiska',
			text: 'Pracujemy zgodnie z rygorystycznymi zasadami higieny — dla Twojego komfortu.'
		},
		{
			title: 'Komfort na pierwszym miejscu',
			sub: 'Delikatna pielęgnacja',
			text: 'Stawiamy na łagodne zabiegi i dbałość o kondycję płytki oraz skóry.'
		},
		{
			title: 'Styl dopasowany do Ciebie',
			sub: 'Konsultacja przed zabiegiem',
			text: 'Powiedz, jaki efekt chcesz uzyskać lub wybierz inspirację — dopasujemy styl.'
		},
		{
			title: 'Trwałość i precyzja',
			sub: 'Dobre przygotowanie robi różnicę',
			text: 'Solidna baza i staranne wykończenie pomagają utrzymać efekt dłużej.'
		}
	]
	return (
		<section style={styles.section}>
			{' '}
			<div style={styles.topFlex}>
				{' '}
				<div>
					{' '}
					<h2 style={styles.title}>
						Dlaczego klienci wybierają Harmony of Nails
					</h2>{' '}
					<p style={styles.subtitle}>
						Spokojne miejsce, higiena i doświadczenie — efekt, który cieszy od
						pierwszego dnia.
					</p>{' '}
				</div>{' '}
				<div style={styles.rightPlaceholder}></div>{' '}
			</div>{' '}
			<div style={styles. flex}>
				{' '}
				{items.map((item, idx) => (
					<div key={idx} style={styles.card}>
						{' '}
						<div style={styles.leftBox}></div>{' '}
						<div style={styles.cardContent}>
							{' '}
							<div>
								{' '}
								<h3 style={styles.cardTitle}>{item.title}</h3>{' '}
								<p style={styles.cardSub}>{item.sub}</p>{' '}
								<p style={styles.cardText}>{item.text}</p>{' '}
							</div>{' '}
							<div style={styles.icons}>
								{' '}
								<span>🛡️</span>
								<span>🌿</span>
								<span>💙</span>{' '}
							</div>{' '}
						</div>{' '}
					</div>
				))}{' '}
			</div>{' '}
		</section>
	)
}
