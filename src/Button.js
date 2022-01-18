import React from "react";
import './style.css'


const Button = ({title}) => {
    return (
        <div>
            <center>
                <button className="button">{title}</button>
            </center>
        </div>
    );
}

export default Button;