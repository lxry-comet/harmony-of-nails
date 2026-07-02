import data from '../../json/uslugi.json'
import styles from './Uslugi.module.css'

export default function Uslugi() {
	const groups = {}
	data.forEach(s => {
		const key = s.title || 'Inne'
		if (!groups[key]) groups[key] = []
		groups[key].push(s)
	})

	return (
		<section className={styles.section} id='uslugi'>
			<h2 className={styles.title}>Usługi — najczęściej wybierane</h2>
			<p className={styles.subtitle}>
				Wybierz to, czego potrzebujesz — od klasycznego manicure po kompleksowe
				stylizacje.
			</p>

			<div className={styles.groupContainer}>
				{Object.entries(groups).map(([groupTitle, items]) => (
					<div key={groupTitle} className={styles.group}>
						<h3 className={styles.groupTitle}>{groupTitle}</h3>
						{items.map((item, idx) => (
							<div key={item.id || idx} className={styles.item}>
								{item.subtitle ? (
									<div className={styles.itemSubtitle}>{item.subtitle}</div>
								) : null}
								<ul className={styles.list}>
									{Array.isArray(item.variants) && item.variants.length ? (
										item.variants.map((v, i) => (
											<li key={i} className={styles.listItem}>
												<span className={styles.variantName}>{v.name}</span>
												<span className={styles.variantMeta}>
													{v.price ? ` — ${v.price}` : ''}
													{v.time ? ` • ${v.time}` : ''}
												</span>
											</li>
										))
									) : (
										<li className={styles.listItem}>
											{item.description || 'Szczegóły wkrótce'}
										</li>
									)}
								</ul>
							</div>
						))}
					</div>
				))}
			</div>
		</section>
	)
}
