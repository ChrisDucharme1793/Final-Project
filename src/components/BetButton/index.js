import React from "react";
import {Link} from "react-router-dom";




const BetButton = props => {

  const handleClick = () => {
   


  };


  return (
  <Link to="/placebet"> <button type="button"  onClick={handleClick}>
      Place a Bet
    </button></ Link>
  );
};



export default BetButton;
