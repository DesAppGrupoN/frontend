import React, { useState, useEffect } from "react";
import M from 'materialize-css/dist/js/materialize.min.js'
import '../styles/NewOrEditProduct.css';

const NewOrEditProduct = (props) => {

    const [name, setName] = useState();
    const [brand, setBrand] = useState();
    const [description, setDescription] = useState();
    const [category, setCategory] = useState();
    const [price, setPrice] = useState();
    const [stock, setStock] = useState();
    const [image, setImage] = useState();
    const [id, setId] = useState(undefined);
    const [active, setActive] = useState("");
    const product = props.product;

    useEffect(() => {
        if(product) {
            setName(product.name);
            setBrand(product.brand);
            setDescription(product.description);
            setCategory(product.category);
            setPrice(product.price);
            setStock(product.stock);
            setImage(product.image);
            setId(product.id);
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
                            <label className={active} for="name">Nombre</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="brand" type="text" class="validate" onChange={(event) => setBrand(event.target.value)} defaultValue={brand}/>
                            <label className={active} for="brand">Marca</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s12">
                            <input id="description" type="text" class="validate" onChange={(event) => setDescription(event.target.value)} defaultValue={description}/>
                            <label className={active} for="description">Descripcion</label>
                        </div>
                    </div>


                    <label>Categoria</label>
                    <div class="row">
                        <select class="#f5f5f5 grey lighten-4" onChange={(event) => setCategory(event.target.value)} defaultValue={category}>
                            <option value="" disabled={true} selected="">Selecciona una categoria</option>
                            <option value="LIMPIEZA">Limpieza</option>
                            <option value="BEBIDAS">Bebidas</option>
                            <option value="ALIMENTOS">Alimentos</option>
                        </select>
                    </div>

                    <div class="row">
                        <div class="input-field col s12">
                            <input id="price" type="number" class="validate" onChange={(event) => setPrice(event.target.value)} defaultValue={price}/>
                            <label className={active} for="price">Price</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s12">
                            <input id="stock" type="number" class="validate" onChange={(event) => setStock(event.target.value)} defaultValue={stock}/>
                            <label className={active} for="stock">Stock</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s12">
                            <input id="image" type="text" class="validate" onChange={(event) => setImage(event.target.value)} defaultValue={image}/>
                            <label className={active} for="image">Link a imagen</label>
                        </div>
                    </div>

                    <div class="center">
                        <a class="waves-effect waves-light btn-large" onClick={() => props.onAccept(name, brand, description, category, price, stock, image, id)}>Aceptar</a>
                        <a class="waves-effect waves-light btn-large" onClick={props.onCancel}>Cancelar</a>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default NewOrEditProduct;