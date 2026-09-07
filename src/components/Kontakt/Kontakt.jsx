import { Link } from 'react-router-dom'
import { FiClock, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import styles from './Kontakt.module.css'

const MAP_EMBED_SRC =
	'https://www.google.com/maps?q=Świnoujście&output=embed'
// const BOOKING_URL =
// 	'https://booksy.com/pl-pl/215674_harmony-of-beauty_paznokcie_19380_swinoujscie'

export default function Kontakt() {
	return (
		<section className={styles.section} id='kontakt'>
			<h2 className={styles.title}>SKONTAKTUJ SIĘ Z NAMI</h2>
			<p className={styles.subtitle}>
				Masz pytania albo chcesz umówić wizytę telefonicznie? Jesteśmy tutaj,
				żeby pomóc.
			</p>

			<div className={styles.grid}>
				<div className={styles.infoCard}>
					<div className={styles.infoRow}>
						<FiPhone className={styles.icon} />
						<div>
							<span className={styles.infoLabel}>Telefon</span>
							<a href='tel:+48733546506' className={styles.infoValue}>
								+48 733 546 506
							</a>
						</div>
					</div>

					<div className={styles.infoRow}>
						<FiMail className={styles.icon} />
						<div>
							<span className={styles.infoLabel}>E-mail</span>
							<a
								href='mailto:Ekaterina.Sopchuk@gmail.com'
								className={styles.infoValue}
							>
								Ekaterina.Sopchuk@gmail.com
							</a>
						</div>
					</div>

					<div className={styles.infoRow}>
						<FiMapPin className={styles.icon} />
						<div>
							<span className={styles.infoLabel}>Salony</span>
							<span className={styles.infoValue}>
								ul. Józefa Bema 3/2, 72-600 Świnoujście
								<br />
								ul. Grunwaldzka 98D, 72-600, Świnoujście
							</span>
						</div>
					</div>

					<div className={styles.infoRow}>
						<FiClock className={styles.icon} />
						<div>
							<span className={styles.infoLabel}>Godziny otwarcia</span>
							<span className={styles.infoValue}>
								Pon – Pt: 10:00 – 16:00
								<br />
								Sob – Nd: zamknięte
							</span>
						</div>
					</div>

					<Link
						to="/salony"
						// target='_blank'
						rel='noopener noreferrer'
						className={styles.btnPrimary}
					>
						Umów wizytę przez Booksy
					</Link>
				</div>

				<div className={styles.mapCard}>
					<iframe
						title='Mapa dojazdu'
						src={MAP_EMBED_SRC}
						className={styles.map}
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
						allowFullScreen
					/>
				</div>
			</div>
		</section>
	)
}