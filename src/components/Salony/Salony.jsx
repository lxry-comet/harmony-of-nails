import { FiClock, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import styles from './Salony.module.css'

// TODO: podmień dane (adresy, telefony, e-maile, godziny) na prawdziwe dla obu salonów.
const salons = [
	{
		id: 'centrum',
		tag: 'Salon 1',
		name: 'Harmony of Nails — Centrum',
		district: 'Ścisłe centrum Świnoujścia',
		address: 'ul. Piłsudskiego 12, 72-600 Świnoujście',
		phone: '+48 793 965 530',
		phoneHref: 'tel:+48793965530',
		email: 'biuro.harmonyofbeauty@gmail.com',
		hours: [
			{ day: 'Pon – Pt', time: '9:00 – 19:00' },
			{ day: 'Sob', time: '10:00 – 17:00' },
			{ day: 'Nd', time: 'zamknięte' }
		],
		mapUrl: 'https://maps.google.com',
		bookingUrl: 'https://booksy.com/pl-pl/215674_harmony-of-beauty_paznokcie_19380_swinoujscie'
	},
	{
		id: 'uzdrowisko',
		tag: 'Salon 2',
		name: 'Harmony of Nails — Uzdrowisko',
		district: 'Dzielnica Uzdrowisko, blisko promenady',
		address: 'ul. Nadmorska 8, 72-600 Świnoujście',
		phone: '+48 910 000 002',
		phoneHref: 'tel:+48910000002',
		email: 'uzdrowisko@harmonyofbeauty.pl',
		hours: [
			{ day: 'Pon – Pt', time: '9:00 – 19:00' },
			{ day: 'Sob', time: '9:00 – 16:00' },
			{ day: 'Nd', time: 'zamknięte' }
		],
		mapUrl: 'https://maps.google.com',
		bookingUrl: 'https://booksy.com/pl-pl/215674_harmony-of-beauty_paznokcie_19380_swinoujscie'
	}
]

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
