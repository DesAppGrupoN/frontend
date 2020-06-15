import React, { useState, useEffect } from "react";
import M from 'materialize-css/dist/js/materialize.min.js'
import '../styles/NewOrEditProduct.css';

const NewOrEditCommerce = (props) => {

    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [sector, setSector] = useState();
    const [address, setAddress] = useState();
    const [image, setImage] = useState();
    const [payMethods, setPaymethods] = useState();
    const [maxDistance, setMaxDistance] = useState();
    const [attentionSchedule, setAttentionSchedule] = useState(undefined);
    const [id, setId] = useState(undefined);
    const [active, setActive] = useState("");
    const commerce = props.commerce;

    useEffect(() => {
        if (commerce) {
            setName(commerce.name);
            setDescription(commerce.description);
            setSector(commerce.sector);
            setAddress(commerce.address)
            setImage(commerce.image);
            setPaymethods(commerce.payMethods)
            setMaxDistance(commerce.maxDistance)
            setAttentionSchedule(commerce.attentionSchedule)
            setId(commerce.id);
            setActive("active");
        }
        M.AutoInit();
    }, [])



    return (
        <div className='popup'>
            <div class="row">
                <form class="col s6 offset-s3 #f5f5f5 grey lighten-4">
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="name" type="text" class="validate" onChange={(event) => setName(event.target.value)} defaultValue={name} />
                            <label className={active} for="name">Nombre</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s12">
                            <input id="description" type="text" class="validate" onChange={(event) => setDescription(event.target.value)} defaultValue={description} />
                            <label className={active} for="description">Descripcion</label>
                        </div>
                        <div class="input-field col s12">
                            <input id="address" type="text" class="validate" onChange={(event) => setAddress(event.target.value)} defaultValue={address} />
                            <label className={active} for="address">Direccion</label>
                        </div>
                        <div class="input-field col s12">
                            <input id="maxDistance" type="number" class="validate" onChange={(event) => setMaxDistance(event.target.value)} defaultValue={maxDistance} />
                            <label className={active} for="maxDistance">Distancia maxima de envio</label>
                        </div>

                    </div>


                    <label>Sector</label>
                    <div class="row">
                        <select class="#f5f5f5 grey lighten-4" onChange={(event) => setSector(event.target.value)} defaultValue={sector}>
                            <option value="" disabled={true} selected="">Selecciona una categoria</option>
                            <option value="FOOD">Comidas</option>
                            <option value="FARMACY">Farmacia</option>
                            <option value="SUPERMARKER">Supermercado</option>
                        </select>
                    </div>

                    <label>Metodos de Pago</label>
                    <div class="row">
                        <select multiple class="#f5f5f5 grey lighten-4" onChange={(event) => setPaymethods(Array.from(event.target.selectedOptions, option => option.value))} defaultValue={payMethods}>
                            <option value="CASH">Efectivo</option>
                            <option value="CREDITH_CARD">Tarjeta</option>
                        </select>
                    </div>

                    <div class="row">
                        <div class="input-field col s12">
                            <input id="image" type="text" class="validate" onChange={(event) => setImage(event.target.value)} defaultValue={image} />
                            <label className={active} for="image">Link a imagen</label>
                        </div>
                    </div>

                    <div class="center">
                        <a class="waves-effect waves-light btn-large" onClick={() => props.onAccept(name, description, sector, address, image, payMethods, maxDistance, attentionSchedule, id)}>Aceptar</a>
                        <a class="waves-effect waves-light btn-large" onClick={props.onCancel}>Cancelar</a>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default NewOrEditCommerce;