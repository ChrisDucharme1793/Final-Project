import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Profile.css";
// import Axios from "axios";
import jwt_decode from 'jwt-decode'
import { withRouter } from "react-router-dom";
import PastBetsTable from "../components/PastBetsTable";
import MyBetsTable from "../components/MyBetsTable";



class Profile extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            userName: "",
            balance: "",

        }
    }

//     componentDidMount() {
//         const token = localStorage.getItem("token")
//         const decoded = jwt_decode(token)
//         if (token) {
//             jwt_decode(token);
//         } else { this.props.history.push('/login') }
//         this.setState({
//             _id: decoded._id,
//             email: decoded.email,
//             userName: decoded.userName,
//             balance: decoded.balance,
//         })
//     }


    render() {

        const { state, setState, history } = this.props

        console.log(this.state.balance)

        return (
            <>
                <body>
                    <br></br>
                    < div class="container" id="profileContainer" >
                        <div class="jumbotron text-center shadow p-3 mb-5">
                            <img class="is-center" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" width="128px" height="128px" alt="profileImg"></img>
                            <h2>Username: {this.state.userName}</h2>
                            <h2>Email: {this.state.email}</h2>
                            <h2>Available Funds: $ {this.state.balance}</h2>
                            <Link to="/addBalance"> <button >Add Funds</button></Link>
                        </div>
                    </div >
                    <br></br>

                </body >

                < MyBetsTable />
                < PastBetsTable />
            </>
        );
    };
}

export default withRouter(Profile);
