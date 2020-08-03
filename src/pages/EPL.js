import React from "react";
import EPLTable from "../components/EPLTable"
import MyBetsTable from "../components/MyBetsTable"
import {useHistory} from 'react-router-dom'



function EPL(props) {
  console.log(props)
  const {state, setState} = props
  const history = useHistory()

  return (
  
<>

< EPLTable state={state} setState={setState} history={history}/>
< MyBetsTable state={state} setState={setState} history={history} />

</>
     
  );
};

export default EPL;