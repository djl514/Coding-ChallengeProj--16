import products from "./Array";
import ProductItem from "./ProductItem";

function ProductList(){
    
    return (
        <div>
            <h2>Product List</h2>
            <div>
                {products.map(product => (
                    <ProductItem 
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                    />
                ))}

            </div>
        </div>
    )
}

export default ProductList;