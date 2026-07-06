import { useEffect, useMemo, useState } from 'react'
import services from '../../json/uslugi.json'
import styles from './Portfolio.module.css'

const przedluzenie01 =
	'/harmony-of-nails/images/PrzedłużanieZelemNaFormie_01.jpg'
const przedluzenie02 =
	'/harmony-of-nails/images/PrzedłużanieZelemNaFormie_02.jpg'
const odnowa01 = '/harmony-of-nails/images/OdnowaZelowa_01.jpg'
const odnowa02 = '/harmony-of-nails/images/OdnowaZelowa_02.jpg'
const odnowa03 = '/harmony-of-nails/images/OdnowaZelowa_03.jpg'
const odnowa04 = '/harmony-of-nails/images/OdnowaZelowa_04.jpeg'
const hybryda01 = '/harmony-of-nails/images/ManicureHybrydowy_01.jpg'
const hybryda02 = '/harmony-of-nails/images/ManicureHybrydowy_02.jpg'
const hybryda03 = '/harmony-of-nails/images/ManicureHybrydowy_03.jpg'
const hybryda04 = '/harmony-of-nails/images/ManicureHybrydowy_04.jpg'
const rzesy01 = '/harmony-of-nails/images/Rzesy_01.jpg'

const serviceImageMap = [
	{
		title: 'Manicure',
		subtitle: 'Przedłużanie żelem na formie',
		images: [przedluzenie01, przedluzenie02]
	},
	{
		title: 'Manicure',
		subtitle: 'Odnowa żelowa',
		images: [odnowa01, odnowa02, odnowa03, odnowa04]
	},
	{
		title: 'Manicure',
		subtitle: 'Manicure hybrydowy',
		images: [hybryda01, hybryda02, hybryda03, hybryda04]
	},
	{
		title: 'Stylizacja rzęs',
		images: [rzesy01]
	}
]

function normalize(value = '') {
	return value
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/\s+/g, ' ')
		.trim()
}

export default function Portfolio() {
	const [selectedImage, setSelectedImage] = useState(null)

	const portfolioGroups = useMemo(() => {
		return services.reduce((acc, service) => {
			const match = serviceImageMap.find(entry => {
				if (entry.title !== service.title) {
					return false
				}

				if (!entry.subtitle) {
					return !service.subtitle
				}

				return normalize(entry.subtitle) === normalize(service.subtitle)
			})

			if (!match) {
				return acc
			}

			acc.push({
				label: service.subtitle
					? `${service.title} • ${service.subtitle}`
					: service.title,
				images: match.images
			})

			return acc
		}, [])
	}, [])

	useEffect(() => {
		if (!selectedImage) {
			document.documentElement.style.overflow = ''
			document.body.style.overflow = ''
			return undefined
		}

		document.documentElement.style.overflow = 'hidden'
		document.body.style.overflow = 'hidden'

		return () => {
			document.documentElement.style.overflow = ''
			document.body.style.overflow = ''
		}
	}, [selectedImage])

	return (
		<section className={styles.section} id='portfolio'>
			<h2 className={styles.title}>Portfolio usług</h2>
			<p className={styles.subtitle}>
				Kliknij zdjęcie, aby je powiększyć, a potem zamknij klikając w ciemne
				tło lub przycisk X.
			</p>

			<div className={styles.groups}>
				{portfolioGroups.map(group => (
					<div key={group.label} className={styles.group}>
						<h3 className={styles.groupTitle}>{group.label}</h3>
						<div className={styles.imageRow}>
							{group.images.map((imageSrc, index) => (
								<button
									type='button'
									key={`${group.label}-${index}`}
									className={styles.imageButton}
									onClick={() =>
										setSelectedImage({
											src: imageSrc,
											alt: `${group.label} ${index + 1}`
										})
									}
								>
									<img
										className={styles.thumb}
										src={imageSrc}
										alt={`${group.label} ${index + 1}`}
									/>
								</button>
							))}
						</div>
					</div>
				))}
			</div>

			{selectedImage && (
				<div
					className={styles.lightbox}
					onClick={() => setSelectedImage(null)}
					role='dialog'
					aria-modal='true'
					aria-label='Podgląd zdjęcia'
				>
					<button
						type='button'
						className={styles.closeButton}
						onClick={() => setSelectedImage(null)}
						aria-label='Zamknij podgląd'
					>
						×
					</button>
					<img
						className={styles.lightboxImage}
						src={selectedImage.src}
						alt={selectedImage.alt}
						onClick={event => event.stopPropagation()}
					/>
				</div>
			)}
		</section>
	)
}
