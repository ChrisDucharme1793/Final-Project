import React from "react";
import LALIGATable from "../components/LALIGATable"
import MyBetsTable from "../components/MyBetsTable"
import "../styles/Dashboard.css";
import {useHistory} from 'react-router-dom'


function LALIGA(props) {
  console.log(props)
  const {state, setState} = props
  const history = useHistory()

  return (
  
<>

< LALIGATable state={state} setState={setState} history={history}/>
< MyBetsTable state={state} setState={setState} history={history} />

</>
     
  );
};

export default LALIGA;