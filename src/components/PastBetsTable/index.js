import React from "react";
import "../../styles/MyBetsTable.css";



function PastBetsTable() {


    return (

        <>
        <div class="container is-fluid">
        <div class="notification">
        <div>
            
                <h1>Past Bets</h1>
                <br></br>
                <table class="table">
                    <thead>
                        <tr>
                        <th>Date</th>
                        <th>Home Team</th>
                        <th>Away Team</th>
                        <th>Home Team Line</th>
                        <th>Home Team Win</th>
                        <th>Result</th>
                        </tr>
                    </thead>
                    <tbody> 
                    
                    <tr>
                        <td>Sat Jul 04 2020 18:00:33 GMT-0400 (Eastern Daylight Time)</td>
                        <td>Manchester United </td>
                        <td>Manchester City</td>
                        <td>-1.0</td>
                        <td>2.4</td>
                        <td><strong text-color="green">WIN</strong></td>
                    </tr>
                    </tbody>
                </table>
            
        </div>
        </div>
</div>
        </>

    );
}

export default PastBetsTable;