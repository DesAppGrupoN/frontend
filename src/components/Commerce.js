import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
export default function Commerce(props){

    return (
        <Card>
            <CardContent>
                {props.commerce.sector}            
            </CardContent>
            <CardContent>
                {props.commerce.address}
            </CardContent>
        </Card>
    )
}