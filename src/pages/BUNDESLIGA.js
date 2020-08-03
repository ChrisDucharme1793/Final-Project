import React from "react";
import BundesligaTable from "../components/BundesligaTable"
import MyBetsTable from "../components/MyBetsTable"
import {useHistory} from 'react-router-dom'



function BUNDESLIGA(props) {
  console.log(props)
  const {state, setState} = props
  const history = useHistory()

  return (
  
<>

< BundesligaTable state={state} setState={setState} history={history}/>
< MyBetsTable state={state} setState={setState} history={history} />

</>
     
  );
};

export default BUNDESLIGA;