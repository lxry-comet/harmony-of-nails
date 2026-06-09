import React from 'react';
import services from '../json/services.json';
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
			maxWidth: '520px',
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
			flexDirection: 'column',
			alignItems: 'flex-end',
			gap: '6px',
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
		variantNote: {
			fontSize: '13px',
			color: '#475569',
			marginTop: '6px',
			lineHeight: '1.5'
		},
		detailRow: {
			display: 'flex',
			flexDirection: 'column',
			gap: '12px',
			marginTop: '14px',
			paddingTop: '14px',
			borderTop: '1px solid #e5e7eb'
		},
		badgeInline: {
			fontSize: '12px',
			fontWeight: '700',
			color: '#0369a1',
			background: 'rgba(56, 189, 248, 0.12)',
			padding: '6px 10px',
			borderRadius: '9999px',
			display: 'inline-flex',
			marginBottom: '10px'
		},
		bookBtn: {
			border: 'none',
			background: 'rgb(56, 189, 248)',
			color: '#ffffff',
			padding: '10px 16px',
			borderRadius: '9999px',
			cursor: 'pointer',
			fontWeight: '600',
			alignSelf: 'flex-start'
		}
	}
	
	return (
		<section style={styles.section} id='cennik'>
			
			<div style={styles.topFlex}>
				
				<div style={styles.headerContent}>
					 
					<h2 style={styles.title}>Zabiegi</h2> <p style={styles.subtitle}></p> 
				</div> 
			</div> 
			<div style={styles.flex}>
				 
				{services.map((pkg, idx) => (
					<div key={idx} style={styles.card}>
						<div style={styles.cardBody}>
							<h3 style={styles.cardTitle}>
								{pkg.icon} {pkg.title}
							</h3>
							<p style={styles.imgText}>{pkg.description}</p>
							{pkg.variants && pkg.variants.length > 0 ? (
								<div style={styles.variantsTable}>
									{pkg.variants.map((variant, vIdx) => (
										<div key={vIdx} style={styles.variantRow}>
											<div style={styles.variantLeft}>
												{variant.name}
												{variant.infoText ? (
													<div style={styles.variantNote}>{variant.infoText}</div>
												) : null}
											</div>
											<div style={styles.variantRight}>
												<div style={styles.priceTimeBlock}>
													<span style={styles.variantPrice}>{variant.price}</span>
													{variant.time ? <span style={styles.variantTime}>{variant.time}</span> : null}
												</div>
											</div>
										</div>
									))}
								</div>
							) : null}
						</div>
					</div>
				))}
			</div> 
		</section>
	)
}
