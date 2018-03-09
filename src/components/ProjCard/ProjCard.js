import React from 'react';
import classes from './ProjCar.css'

const ProjCard = (props) => {
    return (
        <div className={classes.ProjCar} onClick={props.clicked}>
            <strong>{props.name}</strong>
            <br/>
            <span>{props.language}</span>
        </div>
    )
}

export default ProjCard;