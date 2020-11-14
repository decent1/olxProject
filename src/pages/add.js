import React from 'react';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { connect } from 'react-redux';
import { set_name } from '../store/action';
import firebase from '../config/firebase';
import { Link } from "react-router-dom";

class Add extends React.Component {
    constructor() {
        super()
        this.state = {
            title: "",
            description: "",
            price: "",
            file: null,
            address: "",
            category: "",
            url: '',
            progress: 0
        }
    }


    set_name = () => {
        console.log("Title==>", this.state.title)
        console.log("DESCRIPTION==>", this.state.description)
        console.log("PRICE==>", this.state.price)
        console.log("AdImg==>", this.state.url)
        console.log("LOCATION==>", this.state.address)


        let key = firebase.database().ref('/').push().key;
        let CardInputData = {
            cardTitle: this.state.title,
            photoURL: this.state.url,
            price: this.state.price,
            description: this.state.description,
            address: this.state.address,
            key: key
        }
        if (CardInputData === "") {
            alert("please fill")
        }
        else {
            firebase.database().ref('/').child(`CardInputData/${key}`).set(CardInputData).then( () => {
                alert(' Detail Uploaded ')
            //   window.location.replace('/')


            })
        }




    }
    InputChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    InputChangeDescription = (e) => {
        this.setState({
            description: e.target.value
        })
    }
    InputChangePrice = (e) => {
        this.setState({
            price: e.target.value
        })
    }

    InputChangeAddress = (e) => {
        this.setState({
            address: e.target.value
        })
    }

    uploadImg = () => {

        if (this.state.file == null) {
            alert('first click add imgae and then click upload button  ')
        }
        else {
            var ref = firebase.storage().ref().child(`images/${this.state.file.name}`).put(this.state.file)

            ref.on('state_changed', (snapshot)=> {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                this.setState({progress:progress})
                console.log('Upload is ' + progress + '% done');
            },  (error)=> {
            },  ()=> {
                ref.snapshot.ref.getDownloadURL().then(url => {
                    console.log(url);
                    this.setState({url:url})
                });

    


            });
        }
    }
    render() {
        let user = this.props.currentUser;
        console.log(user)

        return (
            <div>
                <div className="container">
                    <h3 className="text-center post">POST YOUR AD</h3>
                    <div className="container postDiv">
                        <h5 className="m-4 categoryHeading">SELECTED CATEGORY</h5>
                        <ul id="UnorderList">
                            <li className="text-muted">CATEGORY/dataGet<span className="change">Change</span></li>
                        </ul>
                    </div>
                </div>
                <div className="container">
                    <div className="container SELECTEDDiv">
                        <h5 className="m-4 SELECTEDHeading ">INCLUDE SOME DETAILS</h5>
                        <label className="ml-3" htmlFor="condition">Condition *</label>
                        <div id="postAddbtns">
                            <button>New</button> <button>Used</button>
                        </div>
                        <label className="ml-3 mt-4" htmlFor="condition">Type *</label>
                        <div id="postAddbtns">
                            <button>Apple</button> <button>Danny Tabs</button> <button>Q Tabs</button> <button>Samsung</button>
                            <br />
                            <button>Other Tablets</button>
                        </div>
                        <label className="ml-3 mt-4" htmlFor="condition">Type *</label>
                        <div className="type">
                            <input type="text" className="type-input" onChange={this.InputChangeTitle} /><br /><span><p className="text-muted ml-2" style={{ fontSize: 'small' }}>
                                Mention the key features of your item (e.g. brand, model, age, type</p></span>
                        </div>
                        <label className="ml-3 mt-4" htmlFor="condition">Description *</label>
                        <div className="type">
                            <textarea name="Descrip" id="Dscrpt" cols={30} rows={5} defaultValue={""} onChange={this.InputChangeDescription} /><br /><span><p className="text-muted ml-2" style={{ fontSize: 'small' }}>
                                Mention the key features of your item (e.g. brand, model, age, type</p></span>
                        </div>
                    
                <div className="container">

                    <h5 className="mb-3 "><strong>SET A PRICE</strong> </h5>
                    <span className='text-muted'>  price*</span>  <br />
                    <input placeholder='Rs |' id="validationServer" onChange={this.InputChangePrice} className='type-input' type='number' required />
              
                <hr />
                <div className=' mt-3 mb-3 ' >
                    <div><h6 className="mb-3"><strong>UPLOAD PHOTOS</strong> </h6>
                        <div className='getImgArea '>
                        <progress  value={this.state.progress} max='100' />
                                            <br/>
                            <button className="getImg">
                                <label >
                                    <input type="file" id="input-file" onChange={(e) => this.setState({ file: e.target.files[0] })} />
                                    <AddAPhotoIcon />
                                </label>
                            </button><br />
                            <button onClick={this.uploadImg}>upload Img</button>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <h5 className="mb-3 "><strong>CONFIRM YOUR LOCATION</strong> </h5>
                        <span className=''>    Address *</span> <br />
                        <input className='attributeInput ' onChange={this.InputChangeAddress} type='text' required />
                    </div>
                    <hr />
                    <div>
                        <h5 className="mb-3 "><strong>REVIEW YOUR DETAILS</strong> </h5>
                                <h3 className="SellerName ">{user.name}</h3>
                        <img className="SellerImg " src={user.photoURL} alt="" />
                    </div>
                </div>
                <hr />
                <Link to="/"><button className="postBtn  mb-5 " onClick={this.set_name} >Post Now</button></Link>


                </div>
                
</div>

</div>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.currentUser,
    card: state.card,
});
const mapDispatchToProp = (dispatch) => {
    return {
        set_name: () => dispatch(set_name()),
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(Add);
