import React from 'react';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import CarImage from '../images/car.jpeg'
import { Link } from "react-router-dom";




class Card extends React.Component {
  render() {
    return (
      <div>
         <div className="card" style={{ width: '18rem' }}>
          <img src={CarImage} className="card-img" alt="..." />
          <p className='heart'><FavoriteBorderOutlinedIcon /></p>
          <div className="card-body">
            <p className="card-text">Rs:700</p>
            <p className="card-text text-muted">Some text</p>
          </div>
        </div>
      </div>
    );
  }

}

export default Card;