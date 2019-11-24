import React from 'react';
import PropTypes from 'prop-types';

function Photo(props) {
    const post = props.post;

    return (
        <figure className="figure">
            <img className="photo" src={post.imageLink} alt={post.description}/>
            <figcaption>
                <p>{post.description}</p>
                <div className="button-container" onClick={() =>{props.onRemovePhoto(post)}}>
                    <button>Remove</button>
                </div>
            </figcaption>
        </figure>
    )
}

Photo.propType = {
    post: PropTypes.array.isRequired,
    onRemovePhoto : PropTypes.func.isRequired
}

export default Photo;