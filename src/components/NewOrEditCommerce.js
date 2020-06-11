import React, { useState } from "react";
import '../styles/NewOrEditProduct.css';

const NewOrEditCommerce = (props) => {

    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [sector, setSector] = useState();
    const [address, setAddress] = useState();
    const [image, setImage] = useState();
    const [payMethods, setPayMethods] = useState();
    const [maxDistance, setMaxDistance] = useState();
    const [attencionSchedule,setAttencionSchedule] = useState();
    return (
        <div className='popup'>
            <div class="row">
                <form class="col s6 offset-s3 #f5f5f5 grey lighten-4">
                    <div class="row">
                        <div class="input-field col s6">
                            <input id="name" type="text" class="validate" onChange={(event) => setName(event.target.value)}/>
                            <label for="name">Nombre</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s12">
                            <input id="description" type="text" class="validate" onChange={(event) => setDescription(event.target.value)}/>
                            <label for="description">Descripcion</label>
                        </div>
                    </div>


                    <label>Sector</label>
                    <div class="row">
                        <select class="browser-default #f5f5f5 grey lighten-4" onChange={(event) => setSector(event.target.value)}>
                            <option value="" disabled="" selected="">Selecciona un Sector</option>
                            <option value="1">Farmacia</option>
                            <option value="2">Restaurant</option>
                            <option value="3">Supermercado</option>
                        </select>
                    </div>

                    <div class="row">
                    <div class="input-field col s12">
                            <input id="address" type="text" class="validate" onChange={(event) => setAddress(event.target.value)}/>
                            <label for="address">Address</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s12">
                            <input id="image" type="text" class="validate" onChange={(event) => setImage(event.target.value)}/>
                            <label for="image">Link a imagen</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s12">
                            <input id="maxDistance" type="number" class="validate" onChange={(event) => setMaxDistance(event.target.value)}/>
                            <label for="maxDistance">max Distance</label>
                        </div>
                    </div>


                    <div class="center">
                        <a class="waves-effect waves-light btn-large" onClick={() => props.onAccept(name, description,sector,address,image, payMethods, maxDistance, attencionSchedule)}>Aceptar</a>
                        <a class="waves-effect waves-light btn-large" onClick={props.onCancel}>Cancelar</a>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default NewOrEditCommerce;