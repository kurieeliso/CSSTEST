import React from 'react'
import './../App.css'
import {NavLink} from "react-router-dom"

export const Result = (props) => {
    return (
        <div className="result-wrapper">
            <h2 className="result-title">RIGHT ANSWERS:</h2>
            <div className="result-count">{props.result}</div>
            <NavLink to="/"><input
                onClick={props.getResult}
                className="result-button" type="button" value="RESTART" /></NavLink>
        </div>
    )
}