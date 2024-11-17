import { useState } from "react";
import products from "./Array";

function AddProductForm(){
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    
    let submission = (event) => {
        event.preventDefault();
        if (name && price && description) {
            const newProduct = { name, price, description };
            addProduct(newProduct);
            setName('');
            setPrice('');
            setDescription('');

        } else {
            alert('Fill out the all the forms');
        }
    }
    return (
        <form>
            <ul>
                <h2>Add Product</h2>
                <li>
                 <label>Name :
                <input type="text" 
                value={name} 
                placeholder="name"
                onChange={(event) => setName(event.target.value)} />
            </label>
                </li>
                <li>
            <label>Price :
                <input type="text" value={price} onChange={(event) => setPrice(event.target.value)}/>
            </label>
            </li>
            <li>
            <label>Description :
                <input type="text" value={description} onChange={(event) => setDescription(event.target.value)}/>
            </label>
            </li>
            </ul>
            <input type="submit" value="Add Product" onClick={submission}>
            </input>
        </form>
    );
}

export default AddProductForm;