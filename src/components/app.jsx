import React from 'react'

// import components
import Header from './header/header'
import Footer from './footer/footer'
import Products from './products/products'

//import css
import '../components/app.css'

// import productsImg from "../../assets/productsImg/1.jpg"
import img1 from '../../src/assets/productsImg/1.jpg';
import img2 from '../../src/assets/productsImg/2.jpg';
import img3 from '../../src/assets/productsImg/3.jpg';
import img4 from '../../src/assets/productsImg/4.jpg';
import img5 from '../../src/assets/productsImg/5.jpg';
import img6 from '../../src/assets/productsImg/6.jpg';
import img7 from '../../src/assets/productsImg/7.jpg';





function App() {
    return (
        <div>
            <Header />
            <Products />
            <Footer />
        </div>
    )
}

export default App