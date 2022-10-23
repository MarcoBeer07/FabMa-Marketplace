import React, { useState } from 'react'
import './Goods.scss';
import Data from '../Data/data.json';
import GoodsList from './GoodsList';


//Goods main container
export const Goods = (probs) => {
    const [goods] = useState(Data);

    const test = "Basket";

    return (
        <div className='goods-box'>
            <div className='navbar'>
                <div>Werkzeuge</div>
                <div>Rohstoffe</div>
                <div>Zubehör</div>
            </div>
            <div>
                <GoodsList goods={goods} />
            </div>

        </div>
    )
}


export default Goods

