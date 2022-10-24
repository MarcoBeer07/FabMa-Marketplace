import React, { useState } from 'react'
import './Goods.scss';
import Data from '../Data/data.json';
import GoodsList from './GoodsList';
import RawmaterialsData from '../Data/RawmaterialsData.json'
import EquipmentData from '../Data/EquipmentData.json'
import { Link, Route, Routes } from 'react-router-dom'


//Goods main container
export const Goods = (probs) => {
    const [goods] = useState(Data);
    const [rawmaterials] = useState(RawmaterialsData); //useState(RawmaterialsData) muss gleichgeschrieben sein wie oben der Import
    const [equipments] = useState(EquipmentData)

    /*  const test = "Basket"; */

    return (
        <div className='goods-box'>
            <div className='navbar'>
                <div><Link to='/goods'>Werkzeuge</Link></div>
                <div><Link to='/raw-materials'>Rohstoffe</Link></div>
                <div><Link to='/equipments'>Zubehör</Link></div>
            </div>
            <div>
                <Routes>
                    <Route path='/goods' element={<GoodsList goods={goods} />} />
                    <Route path='/raw-materials' element={<GoodsList goods={rawmaterials} />} />
                    <Route path='/equipments' element={<GoodsList goods={equipments} />} />
                </Routes>

                {/* die Variable, die man hier eingibt, zeigt entwieder die Werkzeuge oder Rawmaterials auf der Seite an */}

            </div>


        </div>
    )
}


export default Goods

