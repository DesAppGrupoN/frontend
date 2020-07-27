import React, { useState, useEffect } from "react";
import M from 'materialize-css/dist/js/materialize.min.js'
import { useTranslation } from 'react-i18next';
import '../styles/NewOrEditProduct.css';

const NewOrEditProduct = (props) => {

    const [name, setName] = useState();
    const [brand, setBrand] = useState();
    const [category, setCategory] = useState();
    const [price, setPrice] = useState();
    const [stock, setStock] = useState();
    const [image, setImage] = useState();
    const [commerceId, setCommerceId] = useState();
    const [id, setId] = useState(undefined);
    const [active, setActive] = useState("");
    const product = props.product;
    const { t } = useTranslation();

    useEffect(() => {
        if(product) {
            setName(product.name);
            setBrand(product.brand);
            setCategory(product.category);
            setPrice(product.price);
            setStock(product.stock);
            setImage(product.image);
            setId(product.id);
            setCommerceId(product.commerceId);
            setActive("active");
        }
        M.AutoInit();
    }, [])

    return (
        <div className='popup'>
            <div class="row">
                <form class="col s6 offset-s3 #f5f5f5 grey lighten-4">
                    <div class="row">
                        <div class="input-field col s6">
                            <input id="name" type="text" class="validate" onChange={(event) => setName(event.target.value)} defaultValue={name}/>
                            <label className={active} for="name">{t('shared.name')}</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="brand" type="text" class="validate" onChange={(event) => setBrand(event.target.value)} defaultValue={brand}/>
                            <label className={active} for="brand">{t('shared.brand')}</label>
                        </div>
                    </div>
                    <label>{t('shared.category')}</label>
                    <div class="row">
                        <select class="#f5f5f5 grey lighten-4" onChange={(event) => setCategory(event.target.value)} defaultValue={category}>
                            <option value="" disabled={true} selected="">{t('shared.category_default')}</option>
                            <option value="CLEANING">Limpieza</option>
                            <option value="DRINK">Bebidas</option>
                            <option value="FOOD">Alimentos</option>
                        </select>
                    </div>

                    <div class="row">
                        <div class="input-field col s12">
                            <input id="price" type="number" class="validate" onChange={(event) => setPrice(event.target.value)} defaultValue={price}/>
                            <label className={active} for="price">{t('shared.price')}</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s12">
                            <input id="stock" type="number" class="validate" onChange={(event) => setStock(event.target.value)} defaultValue={stock}/>
                            <label className={active} for="stock">{t('shared.stock')}</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s12">
                            <input id="image" type="text" class="validate" onChange={(event) => setImage(event.target.value)} defaultValue={image}/>
                            <label className={active} for="image">{t('shared.image')}</label>
                        </div>
                    </div>

                    <div class="center">
                        <a class="waves-effect waves-light btn-large" onClick={() => props.onAccept(name, brand, category, price, stock, image, id, commerceId)}>{t('shared.accept')}</a>
                        <a class="waves-effect waves-light btn-large" onClick={props.onCancel}>{t('shared.cancel')}</a>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default NewOrEditProduct;