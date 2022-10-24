import './Goods.scss'

function Good(probs) {
    const { good } = probs;
    const { name, price, item_number } = good;

    function addToBasket(i) {
        console.log("Hello")
    }

    return (
        <div className='goods-elements'>
            {name} <br />
            {price} € <br />
            Art. Nummer: {item_number} <br />
            <button onClick={addToBasket}>In den Warenkorb</button>
        </div>
    )
}

export default Good;