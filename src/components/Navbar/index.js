import React, { Component } from "react";
import { Link } from "react-router-dom";

// import { useAuth0 } from "../../react-auth0-spa"
import { withRouter } from "react-router-dom";

import "../../styles/Navbar.css";
import jwt_decode from 'jwt-decode'


class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      username: "",
      balance: "",

    }
  }

//   componentDidMount() {
//     const token = localStorage.getItem("token")
//     const decoded = jwt_decode(token)

//     this.setState({
//       email: decoded.email,
//       userName: decoded.userName,
//       balance: decoded.balance,
//       if(token) {
//         jwt_decode(token);
//       }
//     })
//   }





  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('token')
    this.props.history.push('/')

  }



  render() {

    const loginRegLink = (
      <>

        <Link className="navbar-item" id="navbarLeft" to="/signin">
          <strong>Sign In</strong>
        </Link>



        <Link className="navbar-item" id="navbarLeft" to="/signup">
          <strong>Register</strong>
        </Link>


      </>
    )
    const userLink = (

      <>
        <Link className="navbar-item" id="navbarLeft" to="/profile" >
          <strong>Profile</strong>
        </Link>


        <Link className="navbar-item" id="navbarLeft" onClick={this.logOut.bind(this)}>
          <strong>Logout</strong>
        </Link>

      </>

    )



    return (

      <div>
        <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
          <div className="navbar-brand-is-dark">


            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" alt="">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div class="navbar-start">
            
            <a href="https://ibb.co/3WdD98x">
            <img src="https://i.ibb.co/WF5b4dr/logo.png" 
            style={{ height: "75px", width: "75px", marginTop:"7px", marginLeft:"7px", marginRight:"7px"  }} 
            alt="logo" ></img></a>
              
              {/* Home */}
              <Link className="navbar-item" id="navbarLeft" to="/">
                <strong id="navbarLeft">Home</strong>
                <span class="icon"><i class="fas fa-home" id="navbarLeft"></i></span>
              </Link>

              {/* SignIn/LogOut */}

              {localStorage.usertoken ? userLink : loginRegLink}

              <Link className="navbar-item" id="navbarLeft" onClick={this.logOut.bind(this)}>
                <strong>Logout</strong>
              </Link>

            </div>


            <div class="navbar-end">
              {/* Profile */}
              <Link className="navbar-item" id="navbarRight" to="/profile">
                <strong id="navbarRight">Profile</strong>
                <span><i class="fa fa-user fa-fw" id="navbarRight" style={{ color: "white" }}></i></span>
              </Link>

              {/* Poker Chip */}
              <a class="navbar-item" style={{ color: "white" }}>
                <img src="https://firebasestorage.googleapis.com/v0/b/casino-royale-9c472.appspot.com/o/gaming.svg?alt=media&token=3058a860-e55f-4cbb-aaf9-ee94e79433ce"
                  style={{ height: "24px", width: "24px", marginRight: "2px" }} alt="pokerchip" id="navbarRight"
                />: {this.state.balance} </a>

              {/* Add Funds */}
              <Link className="navbar-item" id="navbarRight" to="/AddBalance">
                <strong id="navbarRight">ADD FUNDS</strong>
                <span class="icon">
                  <i class="fa fa-credit-card" style={{ color: "white" }} aria-hidden="true" id="navbarRight"></i>
                </span>
              </Link>


            </div>

            {/* DropDown */}
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                <strong>Sports</strong>
                <span><i class="fa fa-trophy" style={{ color: "white" }} aria-hidden="true" id="navbarRight"></i></span>
              </a>
              <div className="navbar-dropdown is-right">
                <Link className="navbar-item" to="/nfl">
                  <strong>NFL</strong>
                  </Link>
                <Link className="navbar-item" to="/ncaa">
                  <strong>NCAA Football</strong>
                  </Link>
                <Link className="navbar-item" to="/mlb">
                  <strong>MLB</strong>
                  </Link>
                <Link className="navbar-item" to="/epl">
                 <strong>EPL</strong> 
                  </Link>
                <Link className="navbar-item" to="/laliga">
                 <strong>La Liga</strong> 
                  </Link>
                <Link className="navbar-item" to="/bundesliga">
                  <strong>Bundesliga</strong>
                  </Link>

              </div>
            </div>
          </div>


        </nav>
      </div>
    )

  };
}

export default withRouter(Navbar);
