export default function ServicesGrid() {
	const styles = {
		section: {
			maxWidth: '1100px',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			margin: '0 auto',
			padding: '60px 40px',
			textAlign: 'center',
			fontFamily: 'sans-serif',
			color: '#111827'
		},
		title: { fontSize: '32px', fontWeight: 'bold', marginBottom: '15px' },
		subtitle: { fontSize: '15px', color: '#666666', marginBottom: '50px' },
		flex: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			gap: '40px 20px',
			maxWidth: '1100px',
			margin: '0 auto'
		},
		card: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			textAlign: 'center',
			backgroundColor: '#ffffff',
			border: '1px solid #e5e7eb',
			borderRadius: '18px',
			padding: '24px',
			minWidth: '260px',
			maxWidth: '320px',
			boxShadow: '0 18px 40px rgba(15, 23, 42, 0.08)'
		},
		iconCircle: {
			width: '60px',
			height: '60px',
			borderRadius: '50%',
			backgroundColor: '#f5f5f5',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			fontSize: '24px',
			marginBottom: '15px'
		},
		cardTitle: { fontSize: '16px', fontWeight: '500', marginBottom: '4px' },
		cardSub: { fontSize: '13px', color: '#888888', marginBottom: '12px' },
		cardText: {
			fontSize: '18px',
			fontWeight: 'bold',
			lineHeight: '1.5',
			color: '#111111',
			maxWidth: '100%',
			marginTop: '10px'
		}
	}
	const services = [
		{
			icon: '💅',
			title: 'Manicure',
			sub: 'Piękne i trwałe wykończenie',
			text: 'Pielęgnacja skórek + nadanie kształtu + zabezpieczenie dla długiej trwałości'
		},
		{
			icon: '🦶',
			title: 'Pedicure',
			sub: 'Relaks i gładkość',
			text: 'Pielęgnacja stóp + usuwanie zrogowaceń + masaż dla komfortu'
		},
		{
			icon: '🪒',
			title: 'Depilacja',
			sub: 'Skóra gładka na długo',
			text: 'Precyzyjny zabieg dla okolic zgodnych z Twoimi potrzebami (konsultacja przed wykonaniem)'
		},
		{
			icon: '🧷',
			title: 'Stylizacja brwi',
			sub: 'Kształt, który podkreśla twarz',
			text: 'Modelowanie + dopasowanie koloru i stylu do urody oraz preferencji'
		},
		{
			icon: '👁️',
			title: 'Stylizacja rzęs',
			sub: 'Wyraziste spojrzenie',
			text: 'Podkręcenie i/lub przedłużenie — dopasowane do naturalnego efektu lub bardziej wyrazistego looku'
		},
		{
			icon: '✨',
			title: 'Zadbany efekt na co dzień',
			sub: 'Czysto, delikatnie, profesjonalnie',
			text: 'Zawsze pracujemy w zgodzie z zasadami higieny — dla spokoju i komfortu podczas wizyty'
		}
	]
	return (
		<section style={styles.section} id='uslugi'>
			{' '}
			<h2 style={styles.title}>Zabiegi — najczęściej wybierane</h2>{' '}
			<p style={styles.subtitle}>
				Wybierz to, czego potrzebujesz — od klasycznego manicure po kompleksowe
				stylizacje.
			</p>{' '}
			<div style={styles.flex}>
				{' '}
				{services.map((item, index) => (
					<div key={index} style={styles.card}>
						{' '}
						<div style={styles.iconCircle}>{item.icon}</div>{' '}
						<h3 style={styles.cardTitle}>{item.title}</h3>{' '}
						<span style={styles.cardSub}>{item.sub}</span>{' '}
						<p style={styles.cardText}>{item.text}</p>{' '}
					</div>
				))}{' '}
			</div>{' '}
		</section>
	)
}
