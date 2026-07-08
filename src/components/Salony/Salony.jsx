import { FiClock, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { salons } from '../../json/salons' // dopasuj ścieżkę do własnej struktury
import styles from './Salony.module.css'

export default function Salony() {
	return (
		<section className={styles.section} id='salony'>
			<h2 className={styles.title}>NASZE SALONY</h2>
			<p className={styles.subtitle}>
				Ten sam charakter i standard obsługi — dwa miejsca w Świnoujściu.
				Wybierz to, które jest wygodniejsze.
			</p>

			<div className={styles.pair}>
				{salons.map(salon => (
					<div key={salon.id} className={styles.card}>
						<span className={styles.tag}>{salon.tag}</span>
						<h3 className={styles.name}>{salon.name}</h3>
						<p className={styles.district}>{salon.district}</p>

						<dl className={styles.details}>
							<div>
								<FiMapPin className={styles.icon} />
								<span>{salon.address}</span>
							</div>
							<div>
								<FiPhone className={styles.icon} />
								<a href={salon.phoneHref}>{salon.phone}</a>
							</div>
							<div>
								<FiMail className={styles.icon} />
								<a href={`mailto:${salon.email}`}>{salon.email}</a>
							</div>
						</dl>

						<div className={styles.hours}>
							{salon.hours.map(h => (
								<div key={h.day}>
									<span className={styles.hoursDay}>
										<FiClock className={styles.hoursIcon} />
										{h.day}
									</span>
									<span>{h.time}</span>
								</div>
							))}
						</div>

						<div className={styles.actions}>
							<a
								href={salon.bookingUrl}
								target='_blank'
								rel='noopener noreferrer'
								className={styles.btnPrimary}
							>
								Umów wizytę
							</a>
							<a
								href={salon.mapUrl}
								target='_blank'
								rel='noopener noreferrer'
								className={styles.btnGhost}
							>
								Trasa dojazdu
							</a>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
