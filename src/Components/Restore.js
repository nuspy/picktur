import React from 'react';

function Restore(props){
    return(
        <div className="restore-button-container" onClick={() =>{props.onRestorePosts()}}>
            <button>Restore</button>
        </div>)
}

export default Restore;