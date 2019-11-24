import React, {Component} from 'react';
import Title from './Title';
import Restore from "./Restore";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";

class Main extends Component {

    constructor() {
        super();
        this.state = {
            posts : [],
            screen: null
        };
        this.removePhoto = this.removePhoto.bind(
this);
        this.restorePosts = this.restorePosts.bind(this);
        this.addPhoto = this.addPhoto.bind(this);
        this.cancelAdd = this.cancelAdd.bind(this);
    }

    componentDidMount() {
        const posts = getFromDbMock();

        this.setState(
            {
                posts: posts,
                screen: 'photos'
            }
        )
    }

    componentDidUpdate(prevProps, prevState){
        console.log("Rerendered");
    }

    removePhoto(postRemoved){
        console.log(postRemoved.description);
        this.setState((state) => ({
            posts: state.posts.filter(post => post!==postRemoved)
        }))
    }

    restorePosts(){
        console.log("Posts restored");
        this.setState(() => ({
            posts: getFromDbMock()//,
            //screen: 'photos'
        }))
    }

    addPhoto(){
        console.log("A photo will be added");
        this.setState( () => ({
            screen: 'addPhoto'
        }))
        console.log("Photo in strate: " + this.state.posts.number)
    }

    cancelAdd(){
        console.log("No more add Photo");
        this.setState( () => ({
            screen: 'photos'
        }))
    }

    render() {
        return (
            <div>
                {
                    this.state.screen === 'photos' && (
                    <div>
                        <Title title="Picktur."/>
                        <Restore onRestorePosts={this.restorePosts}/>
                        <PhotoWall posts = {this.state.posts}
                                   onRemovePhoto={this.removePhoto}
                                    onAddPhoto={this.addPhoto}
                                   />
                    </div>
                    )
                }
                {
                    this.state.screen === 'addPhoto' && (
                    <div>
                        <AddPhoto onCancelAdd={this.cancelAdd}></AddPhoto>
                    </div>
                    )
                }
            </div>)
    }
}

function getFromDbMock() {
/* Get list of photos from Unplash
    var result = [];

    fetch('https://api.unsplash.com/photos/?client_id=2c11060ba7a444e041937b9001b157a2db38098f56c2469924133b0a3fdb3c34')
        .then(res => res.json())
        .then((data) => {
        })
        .catch(console.log);
*/

    return [{
        id: "0",
        description: "beautiful landscape",
        imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
            "3919321_1443393332_n.jpg"
    }, {
        id: "1",
        description: "Aliens???",
        imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
            "08323785_735653395_n.jpg"
    }, {
        id: "2",
        description: "On a vacation!",
        imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
    }]


}

export default Main;