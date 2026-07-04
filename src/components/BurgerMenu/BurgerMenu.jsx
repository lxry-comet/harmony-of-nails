import { useEffect, useState } from 'react'
import { FiMail, FiPhone, FiX } from 'react-icons/fi'
import styles from './BurgerMenu.module.css'

const brandTitle = 'Harmony of Nails'

const links = [
	{ href: '#uslugi', label: 'Usługi' },
	{ href: '#portfolio', label: 'Portfolio' },
	{ href: '#opinie', label: 'Opinie' },
	{ href: '#cennik', label: 'Cennik' },
	{ href: '#kontakt', label: 'Kontakt' }
]

export default function BurgerMenu() {
	const [isOpen, setIsOpen] = useState(false)

	const closeMenu = () => setIsOpen(false)
	const toggleMenu = () => setIsOpen(prev => !prev)

	useEffect(() => {
		document.body.classList.toggle('no-scroll', isOpen)

		return () => document.body.classList.remove('no-scroll')
	}, [isOpen])

	useEffect(() => {
		if (!isOpen) return undefined

		const handleKeyDown = event => {
			if (event.key === 'Escape') closeMenu()
		}

		window.addEventListener('keydown', handleKeyDown)
		return () => window.removeEventListener('keydown', handleKeyDown)
	}, [isOpen])

	return (
		<div className={styles.wrapper}>
			<button
				type='button'
				className={`${styles.button} ${isOpen ? styles.open : ''}`}
				onClick={toggleMenu}
				aria-expanded={isOpen}
				aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
			>
				{isOpen ? (
					<FiX size={22} />
				) : (
					<>
						<span></span>
						<span></span>
						<span></span>
					</>
				)}
			</button>

			<div
				className={`${styles.overlay} ${isOpen ? styles.visible : ''}`}
				onClick={closeMenu}
			></div>

			<div
				className={`${styles.menu} ${isOpen ? styles.open : ''}`}
				role='dialog'
				aria-modal='true'
				aria-label='Menu nawigacji'
			>
				<div className={styles.menuHeader}>
					<span className={styles.menuTitle}>{brandTitle}</span>
					<button
						type='button'
						className={styles.menuCloseButton}
						onClick={closeMenu}
						aria-label='Zamknij menu'
					>
						<FiX size={22} />
					</button>
				</div>

				<div className={styles.menuBody}>
					<nav className={styles.nav}>
						{links.map(link => (
							<a key={link.href} href={link.href} onClick={closeMenu}>
								{link.label}
							</a>
						))}
					</nav>

					<div className={styles.contacts}>
						<a
							href='tel:+48000000000'
							onClick={closeMenu}
							className={styles.contactLink}
						>
							<FiPhone />
							<span>+48 000 000 000</span>
						</a>
						<a
							href='mailto:email@gmail.com'
							onClick={closeMenu}
							className={styles.contactLink}
						>
							<FiMail />
							<span>email@gmail.com</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
