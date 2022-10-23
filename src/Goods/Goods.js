import React, { useState } from 'react'
import './Goods.scss';
import Data from '../Data/data.json';
import GoodsList from './GoodsList';
import RawmaterialsData from '../Data/RawmaterialsData.json'
import EquipmentData from '../Data/EquipmentData.json'


//Goods main container
export const Goods = (probs) => {
    const [goods] = useState(Data);
    const [rawmaterials] = useState(RawmaterialsData); //useState(RawmaterialsData) muss gleichgeschrieben sein wie oben der Import
    const [equipments] = useState(EquipmentData)

   /*  const test = "Basket"; */

    return (
        <div className='goods-box'>
            <div className='navbar'>
                <div>Werkzeuge</div>
                <div>Rohstoffe</div>
                <div>Zubehör</div>
            </div>
            <div>
                <GoodsList goods={goods} />
                <GoodsList goods={rawmaterials}></GoodsList> {/* die Variable, die man hier eingibt, zeigt entwieder die Werkzeuge oder Rawmaterials auf der Seite an */}
                <GoodsList goods={equipments}></GoodsList>
            </div>


        </div>
    )
}


export default Goods

