import styles from './Hero.module.css'

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
					<button className={styles.btnOutline}>Zobacz usługi</button>
					<button className={styles.btnFilled}>Umów wizytę</button>
				</div>
			</div>
		</section>
	)
}
