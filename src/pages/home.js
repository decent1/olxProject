import React from 'react';
import logo from '../images/download.jpg';
import { Add } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";
import LOGIN1 from '../images/login1.JPG';
import LOGIN2 from '../images/login2.JPG';
import LOGIN3 from '../images/login3.JPG';
import Secondnav from '../components/secOndNav';
import Card from '../components/card';
import { Footer, Copyright } from '../components/footer';
import bannerTop from '../images/banner.JPG';
import bannerDown from '../images/footerImg.JPG';
import { connect } from 'react-redux';
import { facebookLogin, getFirebaseData } from '../store/action';
import carbed from '../images/carbed.jpg'
import triplebed from '../images/triplebed.jpg'
import singlebed from '../images/singlebed.jpg'
import wardrobe from '../images/wardrobe.jpg'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';



class Home extends React.Component {
  componentDidMount() {
    this.props.getFirebaseData();
  }
  render() {
    console.log("propsss", this.props)
    let userData = this.props.currentUser;
    return (
      <div>
        <div className="sticky-top">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img width="50px" src={logo} alt='olxLogo' className="ml-3" />
            <select className="form-control countrySelector ml-5">
              <option>Pakistan </option>
              <option>Default select</option>
              <option>Default select</option>
              <option>Default select</option>
              <option>Default select</option>
              <option>Default select</option>
              <option>Default select</option>
            </select>
            <div className='form-inline ml-3 hide'>
              <input className="form-control searching" type="search" placeholder="Search" aria-label="Search" />
              <button className='searchIcon'><SearchIcon /></button></div>
            <span className="profileSpan">{userData.photoURL ?
            <div>
              
              <span><NotificationsIcon style={{ marginLeft: '10px', fontSize: '30px' }} /><ChatBubbleOutlineIcon style={{ marginLeft: '5px', fontSize: '30px' }} /></span>

            
              <div className="btn-group">
                <img src={userData.photoURL} className="profileImage dropdown-toggle ml-2" />
                <p className="dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className="sr-only">Toggle Dropdown</span>
                </p>
                <div className="dropdown-menu">
                  <p className="logOut" onClick={() => this.props.signOut()}>Logout</p>
                </div>
              </div>         </div>: <Link className='nav-link loginBtn float-right ml-3' data-toggle="modal" data-target="#sellModal">Login</Link>}
            </span>

            {userData.uid ? <Link to="/Postadd"><button className="sellbtn ml-3" ><Add /> Sell</button></Link>
              : <button className="sellbtn ml-3" data-toggle="modal" data-target="#sellModal"><Add /> Sell</button>}


          </nav>




        </div>
        <div className="modal fade" id="sellModal" tabIndex={-1} aria-labelledby="sellModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <div>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">X</span>
                  </button>
                </div>
                <div id="carouselExampleCaptions" className="carousel slide mt-5" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
                    <li data-target="#carouselExampleCaptions" data-slide-to={1} />
                    <li data-target="#carouselExampleCaptions" data-slide-to={2} />
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={LOGIN1} className="d-block w-100" alt="..." />

                    </div>
                    <div className="carousel-item">
                      <img src={LOGIN2} className="d-block w-100" alt="..." />

                    </div>
                    <div className="carousel-item">
                      <img src={LOGIN3} className="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
                <div>
                  <button className="authenticationProcess" data-dismiss="modal" onClick={() => this.props.facebookLogin()}>Continue with Facebook</button>
                  {/* <button className="authenticationProcess">Continue with Google</button>
                  <button className="authenticationProcess">Continue with Phone</button>
                  <button className="authenticationProcess">Continue with Email</button> */}
                  <p className="mt-3" style={{ fontSize: "10" }} >We won't share your personal details with anyone</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <Secondnav />

        <img src={bannerTop} alt="" width="100%" />
        <div className='mt-5 ml-5'>

          
<div className="container">
<div className="row">

 <div className="col-sm-12 col-md-6 col-lg-3 ">
              <div className="card" style={{ width: '18rem' }}>
                <img src={carbed} className="card-img" alt="..." />
                <p className='heart'><FavoriteBorderOutlinedIcon /></p>
                <div className="card-body">
                  <p className="card-text">4500</p>
                  <p className="card-text text-muted">Car Bed</p>
                  <p className="card-text  location" > <small className="text-muted" ></small></p >
                   
                </div>
              </div>
            </div>
 <div className="col-sm-12 col-md-6 col-lg-3 ">
              <div className="card" style={{ width: '18rem' }}>
                <img src={triplebed} className="card-img" alt="..." />
                <p className='heart'><FavoriteBorderOutlinedIcon /></p>
                <div className="card-body">
                  <p className="card-text">8500</p>
                  <p className="card-text text-muted">triplebed</p>
                  <p className="card-text  location" > <small className="text-muted" > </small></p >
                   
                </div>
              </div>
            </div>
 <div className="col-sm-12 col-md-6 col-lg-3 ">
              <div className="card" style={{ width: '18rem' }}>
                <img src={singlebed} className="card-img" alt="..." />
                <p className='heart'><FavoriteBorderOutlinedIcon /></p>
                <div className="card-body">
                  <p className="card-text">5000</p>
                  <p className="card-text text-muted">singlebed</p>
                  <p className="card-text  location" > <small className="text-muted" > </small></p >
                   
                </div>
              </div>
            </div>
 <div className="col-sm-12 col-md-6 col-lg-3 ">
              <div className="card" style={{ width: '18rem' }}>
                <img src={wardrobe} className="card-img" alt="..." />
                <p className='heart'><FavoriteBorderOutlinedIcon /></p>
                <div className="card-body">
                  <p className="card-text">6000</p>
                  <p className="card-text text-muted">wardrobe</p>
                  <p className="card-text  location" > <small className="text-muted" >  </small></p >
                   
                </div>
              </div>
            </div>
          

         
  </div>

  <div className="row mt-3">
  {this.props.firebaseData.map((v, i) => {
            return <div className="col-sm-12 col-md-6 col-lg-3 " key={i}>
              <div className="card" style={{ width: '18rem' }}>
                <img src={v.photoURL} className="card-img" alt="..." />
                <p className='heart'><FavoriteBorderOutlinedIcon /></p>
                <div className="card-body">
                  <p className="card-text">{v.price}</p>
                  <p className="card-text text-muted">{v.cardTitle}</p>
                  <p className="card-text  location" > <small className="text-muted" > {v.address} </small></p >
                   
                </div>
              </div>
            </div>
          

          })
          }
  </div>
</div>
<div> <button className="userCHatBtn ml-3 mb-3 mt-5">Show More Cards</button> </div>
        </div>
        <img src={bannerDown} alt="" width="100%" className="mt-5" />
        <Footer />
        <Copyright />


      </div>

    )
  }

}

const mapStateToProps = (state) => ({
  user: state.user,
  currentUser: state.currentUser,
  firebaseData: state.firebaseData
});
const mapDispatchToProp = (dispatch) => ({
  facebookLogin: () => dispatch(facebookLogin()),
  getFirebaseData: () => dispatch(getFirebaseData()),


})
export default connect(mapStateToProps, mapDispatchToProp)(Home);