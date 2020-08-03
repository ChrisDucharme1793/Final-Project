import React from "react";
import AddBalanceCard from "../components/AddBalanceCard"
import { useHistory } from 'react-router-dom'



function AddBalance(props) {
  console.log(props)
    const {state, setState} = props
    const history = useHistory();

  return (
  
<>
< AddBalanceCard setState={setState} state={state}/>
</>
     
  );
};

export default AddBalance;