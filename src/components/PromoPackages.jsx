export default function PromoPackages() {
	const styles = {
		section: {
			width: '100%',
			maxWidth: '1100px',
			margin: '0 auto',
			padding: '60px 40px',
			fontFamily: 'sans-serif'
		},
		topFlex: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			textAlign: 'center',
			gap: '40px',
			marginBottom: '50px'
		},
		sidePlaceholder: {
			width: '180px',
			height: '180px',
			backgroundColor: '#e5e5e5',
			borderRadius: '4px'
		},
		headerContent: { flex: 1 },
		title: { fontSize: '32px', fontWeight: 'bold', marginBottom: '12px' },
		subtitle: { fontSize: '15px', color: '#555555', marginBottom: '20px' },
		btnContainer: { display: 'flex', justifyContent: 'center', gap: '12px' },
		btnOutline: {
			border: '1px solid rgb(56, 189, 248)',
			background: 'transparent',
			color: '#000000',
			padding: '10px 20px',
			borderRadius: '6px',
			cursor: 'pointer',
			fontWeight: '500'
		},
		btnFilled: {
			border: '1px solid rgb(56, 189, 248)',
			background: 'rgb(56, 189, 248)',
			color: '#000000',
			padding: '10px 20px',
			borderRadius: '6px',
			cursor: 'pointer',
			fontWeight: '500'
		},
		flex: {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'center',
			alignItems: 'stretch',
			gap: '24px',
			width: '100%',
			maxWidth: '1100px',
			margin: '0 auto'
		},
		card: {
			flex: '1 1 320px',
			minWidth: '280px',
			maxWidth: '360px',
			border: '1px solid rgb(56, 189, 248)',
			borderRadius: '12px',
			overflow: 'hidden',
			backgroundColor: '#ffffff',
			boxShadow: '0 16px 40px rgba(15, 23, 42, 0.08)',
			display: 'flex',
			flexDirection: 'column'
		},
		imgContainer: {
			position: 'relative',
			height: '240px',
			backgroundColor: '#f7fbff',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			padding: '20px',
			textAlign: 'center'
		},
		badge: {
			position: 'absolute',
			top: '12px',
			left: '12px',
			background: 'rgba(56, 189, 248, 0.12)',
			color: '#0369a1',
			padding: '6px 10px',
			borderRadius: '9999px',
			fontSize: '12px',
			fontWeight: '700'
		},
		imgText: {
			fontSize: '15px',
			color: '#1f2937',
			lineHeight: '1.7',
			maxWidth: '100%',
			marginBottom: '18px'
		},
		cardBody: {
			padding: '22px',
			display: 'flex',
			flexDirection: 'column',
			gap: '14px',
			color: '#111827'
		},
		cardTitle: {
			fontSize: '18px',
			fontWeight: '700',
			marginBottom: '8px',
			color: '#0f172a'
		},
		cardTime: { fontSize: '18px', fontWeight: '700', marginBottom: '15px' },
		iconsRow: { display: 'flex', gap: '10px', fontSize: '16px' },
		variantsTable: {
			display: 'flex',
			flexDirection: 'column',
			gap: '0',
			marginTop: '12px',
			maxHeight: '220px',
			overflowY: 'auto',
			paddingRight: '6px'
		},
		variantRow: {
			display: 'flex',
			alignItems: 'flex-start',
			justifyContent: 'space-between',
			gap: '12px',
			padding: '12px 0',
			borderBottom: '1px solid #e5e7eb'
		},
		variantLeft: {
			fontSize: '14px',
			fontWeight: '600',
			color: '#111827',
			flex: '1 1 0'
		},
		variantRight: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-end',
			gap: '10px',
			minWidth: '120px'
		},
		priceTimeBlock: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'flex-end',
			gap: '6px'
		},
		variantPrice: { fontSize: '15px', fontWeight: '700', color: '#0f172a' },
		variantTime: { fontSize: '13px', color: '#6b7280' },
		bookBtn: {
			border: 'none',
			background: 'rgb(56, 189, 248)',
			color: '#ffffff',
			padding: '10px 16px',
			borderRadius: '9999px',
			cursor: 'pointer',
			fontWeight: '600'
		}
	}
	const services = [
		{
			icon: '🦶',
			title: 'Pedicure',
			sub: 'Relaks i gładkość',
			text: 'Pielęgnacja stóp + usuwanie zrogowaceń + masaż dla komfortu',
			time: ['1g 30min', '2g'],
			cena: ['120 zł', '130 zł'],
			badge: 'Najczęściej wybierane',
			imgText: 'Gładkie, zadbane stopy z estetycznym wykończeniem',
			warianty: [
				'Hybryda na paznokcie stóp',
				'Pedicure klasyczny bez malowania'
			]
		},
		{
			icon: '💅',
			title: 'Manicure',
			// sub: 'Piękne i trwałe wykończenie',
			text: 'Pielęgnacja skórek + nadanie kształtu + zabezpieczenie dla długiej trwałości',
			time: [' 70–90 min', ' 90–110 min', ' 90–110 min', ' 110–130 min'],
			cena: ['  210 zł+', '  230 zł+', '  170 zł+', '  190 zł'],
			imgText:['Usługa zawiera opracowanie naturalnej płytki paznokcia oraz skórek, przedłużenie paznokci na formach dolnych, nałożenie koloru. Ściągnięcie starej masy żelowej lub hybrydowej nie jest zawarte w cenie.', 'Usługa zawiera opracowanie stylizacji żelowej, po uprzednim ściągnięciu koloru, opracowanie skórek, uzupełnienie odrostu żelem, nałożenie koloru. Ściągnięcie starej stylizacji nie wykonanej w naszym salonie jest dodatkowo płatne.', 'Usługa zawiera opracowanie naturalnej płytki paznokcia, opracowanie skórek, nałożenie bazy hybrydowej oraz koloru. Ściągnięcie poprzedniej masy hybrydowej wykonanej w naszym salonie zawarte jest w cenie usługi.','Dodatkowe czaslochłonne zdobienie.','Dodatkowe czaslochłonne zdobienie.Jeżeli lubisz stylizacje, gdzie każdy paznokiec wygląda inaczej, dodaj tą opcję do usługi 😊'],

			warianty: [
				'Przedłużanie 1 kolor - Ewelina ',
				'Przedłużanie żelem + zdobienia - Ewelina ',
				'Przedłużanie żelem 1 kolor - Klaudia ',
				'Przedłużanie żelem + zdobienia - Klaudia '
			]
		},
		{
			icon: '🪒',
			title: 'Depilacja',
			// sub: 'Skóra gładka na długo',
			text: 'Precyzyjny zabieg dla okolic zgodnych z Twoimi potrzebami (konsultacja przed wykonaniem)',
			time: ' 90–110 min',
			badge: 'Dla efektu wow',
			imgText: 'Wyraziste rzęsy z naturalnym efektem i piękną stylizacją brwi'
		},
		{
			icon: '🧷',
			title: 'Stylizacja brwi',
			// sub: 'Kształt, który podkreśla twarz',
			text: 'Modelowanie + dopasowanie koloru i stylu do urody oraz preferencji'
		},
		{
			icon: '👁️',
			title: 'Stylizacja rzęs',
			// sub: 'Wyraziste spojrzenie',
			text: 'Podkręcenie i/lub przedłużenie — dopasowane do naturalnego efektu lub bardziej wyrazistego looku'
		},
		{
			icon: '✨',
			title: 'Zadbany efekt na co dzień',
			// sub: 'Czysto, delikatnie, profesjonalnie',
			text: 'Zawsze pracujemy w zgodzie z zasadami higieny — dla spokoju i komfortu podczas wizyty'
		}
	]
	const packages = [
		{
			title: 'Manicure Premium'
		},
		{
			title: 'Pedicure Relaks'
		},
		{
			title: 'Zestaw Look-Ready'
		}
	]
	return (
		<section style={styles.section} id='cennik'>
			{' '}
			<div style={styles.topFlex}>
				{' '}
				<div style={styles.sidePlaceholder}></div>{' '}
				<div style={styles.headerContent}>
					{' '}
					<h2 style={styles.title}>Zabiegi</h2> <p style={styles.subtitle}></p>{' '}
					<div style={styles.btnContainer}>
						{' '}
						<button style={styles.btnOutline}>Zobacz cennik</button>{' '}
						<button style={styles.btnFilled}>Sprawdź dostępność</button>{' '}
					</div>{' '}
				</div>{' '}
			</div>{' '}
			<div style={styles.flex}>
				{' '}
				{services.map((pkg, idx) => (
					<div key={idx} style={styles.card}>
						<div style={styles.cardBody}>
							<h3 style={styles.cardTitle}>
								{pkg.icon} {pkg.title}
							</h3>
							<p style={styles.imgText}>{pkg.text}</p>
							{pkg.warianty && pkg.warianty.length > 0 ? (
								<div style={styles.variantsTable}>
									{pkg.warianty.map((variant, vIdx) => (
										<div key={vIdx} style={styles.variantRow}>
											{/* Левая часть: название варианта */}
											<div style={styles.variantLeft}>{variant}</div>

											<div style={styles.variantRight}>
												<div style={styles.priceTimeBlock}>
													<span style={styles.variantPrice}>
														{pkg.cena && pkg.cena[vIdx] ? pkg.cena[vIdx] : '—'}
													</span>
													<span style={styles.variantTime}>
														{pkg.time && pkg.time[vIdx] ? pkg.time[vIdx] : ''}
													</span>
												</div>
											</div>
										</div>
									))}
								</div>
							) : (
								<div
									style={{
										...styles.variantRow,
										borderBottom: 'none',
										paddingBottom: 0
									}}
								>
									<div style={{ ...styles.variantLeft, color: '#4b5563' }}>
										Standardowa usługa
									</div>
									<div style={styles.variantRight}>
										<div style={styles.priceTimeBlock}>
											<p style={styles.variantPrice}>{pkg.imgText}</p>
											<span style={styles.variantPrice}>{pkg.cena}</span>
											<span style={styles.variantTime}>{pkg.time}</span>
										</div>
										<button style={styles.bookBtn}>Umów</button>
									</div>
								</div>
							)}
						</div>
					</div>
				))}
			</div>{' '}
		</section>
	)
}
