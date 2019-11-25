import React from 'react';
import { Link } from 'react-router-dom';

let baseprops;

function AddPhoto(props) {
console.log("Base props: " + baseprops)

    console.log("props: " + props)
baseprops = props;
    return (<div>
        <h1>Pickture</h1>
        <Link className='cancelIcon' to="/"> </Link>
        <div>
            <form className="form" onSubmit={e => handleSubmit(e)} >
                <input className='.form input' type='text' placeholder='Link' name='link'/>
                <input className='.form input' type='text' placeholder='Description' name='description'/>
                <button> post</button>
            </form>
        </div>
    </div>)

}
function handleSubmit(event) {
    event.preventDefault();
    console.log("Form has been submitted ");
    const imagelink = event.target.elements.link.value;
    const description = event.target.elements.description.value;
    const post = {
        id: Number(new Date()),
        description: description,
        imageLink: imagelink
    }
    baseprops.onAddPhoto(post);

}


//AddPhoto.propTypes = {}

export default AddPhoto;