import React from "react";
import '../styles/Error.css';

const Error = (props) => {

    return (
        <div>
            <p className="errorText">
                {props.error}
                <span>&nbsp;</span>
            </p>
        </div>
    )
}

export default Error;