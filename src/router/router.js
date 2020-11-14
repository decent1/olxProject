import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../pages/home';
import Productdetail from '../pages/productDetail'
import Postadd from '../pages/postadd'
import Add from '../pages/add'

class Approuter extends React.Component {
    render() {
        return (
            <div>
                <Router>
                <Route exact path="/" component={Home} />
                <Route  path="/Productdetail" component={Productdetail} />
                <Route path="/Postadd" component={Postadd}/>
                <Route path="/Add" component={Add}/>

                </Router>
            </div>
        )
    }
}
export default Approuter;