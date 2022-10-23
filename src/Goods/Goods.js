import React from 'react'
import './Goods.scss';
import Basket from '../Basket/Basket';

    const test = "Basket";

export const Goods = () => {

    

    return (

        <div className='goods-box'>
            <div className='navbar'>
                <div>Sortiment 1 {test}</div>
                <div>Sortiment 2</div>
                <div>Sortiment 3</div>
            </div>
        </div>
    )
}


export default Goods
