import React from 'react'
import './Basket.scss';
import { BasketItem } from './BasketItem';




export const Basket = (probs) => {


    return (
        <div className='basket-box'>
            <h1 className='basket-headline'>Warenkorb</h1>

            <div>
                <BasketItem />
            </div>
        </div>
    )
}


export default Basket
