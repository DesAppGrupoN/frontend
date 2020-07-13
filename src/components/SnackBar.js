import React from "react";
import '../styles/SnackBar.css';

export const showSuccessfullySnackbar = (label) => {
    var snackbar = document.getElementById("snackbar");
    snackbar.className = "show " + "#26a69a teal lighten-1";
    snackbar.innerHTML = label;
    setTimeout(function () {
      snackbar.className = snackbar.className.replace("show", "");
    }, 1500);
}

export const showFailedSnackbar = (label) => {
  var snackbar = document.getElementById("snackbar");
  snackbar.className = "show " + "#ef5350 red lighten-1";
  snackbar.innerHTML = label;
  setTimeout(function () {
    snackbar.className = snackbar.className.replace("show", "");
  }, 1500);
}

const SnackBar = (props) => {
    return(
        <div id="snackbar">
            {props.message}
        </div>
    );
}

export default SnackBar;