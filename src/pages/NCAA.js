import React from "react";
import NCAATable from "../components/NCAATable"
import MyBetsTable from "../components/MyBetsTable"
import "../styles/Dashboard.css";
import {useHistory} from 'react-router-dom'


function NCAA(props) {
  console.log(props)
  const {state, setState} = props
  const history = useHistory()

  return (
  
<>

< NCAATable state={state} setState={setState} history={history}/>
< MyBetsTable state={state} setState={setState} history={history} />

</>
     
  );
};

export default NCAA;