export default function BookingForm() {
	const styles = {
		section: {
			padding: '60px 40px',
			maxWidth: '1100px',
			margin: '0 auto',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			textAlign: 'center',
			gap: '50px',
			fontFamily: 'sans-serif'
		},
		leftBox: {
			width: '160px',
			height: '240px',
			backgroundColor: '#e5e5e5',
			borderRadius: '4px',
			flexShrink: 0,
			marginBottom: '30px'
		},
		rightContent: { flex: 1, width: '100%', maxWidth: '700px' },
		title: { fontSize: '36px', fontWeight: 'bold', marginBottom: '12px' },
		subtitle: { fontSize: '15px', color: '#555555', marginBottom: '40px' },
		formGrid: {
			display: 'grid',
			gridTemplateColumns: '1fr',
			gap: '24px 32px',
			marginBottom: '40px'
		},
		fg: { display: 'flex', flexDirection: 'column', gap: '6px' },
		label: { fontSize: '14px', fontWeight: 'bold' },
		input: {
			padding: '10px 14px',
			borderRadius: '6px',
			border: '1px solid #e0e0e0',
			fontSize: '14px',
			outline: 'none'
		},
		helpText: { fontSize: '12px', color: '#888888' },
		btnRow: { display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' },
		btnOutline: {
			border: '1px solid #000000',
			background: '#ffffff',
			color: '#000000',
			padding: '12px 28px',
			borderRadius: '6px',
			cursor: 'pointer',
			fontSize: '14px',
			fontWeight: 'bold'
		},
		btnFilled: {
			border: 'none',
			background: '#000000',
			color: '#ffffff',
			padding: '12px 28px',
			borderRadius: '6px',
			cursor: 'pointer',
			fontSize: '14px',
			fontWeight: 'bold'
		}
	}
	return (
		<section style={styles.section} id='kontakt'>
			{' '}
			<div style={styles.leftBox}></div>{' '}
			<div style={styles.rightContent}>
				{' '}
				<h2 style={styles.title}>Zarezerwuj wizytę</h2>{' '}
				<p style={styles.subtitle}>
					Opowiedz, czego potrzebujesz — potwierdzimy dostępny termin.
				</p>{' '}
				<form onSubmit={e => e.preventDefault()}>
					{' '}
					<div style={styles.formGrid}>
						{' '}
						<div style={styles.fg}>
							{' '}
							<label style={styles.label}>Imię i nazwisko</label>{' '}
							<input
								type='text'
								placeholder='np. Jessica Park'
								style={styles.input}
							/>{' '}
							<span style={styles.helpText}>
								Dzięki temu przygotujemy Twoją wizytę.
							</span>{' '}
						</div>{' '}
						<div style={styles.fg}>
							{' '}
							<label style={styles.label}>Telefon lub e-mail</label>{' '}
							<input
								type='text'
								placeholder='np. +48 600 123 456'
								style={styles.input}
							/>{' '}
							<span style={styles.helpText}>
								Do potwierdzenia terminu.
							</span>{' '}
						</div>{' '}
						<div style={styles.fg}>
							{' '}
							<label style={styles.label}>Usługa</label>{' '}
							<input
								type='text'
								placeholder='Wybierz jedną'
								style={styles.input}
							/>{' '}
							<span style={styles.helpText}>
								Zdecyduj, który zabieg Cię interesuje.
							</span>{' '}
						</div>{' '}
						<div style={styles.fg}>
							{' '}
							<label style={styles.label}>Preferowana data</label>{' '}
							<input
								type='text'
								placeholder='Wybierz dzień'
								style={styles.input}
							/>{' '}
							<span style={styles.helpText}>
								Dopasujemy dostępne godziny.
							</span>{' '}
						</div>{' '}
						<div style={styles.fg}>
							{' '}
							<label style={styles.label}>Stylizacja brwi</label>{' '}
							<input
								type='text'
								placeholder='np. modelowanie / farbowanie'
								style={styles.input}
							/>{' '}
							<span style={styles.helpText}>
								Jeśli chcesz — dodaj preferencje w komentarzu.
							</span>{' '}
						</div>{' '}
						<div style={styles.fg}>
							{' '}
							<label style={styles.label}>Stylizacja rzęs</label>{' '}
							<input
								type='text'
								placeholder='np. naturalny / bardziej wyrazisty efekt'
								style={styles.input}
							/>{' '}
							<span style={styles.helpText}>
								Dobierzemy look do Twoich potrzeb.
							</span>{' '}
						</div>{' '}
					</div>{' '}
					<div style={styles.btnRow}>
						{' '}
						<button type='button' style={styles.btnOutline}>
							Zobacz zasady
						</button>{' '}
						<button type='submit' style={styles.btnFilled}>
							Wyślij zgłoszenie
						</button>{' '}
					</div>{' '}
				</form>{' '}
			</div>{' '}
		</section>
	)
}
