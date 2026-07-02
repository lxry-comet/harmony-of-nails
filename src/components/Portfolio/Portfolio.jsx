import styles from './Portfolio.module.css'

export default function Portfolio() {
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
		<section className={styles.section} id='portfolio'>
			<h2 className={styles.title}>Stylizacje w obiektywie</h2>
			<p className={styles.subtitle}>
				Kilka świeżych realizacji z naszego salonu.
			</p>
			<div className={styles.flex}>
				{items.map((item, idx) => (
					<div key={idx} className={styles.card}>
						<div className={styles.imgPlaceholder}>
							<p className={styles.imgText}>{item.imgText}</p>
							<div className={styles.dots}>
								<div className={styles.activeDot}></div>
								<div className={styles.dot}></div>
								<div className={styles.dot}></div>
							</div>
						</div>
						<div className={styles.body}>
							<p className={styles.mainText}>{item.main}</p>
							<div className={styles.tagRow}>
								{item.tags.map((t, i) => (
									<span key={i} className={styles.tag}>
										{t}
									</span>
								))}
							</div>
							<div className={styles.artistRow}>
								<div className={styles.miniAvatar}></div>
								<span className={styles.artistName}>
									Harmony Artist • {item.artist}
								</span>
							</div>
							<div className={styles.icons}>
								<span>📸</span>
								<span>💙</span>
								<span>🎨</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
