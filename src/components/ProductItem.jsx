

function ProductItem({ name, price, description }){
    return (
        <div>
            <li>
                <b>{name}</b>
                </li>
            <p>Price: ${price}</p>
            <p>{description}</p>
        </div>
    )
}

export default ProductItem;