import React, { useState } from "react";
import NewOrEditProduct from '../components/NewOrEditProduct';
import { addProduct } from '../services/Product';

const AddProduct = (props) => {

    const [showAdd, setShowAdd] = useState(false);

    function acept(name, brand, description, category, price, stock, image) {
        const body = {
            "commerceId": 1,
            "name": name, 
            "brand": brand, 
            "description": description, 
            "category": category, 
            "price": price, 
            "stock": stock, 
            "image": image
        }

        addProduct(body).then(res => console.log("Exito")).catch(res => console.log(res))
    }

    return (
        <div className="container">
            {showAdd ?
                <NewOrEditProduct onAccept={acept} onCancel={() => setShowAdd(false)}/>
                :
                <div/>
            }
            <button onClick={() => setShowAdd(!showAdd)}>Boton</button>
        </div>
    )
}

export default AddProduct;