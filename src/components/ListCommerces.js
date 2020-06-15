import React, { useState, useEffect } from "react";
import { withGetScreen } from 'react-getscreen';
import Commerce from "./Commerce";

const ListCommerces = (props) => {
    const [list, setList] = useState([]);
    const cols = props.isMobile() ? 12 : 6;


    useEffect(() => {
        setList(props.commerces)
    });

    return (
        <div>
            {list.map(commerce => {
                return (
                    <div className={"col s" + cols}>
                        <Commerce onEdit={props.onEdit} onDelete={props.onDelete} key={commerce.id} commerce={commerce} />
                    </div>
                );
            })}
        </div>
    )
}

export default withGetScreen(ListCommerces);