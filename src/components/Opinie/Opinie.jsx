import { useEffect, useState } from 'react'
import styles from './Opinie.module.css'

// Zakładki źródeł opinii. Jeśli masz tylko jeden widżet Elfsight (np. tylko Google),
// po prostu usuń drugi obiekt z tej tablicy — reszta zadziała automatycznie.
const sources = [
	{
		id: 'google',
		label: 'Google',
		// TODO: wejdź na https://dash.elfsight.com, stwórz widżet "Google Reviews",
		// skopiuj jego klasę (np. "elfsight-app-xxxxxxxx-xxxx-...") i wklej poniżej.
		widgetClass: 'elfsight-app-00000000-0000-0000-0000-000000000000'
	},
	{
		id: 'booksy',
		label: 'Booksy',
		// TODO: Elfsight nie ma gotowej integracji z Booksy — najprościej stworzyć
		// widżet typu "Reviews" i wkleić tam recenzje ręcznie/importem CSV,
		// albo osadzić link do profilu Booksy zamiast widżetu (patrz niżej).
		widgetClass: 'elfsight-app-11111111-1111-1111-1111-111111111111'
	}
]

const BOOKSY_PROFILE_URL =
	'https://booksy.com/pl-pl/215674_harmony-of-beauty_paznokcie_19380_swinoujscie'

export default function Opinie() {
	const [active, setActive] = useState(sources[0].id)

	useEffect(() => {
		if (document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]')) {
			return
		}
		const script = document.createElement('script')
		script.src = 'https://static.elfsight.com/platform/platform.js'
		script.async = true
		document.body.appendChild(script)
	}, [])

	const activeSource = sources.find(s => s.id === active)

	return (
		<section className={styles.section} id='opinie'>
			<h2 className={styles.title}>OPINIE NASZYCH KLIENTEK</h2>
			<p className={styles.subtitle}>
				Zobacz, co mówią o nas klientki na Google i Booksy.
			</p>

			{sources.length > 1 ? (
				<div className={styles.tabs}>
					{sources.map(s => (
						<button
							key={s.id}
							type='button'
							className={`${styles.tabBtn} ${active === s.id ? styles.tabBtnActive : ''}`}
							onClick={() => setActive(s.id)}
						>
							{s.label}
						</button>
					))}
				</div>
			) : null}

			<div className={styles.widgetWrap}>
				{/* Widżet Elfsight — po podmianie widgetClass na własny, opinie podciągną się automatycznie */}
				<div className={activeSource.widgetClass} data-elfsight-app-lazy></div>

				{activeSource.id === 'booksy' ? (
					<p className={styles.fallbackNote}>
						Pełną listę opinii z rezerwacji zobaczysz też bezpośrednio na{' '}
						<a href={BOOKSY_PROFILE_URL} target='_blank' rel='noopener noreferrer'>
							naszym profilu Booksy
						</a>
						.
					</p>
				) : null}
			</div>
		</section>
	)
}
