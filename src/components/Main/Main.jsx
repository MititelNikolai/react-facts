import React from 'react'
import './main.css'
import Ellipse from '../../assets/ellipse.svg'
const Main = () => {
	return (
		<section className='container container__main'>
			<div className='main'>
				<h2 className='main__title'>Fun facts about React</h2>
			</div>
			<ul className='main__list'>
				<li className='main__list-item'>
					<img className='main__dot' src={Ellipse} alt='Ellipse'></img>
					Was first released in 2013
				</li>
				<li className='main__list-item'>
					<img className='main__dot' src={Ellipse} alt='Ellipse'></img>
					Was originally created by Jordan Walke
				</li>
				<li className='main__list-item'>
					<img className='main__dot' src={Ellipse} alt='Ellipse'></img>
					Has well over 100K stars on GitHub
				</li>
				<li className='main__list-item'>
					<img className='main__dot' src={Ellipse} alt='Ellipse'></img>
					Is maintained by Facebook
				</li>
				<li className='main__list-item'>
					<img className='main__dot' src={Ellipse} alt='Ellipse'></img>
					Powers thousands of enterprise apps, including mobile apps
				</li>
			</ul>
		</section>
	)
}

export default Main
