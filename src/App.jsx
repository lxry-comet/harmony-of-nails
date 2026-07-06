import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import Uslugi from './components/Uslugi/Uslugi.jsx'

function HomePage() {
	return (
		<>
			<Hero />
		</>
	)
}

export default function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/uslugi' element={<Uslugi />} />
			</Routes>
			<Footer />
		</>
	)
}
