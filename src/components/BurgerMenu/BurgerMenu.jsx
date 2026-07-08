import { useEffect, useState } from 'react'
import { FiMail, FiPhone, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { salons } from '../../json/salons' // dopasuj ścieżkę do własnej struktury
import styles from './BurgerMenu.module.css'
const brandTitle = 'Harmony of Nails'

const links = [
	{ href: '/uslugi', label: 'Usługi', route: true },
	{ href: '/portfolio', label: 'Portfolio', route: true },
	{ href: '/salony', label: 'Salony', route: true },
	{ href: '/kontakt', label: 'Kontakt', route: true }
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
					<Link to='/' className={styles.menuTitle} onClick={closeMenu}>
						{brandTitle}
					</Link>
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
						{links.map(link =>
							link.route ? (
								<Link key={link.href} to={link.href} onClick={closeMenu}>
									{link.label}
								</Link>
							) : (
								<a key={link.href} href={link.href} onClick={closeMenu}>
									{link.label}
								</a>
							)
						)}
					</nav>

					<div className={styles.contactsWrap}>
						{salons.map(salon => (
							<div key={salon.id} className={styles.contactsGroup}>
								<span className={styles.contactsLabel}>{salon.name}</span>
								<div className={styles.contacts}>
									<div>
										<FiPhone className={styles.contactIcon} />
										<a href={salon.phoneHref} className={styles.contactLink}>
											{salon.phone}
										</a>
									</div>
									<div>
										<FiMail className={styles.contactIcon} />
										<a
											href={`mailto:${salon.email}`}
											className={styles.contactLink}
										>
											{salon.email}
										</a>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
