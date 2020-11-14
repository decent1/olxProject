import React from 'react';
import { Link } from "react-router-dom";

class Postadd extends React.Component{
    render() {
      return (
        <div>
          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
              <img className="ml-5" src="../images/download.jpg" width={30} height={30} alt="" loading="lazy" />
            </a>
          </nav>
          <div className="container">
            <h3 className="text-center post">POST YOUR AD</h3>
            <div className="container postDiv">
              <h5 className="m-4 categoryHeading">CHOOSE A CATEGORY</h5>
              <div className="dropright ">
                <div className="border posttoggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Mobiles
                </div>
                <div className="dropdown-menu postDropDown ">
                  <Link to="Add" className="dropdown-item" href="#">Tables</Link>
                  <Link to="Add" className="dropdown-item" href="#">Accessories</Link>
                  <Link to="Add" className="dropdown-item" href="#">Mobile Phones</Link>
                </div>
              </div>
              <div className="dropright">
                <div className="border posttoggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Vehicles
                </div>
                <div className="dropdown-menu postDropDown">
                  <Link className="dropdown-item" href="#">cars</Link>
                  <Link className="dropdown-item" href="#">Cars on installment</Link>
                  <Link className="dropdown-item" href="#">Cars Accessories</Link>
                  <Link className="dropdown-item" href="#">Spare Parts</Link>
                  <Link className="dropdown-item" href="#">Buses,Vans &amp; Trucks</Link>
                  <Link className="dropdown-item" href="#">Rickshaw &amp; Chingchi</Link>
                  <Link className="dropdown-item" href="#">Other Vehicles</Link>
                  <Link className="dropdown-item" href="#">Boats</Link>
                  <Link className="dropdown-item" href="#">Tractor &amp; Trailer</Link>
                </div>
              </div>
              <div className="dropright">
                <div className="border posttoggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Property for Sale
                </div>
                <div className="dropdown-menu postDropDown">
                  <Link className="dropdown-item" href="#">Land &amp; Plot</Link>
                  <Link className="dropdown-item" href="#">Houses</Link>
                  <Link className="dropdown-item" href="#">Apartments &amp; Flats</Link>
                  <Link className="dropdown-item" href="#">Shops-Offices-Commerical Space</Link>
                  <Link className="dropdown-item" href="#">Portion &amp; Floor</Link>
                </div>
              </div>
              <div className="dropright">
                <div className="border posttoggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Property for Rent
                </div>
                <div className="dropdown-menu postDropDown">
                  <Link className="dropdown-item" href="#">Houses</Link>
                  <Link className="dropdown-item" href="#">Apartment &amp; Flat</Link>
                  <Link className="dropdown-item" href="#">Portion &amp; Floors</Link>
                  <Link className="dropdown-item" href="#">Shops-Offices-Commerical Space</Link>
                  <Link className="dropdown-item" href="#">Rooms</Link>
                  <Link className="dropdown-item" href="#">Roommates &amp; Paying Guest</Link>
                  <Link className="dropdown-item" href="#">Vacation Rentals-Guest Houses</Link>
                  <Link className="dropdown-item" href="#">Land &amp; Plots</Link>
                </div>
              </div>
              <div className="dropright">
                <div className="border posttoggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Electronics &amp; Home Appliances
                </div>
                <div className="dropdown-menu postDropDown">
                  <Link className="dropdown-item" href="#">Computer &amp; Accessories</Link>
                  <Link className="dropdown-item" href="#">TV-Video_Audio</Link>
                  <Link className="dropdown-item" href="#">Cameras &amp; Accessories</Link>
                  <Link className="dropdown-item" href="#">Games &amp; Entertainment</Link>
                  <Link className="dropdown-item" href="#">Other Home Appliances</Link>
                  <Link className="dropdown-item" href="#">Games &amp; Entertainment</Link>
                  <Link className="dropdown-item" href="#">Kitchen Appliances</Link>
                  <Link className="dropdown-item" href="#">AC &amp; Coolers</Link>
                  <Link className="dropdown-item" href="#">Fridges &amp; Freezers</Link>
                  <Link className="dropdown-item" href="#">Wahing Machines &amp; Dryers</Link>
                </div>
              </div>
              <div className="dropright">
                <div className="border posttoggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Bikes
                </div>
                <div className="dropdown-menu postDropDown">
                  <Link className="dropdown-item" href="#">Motorcycles</Link>
                  <Link className="dropdown-item" href="#">Spare Parts</Link>
                  <Link className="dropdown-item" href="#">Bicycles</Link>
                  <Link className="dropdown-item" href="#">ATV &amp; Quads</Link>
                  <Link className="dropdown-item" href="#">Scooters</Link>
                  <Link className="dropdown-item" href="#">Something else here</Link>
                </div>
              </div>
              <div className="dropright">
                <div className="border posttoggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Business Industrial &amp; Agriculture
                </div>
                <div className="dropdown-menu postDropDown">
                <Link className="dropdown-item" href="#">Action</Link>
                  <Link className="dropdown-item" href="#">Another action</Link>
                  <Link className="dropdown-item" href="#">Something else here</Link>
                  <Link className="dropdown-item" href="#">Separated link</Link>
                </div>
              </div>
              <div className="dropright">
                <div className="border posttoggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Services
                </div>
                <div className="dropdown-menu postDropDown">
                      <Link className="dropdown-item" href="#">Action</Link>
                  <Link className="dropdown-item" href="#">Another action</Link>
                  <Link className="dropdown-item" href="#">Something else here</Link>
                  <Link className="dropdown-item" href="#">Separated link</Link>
                </div>
              </div>
              <div className="dropright">
                <div className="border posttoggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Jobs
                </div>
                <div className="dropdown-menu postDropDown">
                <Link className="dropdown-item" href="#">Action</Link>
                  <Link className="dropdown-item" href="#">Another action</Link>
                  <Link className="dropdown-item" href="#">Something else here</Link>
                  <Link className="dropdown-item" href="#">Separated link</Link>
                </div>
              </div>
              <div className="dropright">
                <div className="border posttoggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Animals
                </div>
                <div className="dropdown-menu postDropDown">
                <Link className="dropdown-item" href="#">Action</Link>
                  <Link className="dropdown-item" href="#">Another action</Link>
                  <Link className="dropdown-item" href="#">Something else here</Link>
                  <Link className="dropdown-item" href="#">Separated link</Link>
                </div>
              </div>
              <div className="dropright">
                <div className="border posttoggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Furniture &amp; Home Decor
                </div>
                <div className="dropdown-menu postDropDown">
                <Link className="dropdown-item" href="#">Action</Link>
                  <Link className="dropdown-item" href="#">Another action</Link>
                  <Link className="dropdown-item" href="#">Something else here</Link>
                  <Link className="dropdown-item" href="#">Separated link</Link>
                </div>
              </div>
              <div className="dropright">
                <div className="border posttoggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Fashion &amp; Beauty
                </div>
                <div className="dropdown-menu postDropDown">
                <Link className="dropdown-item" href="#">Action</Link>
                  <Link className="dropdown-item" href="#">Another action</Link>
                  <Link className="dropdown-item" href="#">Something else here</Link>
                  <Link className="dropdown-item" href="#">Separated link</Link>
                </div>
              </div>
              <div className="dropright">
                <div className="border posttoggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Books, Sports &amp; Hobbies
                </div>
                <div className="dropdown-menu postDropDown">
                <Link className="dropdown-item" href="#">Action</Link>
                  <Link className="dropdown-item" href="#">Another action</Link>
                  <Link className="dropdown-item" href="#">Something else here</Link>
                  <Link className="dropdown-item" href="#">Separated link</Link>
                </div>
              </div>
              <div className="dropright">
                <div className="border posttoggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Kids
                </div>
                <div className="dropdown-menu postDropDown">
                  <Link className="dropdown-item" href="#">Action</Link>
                  <Link className="dropdown-item" href="#">Another action</Link>
                  <Link className="dropdown-item" href="#">Something else here</Link>
                  <Link className="dropdown-item" href="#">Separated link</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  export default Postadd;