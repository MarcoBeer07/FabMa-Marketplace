import React from 'react'
import './Basket.scss';
import Goods from '../Goods/Goods';


export const Basket = (props) => {

    
    console.log(props.test);
    return (
        <div className='basket-box'>{props.test}</div>
    
    )
}


export default Basket
