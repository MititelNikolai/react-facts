import React from 'react'
import ReactLogo from '../../assets/react-logo.svg'
import './header.css'
const Header = () => {
	return (
		<header className='container container__header'>
			<div className='header__logo'>
				<img className='header__logo-img' src={ReactLogo} alt='React Logo' />
				<h2 className='header__title'>ReactFacts</h2>
			</div>
			<div className='header__subtitle'>React Course - Project 1</div>
		</header>
	)
}

export default Header
