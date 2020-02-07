import React from 'react';

function FeauturedCard(props) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={props.imgUrl} alt="Not found"></img>   
            </div>
            <div className="card-content">
                <h3>{props.title}</h3>
                <p>{props.extract}</p>
                <p>Escrito por <b>{props.author}</b> el <b>{props.date}</b></p>
                <p>Categoría: <a href="/"> {props.category}</a></p>
            </div>
        </div>
    )
}

export default FeauturedCard;