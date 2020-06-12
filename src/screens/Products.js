import React, { useState, useEffect } from "react";
import NewOrEditProduct from '../components/NewOrEditProduct';
import ListProduct from '../components/ListProducts';
import { addProduct, editProduct, getProductsByCommerceId } from '../services/Product';
import {Link, useLocation} from "react-router-dom";

const Products = (props) => {

    const [showAdd, setShowAdd] = useState(false);
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [submit, setSubmit] = useState(addProduct);
    const location = useLocation();
    const commerceId = location.restaurant_id;

    function submitProduct(name, brand, description, category, price, stock, image) {
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

        submit(body).then(() => setShowAdd(false))
    }

    function edit(product) {
        setSubmit(editProduct);
        setSelectedProduct(product);
        setShowAdd(true);
    }

    function addNew() {
        setSubmit(addProduct);
        setShowAdd(true);
    }

    useEffect(() => {
        getProductsByCommerceId(commerceId).then(res => setProducts(res.data));
     }, []);

    return (        
        <div>
            <div className="row back">
                <div className="center back">
                    <Link className="back waves-effect waves-light btn-large" onClick={addNew}>Nuevo producto</Link>
                </div>

                <ListProduct onEdit={edit} products={products}/>
                
                
            </div>
            {showAdd ?
                <div className="front"> <NewOrEditProduct product={selectedProduct} onAccept={submitProduct} onCancel={() => setShowAdd(false)}/> </div>
                :
                <div/>
            }
        </div>
    )
}

export default Products;