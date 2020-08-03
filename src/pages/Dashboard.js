import React from "react";
import FutureGamesTable from "../components/FutureGamesTable";
import MyBetsTable from "../components/MyBetsTable";
import "../styles/Dashboard.css";
import {useHistory} from 'react-router-dom'

function Dashboard(props) {
  console.log(props)
  const {state, setState} = props
  const history = useHistory()
  return (

    <>

      < FutureGamesTable state={state} setState={setState} history={history}/>
      < MyBetsTable state={state} setState={setState} />

    </>

  );
};

export default Dashboard;