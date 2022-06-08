import React from "react";
import '../styles/Card.css'

const Card = ({img, incrementId, text, name}) => {
    return (
        <div className="card">
            <h1 className="title">{text}</h1>
            <div>
                <div className="card-img">
                    <img src={img} alt="" />
                </div>
                <div className="card-data">
                    <h2>{name}</h2>
                    <div>                    
                        <button className="button" onClick={() => incrementId("previous")} >Previous</button>
                        <button className="button" onClick={() => incrementId("next")} >Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;