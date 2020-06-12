import React, { useState, useEffect } from "react";
import '../styles/NewOrEditProduct.css';

const NewOrEditProduct = (props) => {

    const [name, setName] = useState();
    const [brand, setBrand] = useState();
    const [description, setDescription] = useState();
    const [category, setCategory] = useState();
    const [price, setPrice] = useState();
    const [stock, setStock] = useState();
    const [image, setImage] = useState();
    const [active, setActive] = useState("");
    const product = props.product;

    useEffect(() => {
        if(product) {
            setName(product.name);
            setBrand(product.brand);
            //setDescription(product.description);
            setCategory(product.category);
            setPrice(product.price);
            setStock(product.stock);
            setImage(product.image);
            setActive("active");
        }
    })

    return (
        <div className='popup'>
            <div class="row">
                <form class="col s6 offset-s3 #f5f5f5 grey lighten-4">
                    <div class="row">
                        <div class="input-field col s6">
                            <input id="name" type="text" class="validate" onChange={(event) => setName(event.target.value)} value={name}/>
                            <label className={active} for="name">Nombre</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="brand" type="text" class="validate" onChange={(event) => setBrand(event.target.value)} value={brand}/>
                            <label className={active} for="brand">Marca</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s12">
                            <input id="description" type="text" class="validate" onChange={(event) => setDescription(event.target.value)} value={description}/>
                            <label className={active} for="description">Descripcion</label>
                        </div>
                    </div>


                    <label>Categoria</label>
                    <div class="row">
                        <select class="browser-default #f5f5f5 grey lighten-4" onChange={(event) => setCategory(event.target.value)} value={category}>
                            <option value="" disabled={true} selected="">Selecciona una categoria</option>
                            <option value="1">Limpieza</option>
                            <option value="2">Bebidas</option>
                            <option value="3">Alimentos</option>
                        </select>
                    </div>

                    <div class="row">
                        <div class="input-field col s12">
                            <input id="price" type="number" class="validate" onChange={(event) => setPrice(event.target.value)} value={price}/>
                            <label className={active} for="price">Price</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s12">
                            <input id="stock" type="number" class="validate" onChange={(event) => setStock(event.target.value)} value={stock}/>
                            <label className={active} for="stock">Stock</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s12">
                            <input id="image" type="text" class="validate" onChange={(event) => setImage(event.target.value)} value={image}/>
                            <label className={active} for="image">Link a imagen</label>
                        </div>
                    </div>

                    <div class="center">
                        <a class="waves-effect waves-light btn-large" onClick={() => props.onAccept(name, brand, description, category, price, stock, image)}>Aceptar</a>
                        <a class="waves-effect waves-light btn-large" onClick={props.onCancel}>Cancelar</a>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default NewOrEditProduct;