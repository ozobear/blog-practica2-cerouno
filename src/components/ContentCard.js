import React from 'react';

function ContentCard(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <img src={props.imgUrl} alt="Not found"></img>
            <p>{props.date}</p>
            <p>{props.extract}</p>
            <p>{props.author}</p>
            <p>{props.category}</p>
        </div>
    )
}

export default ContentCard;