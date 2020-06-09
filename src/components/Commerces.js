import React from "react";
import Commerce from "./Commerce";

export default function Commerces(props){
    const [list, setList] = React.useState([]);
     
    React.useEffect(() => {
        props.commerces().then((res)=> setList(res.data));
  });
    return (
        <div>
            {list.map(data => {
                return (
                    <Commerce key = {data.id} commerce = {data}/>
                );
            })}
        </div>
    )
}