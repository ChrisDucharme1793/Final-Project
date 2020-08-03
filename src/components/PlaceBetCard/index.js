import React, { Component } from "react";
import "../../styles/PlaceBet.css";



class PlaceBetCard extends Component {

  state={
    Wager:0,
    Prediction: 0,
    balance: 0
  }


  handleAmountChange = event => {
    this.setState({ Wager: parseInt(event.target.value)});
    };
  
  handlePredictionChange = event => {
    this.setState({ Prediction: event.target.value});
    };

  render() {

    const { state, setState } = this.props
    console.log(state)
    const matchOdds = [state.bet.sites[0].odds.spreads.odds[0]]
    console.log(this.state)
    
    return (

      <>
        <div class="container is-fluid">
          <div class="notification">

            <div className="betsFormContainer">
              <div className="betsFormForm">
                <form onSubmit="">
                  <h1>Make A Bet</h1>
                  <p>
                    Please select your wager amount and the outcome you are betting
                on. <span>Maximum bet of $10,000.</span>
                  </p>
                  <hr />

                  <h3>
                    <span>Home team:</span> {state.bet.teams[0]}
                  </h3>
                  <h3>
                    <span>Away team:</span> {state.bet.teams[1]}
                  </h3>

                  <div className="betWager">
                    <h4>Select a wager:</h4>
                    <div className="betWagerBtn">
                      <button type="button" value="50" onClick={this.handleAmountChange} >
                        $50
                  </button>
                      <button type="button" value="100" onClick={this.handleAmountChange}>
                        $100
                  </button>
                      <button type="button" value="250"  onClick={this.handleAmountChange}>
                        $250
                  </button>
                      <button type="button" value="500" onClick={this.handleAmountChange} >
                        $500
                  </button>
                      <input
                        id="wagerInput"
                        type="text"
                        placeholder="Enter Amount $"
                        onChange={this.handleAmountChange}
                      />
                    </div>
                  </div>


                  <div className="betOutcome">
                    <h4>Select a outcome:</h4>
                    <div className="betOutcomeBtn">

                      <button type="button" name="Home Spread" onClick={this.handlePredictionChange} value={state.bet.sites[0].odds.spreads.points[0]} > Home Spread
                      </button>
                     
                      <button type="button" name="Away Spread" onClick={this.handlePredictionChange} value={state.bet.sites[0].odds.spreads.points[1]} > Away Spread
                      </button>
                   
                    </div>
                  </div>


                  <div className="finalBet">
                    <h3>Your prediction:</h3>

                    <table>
                      <thead>
                        <tr>
                          <th> Prediction </th>
                          <th> Odds </th>
                          <th> Wager </th>
                          <th> Potential Win </th>
                        </tr>
                      </thead>
                      <tbody>
                        <td>{this.state.Prediction} </td>
                        <td> {matchOdds} </td>
                        <td> {this.state.Wager} </td>
                        <td> ${matchOdds * this.state.Wager} </td>
                      </tbody>
                    </table>
                  </div>
                  <br />
                  <p>
                    Betting is a risk, and by placing this bet you acknowledge that
                    you take that risk willingly.
              </p>
                  <div className="clearfix">

                    <button
                      type="button"
                      className="cancelbtn"

                    >
                      Cancel
                </button>

                    <button type="submit" className="signupbtn">
                      Submit
                </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>

      </>

    );
  }
}
export default PlaceBetCard;