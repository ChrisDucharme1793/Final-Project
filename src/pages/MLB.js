import React from "react";
import MLBTable from "../components/MLBTable"
import MyBetsTable from "../components/MyBetsTable"
import "../styles/Dashboard.css";
import {useHistory} from 'react-router-dom'


function MLB(props) {
  console.log(props)
  const {state, setState} = props
  const history = useHistory()

  return (
  
<>

< MLBTable state={state} setState={setState} history={history}/>
< MyBetsTable state={state} setState={setState} history={history} />

</>
     
  );
};

export default MLB;