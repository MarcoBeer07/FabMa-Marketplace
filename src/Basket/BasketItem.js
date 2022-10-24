import React from 'react'

export const BasketItem = () => {

    let basketPrice = [];
    let basketGood = [];
    let basketItemNumber = [];

    return (
        <div className='basket-elements'>
            {basketGood} <br />
            {basketPrice} € <br />
            Art. Nummer: {basketItemNumber} <br />
        </div>
    )
}
