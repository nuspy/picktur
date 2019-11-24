import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types'

function PhotoWall(props) {
    return (
        <div>
            <a className="addIcon" onClick={props.onAddPhoto} href="#AddPhoto" >  </a>
            {/*<button className='addIcon' onClick={props.onAddPhoto} > +</button>*/}

            <div className="photoGrid">
                {props.posts.map((post, index) => <Photo key={index}
                                                         post={post}
                                                         onRemovePhoto={props.onRemovePhoto}/>)
                }
            </div>
        </div>
    )
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired,
    onAddPhoto:PropTypes.func.isRequired
}

export default PhotoWall;
