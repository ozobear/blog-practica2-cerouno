import React from 'react';

function PostsContent(props) {
    return(
        <div className="post-card">
            <div>
                <p>{props.category}</p>
            </div>
            <div className="post-image">
                <img src={props.imgUrl} alt="Not found"></img>   
            </div>
            <div className="post-content" style={{ padding: 20, paddingtop: 0 }}>
                <h4>{props.title}</h4>
                <p>{props.extract}</p>
                <p>Escrito por <b>{props.author}</b> el <b>{props.date}</b></p>
            </div>
        </div>
    );
};

export default PostsContent;