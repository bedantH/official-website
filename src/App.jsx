import React from 'react'
import LandingPage from './components/LandingPage'
import Footer from './components/FooterSection'
import Assets from './components/Asset'
import AboutUs from "./components/AboutUs";
import Teams from "./components/Teams";


export default function App() {
    return (
        <main className="main">
            <Assets/>
            <LandingPage/>
	        <AboutUs />
	        <Teams />
            <Footer/>
        </main>
    )
}
