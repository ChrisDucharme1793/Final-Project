import React from "react";
import NFLTable from "../components/NFLTable"
import MyBetsTable from "../components/MyBetsTable"
import "../styles/Dashboard.css";
import {useHistory} from 'react-router-dom'

function NFL(props) {

  console.log(props)
  const {state, setState} = props
  const history = useHistory()
  return (
  
<>

< NFLTable state={state} setState={setState} history={history}/>
< MyBetsTable state={state} setState={setState} history={history} />

</>
     
  );
};

export default NFL;