import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import Kontakt from './components/Kontakt/Kontakt.jsx'
import Opinie from './components/Opinie/Opinie.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx'
import Salony from './components/Salony/Salony.jsx'
import Uslugi from './components/Uslugi/Uslugi.jsx'

function HomePage() {
	return (
		<>
			<Hero />
			<Uslugi />
			<Portfolio />
			{/* <Opinie /> */}
			<Salony />
			<Kontakt />
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
				<Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
				<Route path='/salony' element={<Salony></Salony>}></Route>
				<Route path='/kontakt' element={<Kontakt></Kontakt>}></Route>
			</Routes>
			<Footer />
		</>
	)
}
