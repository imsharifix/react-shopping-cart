import React from 'react'
import { useState } from 'react'

// import css styles
import './products.css'

// import product images
import img1 from '../../assets/productsImg/1.jpg'
import img2 from '../../assets/productsImg/2.jpg'
import img3 from '../../assets/productsImg/3.jpg'
import img4 from '../../assets/productsImg/4.jpg'
import img5 from '../../assets/productsImg/5.jpg'
import img6 from '../../assets/productsImg/6.jpg'
import img7 from '../../assets/productsImg/7.jpg'


// import products data
const productsItems = [
    { id: 1, title: 'Product 1', price: 5, img: img1 },
    { id: 2, title: 'Product 2', price: 10, img: img2 },
    { id: 3, title: 'Product 3', price: 15, img: img3 },
    { id: 4, title: 'Product 4', price: 20, img: img4 },
    { id: 5, title: 'Product 5', price: 25, img: img5 },
    { id: 6, title: 'Product 6', price: 30, img: img6 },
    { id: 7, title: 'Product 7', price: 35, img: img7 }
]





function Products() {
    
    const [basket, setbasket] = useState([]);

    function addToBasket(product) {
        const newProduct = {
            ...product,
            basketId: crypto.randomUUID()
        };
    setbasket(prev => [...prev, newProduct]);
    console.log(product);
}

function removeProductFromBasket(basketId) {
    setbasket(prev => prev.filter(product => product.basketId !== basketId));
}

function removeAllProducts() {
    setbasket([])
    console.log("Remove All")
}

    return (
        <div className='products-container'>
            <div className="products">
                {productsItems.map((product) => (
                    <div className="products__item" key={product.id}>
                        <span className="products__title">{product.title}</span>
                        <img src={product.img} alt={product.title} />
                        <div>
                            <span className="products__price">{product.price}$</span>
                            <button className="products__button" onClick={() => addToBasket(product)}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>


            <div className='card-basket'>
                <span className='card-basket__title'>Here is your basket:</span>
                <div className='cart-basket__products'>
                {basket.map(item => ( 
                    <div className="basket-products__item" key={item.basketId} >
                        <img src={item.img} alt={item.title} />
                        <span className="basket-products__title">
                            {item.title}
                            </span>
                        <div>
                            <span className="basket-products__price">
                                {item.price}$
                                </span>
                            <button className="basket-products__button" onClick={() => removeProductFromBasket(item.basketId)}>Remove</button>
                        </div>
                    </div>
                ))}
                </div>
                

                <button onClick={removeAllProducts}>Remove All</button>
            </div>
        </div>
    )
}

export default Products