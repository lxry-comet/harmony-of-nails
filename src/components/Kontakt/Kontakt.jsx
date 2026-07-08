import { FiClock, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import styles from './Kontakt.module.css'

// TODO: podmień na prawdziwy adres / link do mapy, jeśli chcesz osadzić konkretną lokalizację.
const MAP_EMBED_SRC =
	'https://www.google.com/maps?q=Świnoujście&output=embed'
const BOOKING_URL =
	'https://booksy.com/pl-pl/215674_harmony-of-beauty_paznokcie_19380_swinoujscie'

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
							<a href='tel:+48793965530' className={styles.infoValue}>
								+48 793 965 530
							</a><br />
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
								href='mailto:biuro.harmonyofbeauty@gmail.com'
								className={styles.infoValue}
							>
								biuro.harmonyofbeauty@gmail.com
							</a>
							<a
								href='mailto:biuro.harmonyofbeauty@gmail.com'
								className={styles.infoValue}
							>
								katrina91@op.pl
							</a>
						</div>
					</div>

					<div className={styles.infoRow}>
						<FiMapPin className={styles.icon} />
						<div>
							<span className={styles.infoLabel}>Salony</span>
							<span className={styles.infoValue}>
								ul. Piłsudskiego 12 · ul. Nadmorska 8, Świnoujście
								ul. Grunwaldzka 98D, 72-600, Świnoujście
							</span>
						</div>
					</div>

					<div className={styles.infoRow}>
						<FiClock className={styles.icon} />
						<div>
							<span className={styles.infoLabel}>Godziny otwarcia</span>
							<span className={styles.infoValue}>
								Pon – Pt: 9:00 – 19:00
								<br />
								Sob: 9:00 – 17:00 · Nd: zamknięte
							</span>
						</div>
					</div>

					<a
						href={BOOKING_URL}
						target='_blank'
						rel='noopener noreferrer'
						className={styles.btnPrimary}
					>
						Umów wizytę przez Booksy
					</a>
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
