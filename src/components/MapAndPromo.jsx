import React from 'react'
export default function MapAndPromo() {
	const styles = {
		container: {
			maxWidth: '1100px',
			
			padding: '40px',
			maxWidth: '1100px',
			margin: '0 auto',
			display: 'flex',
			flexDirection: 'column',
			gap: '30px',
			fontFamily: 'sans-serif'
		},
		mapBanner: {
			height: '180px',
			backgroundColor: '#ebebeb',
			borderRadius: '6px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			padding: '0 40px',
			textAlign: 'center',
			position: 'relative'
		},
		mapText: {
			fontSize: '14px',
			fontWeight: 'bold',
			lineHeight: '1.5',
			maxWidth: '750px',
			zIndex: 2
		},
		pin: { position: 'absolute', top: '25%', fontSize: '20px' },
		promoBanner: {
			backgroundColor: '#eaeaea',
			borderRadius: '6px',
			padding: '40px 20px',
			textAlign: 'center',
			position: 'relative'
		},
		promoText: {
			fontSize: '13px',
			lineHeight: '1.5',
			maxWidth: '800px',
			margin: '0 auto 20px auto'
		},
		dots: { display: 'flex', gap: '4px', justifyContent: 'center' },
		dot: {
			width: '6px',
			height: '6px',
			borderRadius: '50%',
			backgroundColor: '#bbbbbb'
		},
		activeDot: {
			width: '16px',
			height: '6px',
			borderRadius: '3px',
			backgroundColor: '#ffffff'
		}
	}
	return (
		<div style={styles.container}>
			{' '}
			<div style={styles.mapBanner}>
				{' '}
				<div style={styles.pin}>📍</div>{' '}
				<p style={styles.mapText}>
					{' '}
					Znajdziesz nas blisko centrum. Gdy są wolne miejsca, zapraszamy na
					wizyty bez rezerwacji — łatwy dojazd i parking w pobliżu.{' '}
				</p>
			</div>{' '}
			<div style={styles.promoBanner}>
				{' '}
				<p style={styles.promoText}>
					{' '}
					Nowa klientka: w prezencie dokładne wykończenie olejkiem do skórek
					przy pierwszej usłudze. Zarezerwuj termin i poczuj Harmony!{' '}
				</p>{' '}
				<div style={styles.dots}>
					{' '}
					<div style={styles.activeDot}></div> <div style={styles.dot}></div>{' '}
					<div style={styles.dot}></div>{' '}
				</div>{' '}
			</div>{' '}
		</div>
	)
}
