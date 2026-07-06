import { Link } from 'react-router-dom'
import styles from './Hero.module.css'

const BOOKSY_URL =
	'https://booksy.com/pl-pl/215674_harmony-of-beauty_paznokcie_19380_swinoujscie?utm_medium=profile_share_from_profile'

export default function Hero() {
	const categories = [
		'Manicure',
		'Pedicure',
		'Depilacja',
		'Stylizacja brwi',
		'Stylizacja rzęs'
	]
	return (
		<section className={styles.hero}>
			<div className={styles.overlay} />
			<div className={styles.content}>
				<h1 className={styles.title}>Harmony of Nails</h1>
				<p className={styles.description}>
					Manicure, pedicure oraz stylizacje — dbamy o komfort, czystość i
					perfekcyjne wykończenie.
				</p>
				<div className={styles.buttons}>
					<Link to='/uslugi' className={styles.btnOutline}>
						Zobacz usługi
					</Link>
					<a
						href={BOOKSY_URL}
						target='_blank'
						rel='noopener noreferrer'
						className={styles.btnFilled}
					>
						Umów wizytę
					</a>
				</div>
			</div>
		</section>
	)
}
