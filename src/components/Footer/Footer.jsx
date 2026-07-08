import { FiMail, FiPhone } from 'react-icons/fi'
import { salons } from '../../json/salons' // dopasuj ścieżkę do własnej struktury
import styles from './Footer.module.css'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.topRow}>
				{salons.map(salon => (
					<div key={salon.id} className={styles.salonBlock}>
						<span className={styles.salonName}>{salon.name}</span>

						<span className={styles.contactRow}>
							<FiPhone className={styles.icon} />
							<a href={salon.phoneHref} className={styles.link}>
								{salon.phone}
							</a>
						</span>
						<span className={styles.contactRow}>
							<FiMail className={styles.icon} />
							<a href={`mailto:${salon.email}`} className={styles.link}>
								{salon.email}
							</a>
						</span>

						<div className={styles.hoursList}>
							{salon.hours.map(h => (
								<div key={h.day} className={styles.hoursRow}>
									<span>{h.day}</span>
									<span>{h.time}</span>
								</div>
							))}
						</div>

						<a
							href={salon.mapUrl}
							target='_blank'
							rel='noopener noreferrer'
							className={styles.mapLink}
						>
							Zobacz mapę
						</a>
					</div>
				))}
			</div>
			<div className={styles.bottomRow}>
				© 2026 Harmony of Nails. Wszystkie prawa zastrzeżone.
			</div>
		</footer>
	)
}
