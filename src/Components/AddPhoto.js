import React, {Component} from 'react';
import PropTypes from 'prop-types';

function AddPhoto(props) {

        return <div>
            <h1>This is the page to add photos</h1>
            <button className='cancelIcon' onClick={props.onCancelAdd}>  </button>
        </div>

}

AddPhoto.propTypes = {
    onCancelAdd: PropTypes.func.isRequired
}

export default AddPhoto;