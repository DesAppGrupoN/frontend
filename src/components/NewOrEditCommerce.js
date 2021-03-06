import React, { useState, useEffect } from "react";
import { getCommerceSectors, getCommercePaymethods } from '../services/Commerce';
import { useTranslation } from 'react-i18next';
import M from 'materialize-css/dist/js/materialize.min.js';
import '../styles/NewOrEditProduct.css';
import Error from '../components/Error';
import { validateCommerce } from "../components/Validations";


const NewOrEditCommerce = (props) => {

    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [sector, setSector] = useState();
    const [sectors, setSectors] = useState([]);
    const [address, setAddress] = useState();
    const [image, setImage] = useState();
    const [payMethodsSelected, setPaymethodsSelected] = useState();
    const [payMethods, setPaymethods] = useState([]);
    const [maxDistance, setMaxDistance] = useState();
    const [openingTime, setOpeningTime] = useState();
    const [closingTime,setClosingTime ] = useState();
    const [openingDays,setDay] = useState([]);
    const [id, setId] = useState(undefined);
    const [active, setActive] = useState("");
    const commerce = props.commerce;
    const { t } = useTranslation();
    const [error,setError] = useState("");

    const days=[{value:'MONDAY', label:'Lunes'}, {value:'TUESDAY', label:'Martes'}, {value:'WEDNESDAY', label:'Miercoles'},
    {value:'THURSDAY',label:'Jueves'}, {value:'FRIDAY', label:'Viernes'}, {value:'SATURDAY', label:'Sabado'}, {value:'SUNDAY', label:'Domingo'}];   
    function validate(){
        if (validateCommerce(name,address,openingTime,closingTime,openingDays,setError)) {
            props.onAccept(name, description, sector, address, image, payMethodsSelected, maxDistance, openingDays, openingTime, closingTime, id);
        }
    }
    useEffect(() => {
        if (commerce) {
            setName(commerce.name);
            setDescription(commerce.description);
            setSector(commerce.sector);
            setAddress(commerce.address);
            setImage(commerce.image);
            setPaymethodsSelected(commerce.payMethods);
            setMaxDistance(commerce.maxDistance);
            setOpeningTime(commerce.attentionSchedule.openingTime);
            setClosingTime(commerce.attentionSchedule.closingTime)
            setDay(commerce.attentionSchedule.days)
            setId(commerce.id);
            console.log(commerce.attentionSchedule, openingTime);
            
            setActive("active");
        }
        getCommerceSectors().then(res => setSectors(res.data)).then(() => M.AutoInit());
        getCommercePaymethods().then(res => setPaymethods(res.data)).then(() => M.AutoInit());
    }, [])



    return (
        <div className='popup'>
            <div class="row">
                <form class="col s6 offset-s3 #f5f5f5 grey lighten-4">
                <Error error={error}/>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="name" type="text" class="validate" required onChange={(event) => setName(event.target.value)} defaultValue={name} />
                            <label className={active} for="name">{t('shared.name')}</label>
                        </div>

                        <div class="input-field col s12">
                            <input id="description" type="text" class="validate" onChange={(event) => setDescription(event.target.value)} defaultValue={description} />
                            <label className={active} for="description">{t('shared.description')}</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="address" type="text" class="validate" required onChange={(event) => setAddress(event.target.value)} defaultValue={address} />
                            <label className={active} for="address">{t('shared.address')}</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="maxDistance" type="number" class="validate"  min="0" onChange={(event) => setMaxDistance(event.target.value)} defaultValue={maxDistance} />
                            <label className={active} for="maxDistance">{t('shared.max_distance')}</label>
                        </div>

                    </div>


                    <label>{t('shared.sector')}</label>
                    <div class="row">
                        <select class="#f5f5f5 grey lighten-4" onChange={(event) => setSector(event.target.value)} defaultValue={sector}>
                            <option value="" disabled={true} selected="">{t('shared.sector_default')}</option>
                            {sectors.map(sect => <option value={sect}>{sect}</option> ) }
                        </select>
                    </div>

                    <label>{t('shared.paymethods')}</label>
                    <div class="row">
                        <select multiple class="#f5f5f5 grey lighten-4" onChange={(event) => setPaymethodsSelected(Array.from(event.target.selectedOptions).map(o => o.value))} defaultValue={payMethodsSelected}>
                            {payMethods.map(method => <option value={method}>{method}</option> ) }
                        </select>
                    </div>

                    <div class="row">
                        <div class="input-field col s12">
                            <input id="image" type="text" class="validate" onChange={(event) => setImage(event.target.value)} defaultValue={image} />
                            <label className={active} for="image">{t('shared.image')}</label>
                        </div>
                    </div>

                    <label>{t('shared.opening_days')}</label>
                    <div classNane="row">
                        <select multiple class="#f5f5f5 grey lighten-4" onChange={(event) => setDay([...openingDays, event.target.value]) } defaultValue={openingDays}>
                            {days.map(day => <option value={day.value}>{day.label}</option>)}
                        </select>
                    </div>

                    <label>{t('shared.opening_time')}</label>
                    <div className="col s12">
                        <div class="input-field col s6">
                            <p>{t('shared.from_time')}</p>
                            <input type="time" name="horariocomienzo"  required onChange={(event) => setOpeningTime(event.target.value)} defaultValue={openingTime}/>
                        </div>

                        <div class="input-field col s6">
                            <p>{t('shared.to_time')}</p>
                            <input type="time" name="horariofin" required onChange={(event) => setClosingTime(event.target.value)} defaultValue={closingTime}/>
                        </div>
                    </div>

                    <div class="center">
                        <a class="waves-effect waves-light btn-large" onClick={validate}>{t('shared.accept')}</a>
                        <a class="waves-effect waves-light btn-large" onClick={props.onCancel}>{t('shared.cancel')}</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewOrEditCommerce;