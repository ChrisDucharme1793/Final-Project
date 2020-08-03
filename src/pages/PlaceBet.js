import React from "react";
import PlaceBetCard from "../components/PlaceBetCard"
import { useHistory } from 'react-router-dom'



function PlaceBet(props) {
console.log(props)
  const {state, setState} = props
  const history = useHistory();
  ///

  return (
  
<>
< PlaceBetCard setState={setState} state={state}/>
</>
     
  );
};

export default PlaceBet;