import '../header/header.css'


// import icons from 'react-icons'
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialSkype } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";

// import productsImg from "../../assets/productsImg/1.jpg"
import img1 from '../../assets/productsImg/1.jpg';
import img2 from '../../assets/productsImg/2.jpg';
import img3 from '../../assets/productsImg/3.jpg';
import img4 from '../../assets/productsImg/4.jpg';
import img5 from '../../assets/productsImg/5.jpg';
import img6 from '../../assets/productsImg/6.jpg';
import img7 from '../../assets/productsImg/7.jpg';

import {Fragment} from 'react'

function Header() {
  return (
    <Fragment>
        <header className="header">
                <ul className="nav">
                    <li className='nav-item'><a className='nav-item__link' href="#">Home</a></li>
                    <li className='nav-item'><a className='nav-item__link' href="#">Products</a></li>
                    <li className='nav-item'><a className='nav-item__link' href="#">About</a></li>
                    <li className='nav-item'><a className='nav-item__link' href="#">Contact</a></li>
                </ul>
                <h1 className="header__title">Welcome to Bardia Shop</h1>

            </header>

    </Fragment>
  )
}

export default Header