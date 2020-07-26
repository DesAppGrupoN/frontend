import React, { useState, useEffect } from "react";
import M from 'materialize-css/dist/js/materialize.min.js';
import { useTranslation } from 'react-i18next';

const CommercePurchase = (props) => {
    const commerce = props.commerce;
    const [shipmentType, setShipmentType] = useState("ON_SITE");
    const [day, setDay] = useState(new Date(Date.now() + (1000 * 60 * 60 * 24)).toISOString());
    const [time, setTime] = useState(commerce.attentionSchedule.turnsForDay[0]);
    const { t } = useTranslation();

    useEffect(() => {
        M.AutoInit();
    }, [])

    useEffect(() => {
        buildAndSaveTurn();
    }, [day, time, shipmentType])

    function buildAndSaveTurn() {
        const turn = {
            "commerceId": commerce.id,
            "shipment": shipmentType,
            "day": day, 
            "time": time
        }

        replaceOrAddTurn(turn);
    }

    function replaceOrAddTurn(turn) {
        const newTurns = [...props.turns].filter(t => t.commerceId != turn.commerceId).concat(turn);
        props.setTurns(newTurns);
    }

    return (
        <div>
            
            <h6>&nbsp;</h6>
            <h6>{commerce.name}</h6>

            <div>
            <label className={"left"}>{t('purchase.shipment')}</label>
            <select class="#f5f5f5 grey lighten-4" onChange={(event) => setShipmentType(event.target.value)} defaultValue={shipmentType}>
                {["ON_SITE", "DELIVERY"].map(shType => <option value={shType}>{t(`shipments.${shType}`)}</option>)}
            </select>
            </div>

            {shipmentType === "ON_SITE" &&
                <div>
                    <DayComponent onChange={setDay} value={day} />
                    <TimeComponent onChange={setTime} value={time} turns={commerce.attentionSchedule.turnsForDay} />

                </div>
            }


        </div>
    )
}

const DayComponent = (props) => {

    const { t } = useTranslation();

    useEffect(() => {
        M.AutoInit();
    }, []);

    function getDays() {
        const today = Date.now();
        const dates = []
        for(var i=3; i < 17; i++)
            dates.push(new Date(today + (i * 1000 * 60 * 60 * 24)));

        return dates;
    }

    return (
        <div className="col s6">
            <label className={"left"}>{t('purchase.day')}</label>
            <select class="#f5f5f5 grey lighten-4" onChange={(event) => props.onChange(event.target.value)} defaultValue={props.value}>
                {getDays().map(day => <option value={day.toISOString()}>{day.toLocaleDateString()}</option>)}
            </select>
        </div>
    )
}

const TimeComponent = (props) => {

    const { t } = useTranslation();

    useEffect(() => {
        M.AutoInit();
    }, []);

    return (
        <div className="col s6">
            <label className={"left"}>{t('purchase.time')}</label>
            <select class="#f5f5f5 grey lighten-4" onChange={(event) => props.onChange(event.target.value)} defaultValue={props.value}>
                {props.turns.map(sect => <option value={sect}>{sect}</option>)}
            </select>
        </div>
    )
}


export default CommercePurchase;