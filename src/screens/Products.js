import React, { useState, useEffect } from "react";
import NewOrEditProduct from '../components/NewOrEditProduct';
import ListProduct from '../components/ListProducts';
import { addProduct, deleteProduct, getProductsByCommerceId } from '../services/Product';
import {Link, withRouter, useLocation} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { addProducts } from "../services/Product";
import { showSuccessfullySnackbar, showFailedSnackbar } from '../components/SnackBar';

const Products = (props) => {

    const [showAdd, setShowAdd] = useState(false);
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const location = useLocation();
    const commerceId = location.commerce_id;
    const { t } = useTranslation();

    useEffect(() => {
        loadProducts();
     }, []);
    

    function handleChangeFile(file) {
        addProducts(file,commerceId)
            .then(() => {
                showSuccessfullySnackbar(t('snackbar.added_batch_products'));
                loadProducts();
            })
            .catch(() => showFailedSnackbar(t('snackbar.failed_add_batch_products')));  
      }
         
    function submitProduct(name, brand, category, price, stock, image, id) {
        const body = {
            "commerceId": commerceId,
            "name": name, 
            "brand": brand,  
            "category": category, 
            "price": price, 
            "stock": stock, 
            "image": image,
            "id": id
        }
        console.log(commerceId)
        console.log(body)
        addProduct(body).then(() => toggleShowAdd()).then(() => loadProducts())
                        .catch(error => (showFailedSnackbar(error.response.data)));
    }

    function toggleShowAdd() {
        setShowAdd(!showAdd);
    }

    function deleteProd(product) {
        deleteProduct(product.id).then(() => loadProducts());
    }

    function edit(product) {
        setSelectedProduct(product);
        toggleShowAdd();
    }

    function loadProducts() {
        getProductsByCommerceId(commerceId).then(res => setProducts(res.data));
    }

    return (        
        <div>
            <div className="container back">
                <ul className="center">
                        <li>
                            <a class="waves-effect waves-light btn-large" onClick={toggleShowAdd}>
                                {t('products.new')}
                            </a>
                        </li>
                        <li>
                            <div class = "file-field input-field waves-effect waves-light btn-large">
                                <span>{t('csv.input')}</span>
                                <input type = "file" onChange={e => handleChangeFile(e.target.files[0])}/>
                            </div>
                        </li>
                </ul>               
                 
                <ListProduct onEdit={edit} onDelete={deleteProd} products={products}/>
            </div>
            {showAdd ?
                <div className="front"> <NewOrEditProduct product={selectedProduct} onAccept={submitProduct} onCancel={() => setShowAdd(false)}/> </div>
                :
                <div/>
            }
        </div>
    )
}

export default withRouter(Products);
                                       
