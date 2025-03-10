import React from 'react';
import './Product.css';
import { IoStarSharp,IoBag } from "react-icons/io5";
const Product = () => {
  return (
    <>
    <section className='card-container'>
     <section className='card'>
      <img className='card-img'  src='https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg'
      alt='Shoe'/>
      <div className="card-details">
        <h3 className='card-title'>Shoe</h3>
        <section className="card-reviews">
          <span className="total-reviews">4</span>
         <IoStarSharp className='rating-star'/>
         <IoStarSharp className='rating-star'/>
         <IoStarSharp className='rating-star'/>
         <IoStarSharp className='rating-star'/>
        </section>
        <section className="card-price">
          <div className='price'>
            <del>$299</del>199
          </div>
          <div className="bag">
          <IoBag />
          </div>
        </section>
      </div>
     </section>
    </section>
    </>
  )
}

export default Product