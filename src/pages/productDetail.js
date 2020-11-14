import React from 'react';
import Navbar from '../components/navBar';
import Secondnav from '../components/secOndNav';
import { Footer, Copyright } from '../components/footer';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/Share';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


class Productdetail extends React.Component {
    render() {
        return (

            <div>
               <div className="sticky-top">
               <Navbar/>
               </div>
                <Secondnav />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-8 mb-5">
                            <img className="ml-4 mt-4  productDetailImage" src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                            <div className="productDescription ml-4 " >
                            <p className="mt-2 ml-2 mr-2 text-justify">
                                <h5>Detail</h5>
                                <table >
                                    <tr className="detailTable">
                                        <td>Price</td>
                                        <td>Model</td>
                                        <td>Condition</td>
                                    </tr>
                                </table>
                            </p>
                            <hr className="hr"></hr>
                                <h4 className="mt-2 ml-3">Description</h4>
                                <p className="mt-2 ml-2 mr-2 text-justify ">
                                    Coporate Automobiles Pvt lTD

                                    Dear All,

                                    Hamari company Lai aik shandar--ab apni car ki booking karwayn flat 8/ markup salana pay..1-7 saal ki asaan iksat pay hasil kren apni car..

                                    Booking k liye hmary office tashreef layn...ya deails k liye call kren

                                    Timing is 10-6pm..

                                    For Further Detail Call or Visit our Office

                                    MZ7 Al Qadeer heights Garden town near kalma chowk Lahore

                                    Regards : Mahnoor chaudhry O331O198006
                                    </p>

                            </div>

                        </div>
                        <div className="col-sm-4">
                            <div className="sidediv mt-4">
                                <p className="mt-4 mr-3 heartIcon"><FavoriteBorderOutlinedIcon/></p>
                                <p className="mt-4 mr-5 shareIcon"><ShareIcon/></p>
                                      <h1 className="mt-3 ml-3">Rs:2500</h1>
                                      <p className="ml-3">Toyota Rkr fibertop body available for sale</p>
                                      <p className="text-muted mt-2 mr-3 date">30 sep</p>
                                      <p className="text-muted mt-4 ml-3" style={{fontSize:"small"}}> bufferzone</p>
                            </div>
                            <div className="sidediv mt-4">
                                      <h4 className="mt-3 ml-3">Seller description</h4>
                                      <div>
                                       <p className="ml-5">UserName
                                      <br></br><span className="text-muted">Member since May 2019</span></p>
                                      </div>
                                      <div>
                                      <button className="userCHatBtn ml-3 mb-3">Chat with seller</button>
                                      </div>
                                      <div>
                                          <p className="mobileIcon"><CallOutlinedIcon/>03182038679</p>
                                      </div>
                                      
                            </div>
                            <div className="sidediv mt-4">
                            <h3 className="mt-3 ml-3">Posted in</h3>
                            <p className="text-muted ml-5" style={{fontSize:"small"}}> bufferzone</p>
                            <img width="85%" className="m-4" src="https://maps.googleapis.com/maps/api/staticmap?center=34.363%2C73.472&amp;language=en&amp;size=640x256&amp;zoom=15&amp;scale=1&amp;channel=olx-latam-ar-web-dev&amp;key=AIzaSyAChxbDof4fywIkC6U-7MCgXBpUp4t2DiA&amp;signature=dGAKBNTBhaz9OiS8in-pNxN7ylQ="></img>
                                      
                                      
                            </div>
                           

                        </div>
                    </div>
                </div>
                <Footer />
                <Copyright />
            </div>

        )
    }
}

export default Productdetail