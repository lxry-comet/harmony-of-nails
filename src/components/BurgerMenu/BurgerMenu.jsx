import { useState } from 'react'
import { FiMail, l, FiX } from 'react-icons/fi'
import styles from './BurgerMenu.module.css'

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

	return (
		<div className={styles.wrapper}>
			<button
				type='button'
				className={`${styles.button} ${isOpen ? styles.open : ''}`}
				onClick={() => setIsOpen(prev => !prev)}
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

			<div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
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
	)
}
