import products from "./Array";

function ProductItem({ name, price, description }){
    return (
        <ul>
            <h3>Product: {name}</h3>
            <p>Price: ${price}</p>
            <p>Description: {description}</p>
        </ul>
    )
}

export default ProductItem;