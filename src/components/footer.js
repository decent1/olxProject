import React from 'react'

class Footer extends React.Component {
    render() {
        return (
                <div className="container-fluid bg-light mt-10">
                    <div className="row">
                        <div className="col">
                            <ul className="footerLi">
                            <li><strong>POPULAR CATEGORIES</strong></li>
                                <li>Cars</li>
                                <li>Flat for rent</li>
                                <li>Jobs</li>
                                <li>Mobile Phones</li>
                            </ul>
                            </div>
                        <div className="col">
                        <ul className="footerLi">
                        <li><strong>TRENDING SEARCHES</strong></li>
                                <li>Bikes</li>
                                <li>Watches</li>
                                <li>Books</li>
                                <li>Dogs</li>
                                </ul>
                        </div>
                        <div className="col">
                        <ul className="footerLi">
                        <li><strong>About US</strong></li>
                                <li>About OLX Group</li>
                                <li>Contact US</li>
                                <li>OLX for Business</li>
                                </ul> 
                        </div>
                        <div className="col">
                        <ul className="footerLi">
                        <li><strong>OLX</strong></li>
                                <li>Help</li>
                                <li>Sitemap</li>
                                <li>Legal & Privacy information</li>
                                </ul>
                        </div>
                        <div className="col">
                        <ul className="footerLi">
                        <li><strong>Follow US</strong></li>
                                <li className="socialIcon"></li>
                                <li className="socialIcon"></li>
                                <li className="socialIcon"></li>
                                <li className="socialIcon"></li>
                                </ul>
                        </div>
                    </div>
                   
                </div>
                
         
        )
    }
}

class Copyright extends React.Component{
    render(){
        return(
            <div>
            <div className="container-fluid copyright">
            <p className="mt-2">Other Countries India - South Africa - Indonesia</p>
            <p className="mt-2">Free Classifieds in Pakistan. © 2006-2020 OLX</p> 
            </div>
            </div>
        )
    }

}

export { Footer , Copyright };
