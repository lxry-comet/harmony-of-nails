import { useEffect, useMemo, useState } from 'react'
import data from '../../json/uslugi.json'
import styles from './Uslugi.module.css'

const ALL_KEY = 'Wszystkie'

export default function Uslugi() {

	const salonList = useMemo(() => {
		const seen = []
		data.forEach(s => {
			const salon = s.salon || 'Salon'
			if (!seen.includes(salon)) seen.push(salon)
		})
		return seen
	}, [])

	const [activeSalon, setActiveSalon] = useState(salonList[0])
	const [activeCategory, setActiveCategory] = useState(ALL_KEY)
	useEffect(() => {
		setActiveCategory(ALL_KEY)
	}, [activeSalon])

	const salonItems = useMemo(
		() => data.filter(s => (s.salon || 'Salon') === activeSalon),
		[activeSalon]
	)

	const groups = useMemo(() => {
		const g = {}
		salonItems.forEach(s => {
			const key = s.title || 'Inne'
			if (!g[key]) g[key] = []
			g[key].push(s)
		})
		return g
	}, [salonItems])

	const categories = useMemo(() => Object.keys(groups), [groups])

	const visibleGroups = useMemo(() => {
		if (activeCategory === ALL_KEY) return Object.entries(groups)
		return Object.entries(groups).filter(([key]) => key === activeCategory)
	}, [groups, activeCategory])

	return (
		<section className={styles.section} id='cennik'>
			<h2 className={styles.title}>NASZA OFERTA</h2>
			<p className={styles.subtitle}>
				Wybierz to, czego potrzebujesz — od klasycznego manicure po kompleksowe
				stylizacje.
			</p>

			{salonList.length > 1 ? (
				<div
					className={styles.salonTabs}
					role='tablist'
					aria-label='Wybierz salon'
				>
					{salonList.map(salon => (
						<button
							key={salon}
							type='button'
							className={`${styles.salonTabBtn} ${activeSalon === salon ? styles.salonTabBtnActive : ''}`}
							onClick={() => setActiveSalon(salon)}
						>
							{salon}
						</button>
					))}
				</div>
			) : null}

			<div className={styles.filters} role='tablist' aria-label='Filtruj usługi'>
				<button
					type='button'
					className={`${styles.filterBtn} ${activeCategory === ALL_KEY ? styles.filterBtnActive : ''}`}
					onClick={() => setActiveCategory(ALL_KEY)}
				>
					{ALL_KEY}
				</button>
				{categories.map(cat => (
					<button
						key={cat}
						type='button'
						className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterBtnActive : ''}`}
						onClick={() => setActiveCategory(cat)}
					>
						{cat}
					</button>
				))}
			</div>

			<div className={styles.groupContainer}>
				{visibleGroups.map(([groupTitle, items], index) => (
					<div
						key={groupTitle}
						className={`${styles.group} ${index === 4 ? styles.spanningGroup : ''}`}
					>
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
													{v.time ? `  ${v.time}` : ''}
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
