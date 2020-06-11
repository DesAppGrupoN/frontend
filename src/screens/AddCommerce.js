import React, { useState } from "react";
import NewOrEditProduct from '../components/NewOrEditProduct';
import { addCommerce } from '../services/Commerce';


const AddCommerce = (props) => {

    const [showAdd, setShowAdd] = useState(false);

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
            {showAdd ?
                <NewOrEditProduct onAccept={acept} onCancel={() => setShowAdd(false)}/>
                :
                <div/>
            }
            <button onClick={() => setShowAdd(!showAdd)}>Boton</button>
        </div>
    )
}

export default AddCommerce;