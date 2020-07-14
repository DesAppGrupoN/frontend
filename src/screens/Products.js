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
    const handleChangeFile = (file) => {
        addProducts(file,commerceId).then(function(response) {
            showSuccessfullySnackbar(t('snackbar.added_batchProducts') + response.data);
          }).catch(function(error) {
            showFailedSnackbar(t('failed_add_batchProducts') + error.data)});  
      }
         
    function submitProduct(name, brand, description, category, price, stock, image, id) {
        const body = {
            "commerceId": commerceId,
            "name": name, 
            "brand": brand, 
            "description": description, 
            "category": category, 
            "price": price, 
            "stock": stock, 
            "image": image,
            "id": id
        }

        addProduct(body).then(() => toggleShowAdd()).then(() => loadProducts());
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

    useEffect(() => {
        loadProducts();
     }, []);

    return (        
        <div>
            <div className="row back">
                <div className="center back">
                    <Link className="back waves-effect waves-light btn-large" onClick={toggleShowAdd}>{t('products.new')}</Link>
                </div>
                <div>
                    {t('csv.input')}
                    <input type="file" accept=".csv" onChange={e => handleChangeFile(e.target.files[0])} />
                </div>             
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