import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = (props) => {

    const { user } = useAuth0();

    return(
        <div className="container z-depth-1 #eeeeee grey lighten-3">
            <p>&nbsp;</p>
            <div class="col s2 center">
                <img src={user.picture} alt="" width="200px" height="200px" class="circle responsive-img"></img>
            </div>
            <div className="divider"/>
            <h4 className="center">{user.email}</h4>
            <h4 className="center">{user.name}</h4>
            <p>&nbsp;</p>
        </div>
    );
}

export default Profile;