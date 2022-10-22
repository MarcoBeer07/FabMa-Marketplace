import Good from "./Good";


function GoodsList(probs) {
    const { goods } = probs;

    const elements = goods.map((item, i) => <Good key={i} good={item} />)

    return (
        <div className="goods-elements-box">
            {elements}
        </div>
    )
}

export default GoodsList;