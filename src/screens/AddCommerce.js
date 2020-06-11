import React, { useState } from "react";
import NewOrEditCommerce from '../components/NewOrEditCommerce';
import { addCommerce } from '../services/Commerce';


const AddCommerce = (props) => {

    const [showAddCommerce, setShowAdd] = useState(false);

    function acept(name, description, sector, address, image, maxDistance,attencionSchedule) {
        const body = {
            
            "name": name,  
            "description": description,
            "sector" : sector, 
            "address": address, 
            "image" : image, 
            "maxDistance": maxDistance, 
            "attencionSchedule": attencionSchedule
        }

        addCommerce(body).then(res => console.log("Exito")).catch(res => console.log(res))
    }

    return (
        <div className="container">
            {showAddCommerce ?
                <NewOrEditCommerce onAccept={acept} onCancel={() => setShowAdd(false)}/>
                :
                <div/>
            }
            <button onClick={() => setShowAdd(!showAddCommerce)}>Boton</button>
        </div>
    )
}

export default AddCommerce;