import axios from "axios";

export default {


    apifootballcall: function () {


        return axios({
            "method": "GET",
            "url": "https://api-football-v1.p.rapidapi.com/v2/fixtures/league/524/next/10",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                "x-rapidapi-key": "757f58322bmsh6b43a333b27dafep1ce363jsn5d5948e8b233",
                "useQueryString": true
            }, "params": {
                "timezone": "Europe/London"
            }
        })
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    },
    getnext15gamesbyleague: function () {
        return axios.get("https://api-football-v1.p.rapidapi.com/v2/fixtures/league/524/next/757f58322bmsh6b43a333b27dafep1ce363jsn5d5948e8b233");

    },

    getNFLoddsapi: function () {
        return axios.get("https://api.the-odds-api.com/v3/odds/?apiKey=1c9c9697e1c01c7b5a8668d184467046&sport=americanfootball_nfl&region=us&mkt=spreads");
    },

    getNCAAoddsapi: function () {
        return axios.get("https://api.the-odds-api.com/v3/odds/?apiKey=1c9c9697e1c01c7b5a8668d184467046&sport=americanfootball_ncaaf&region=us&mkt=spreads");
    },

    getMLBoddsapi: function () {
        return axios.get("https://api.the-odds-api.com/v3/odds/?apiKey=1c9c9697e1c01c7b5a8668d184467046&sport=baseball_mlb&region=us&mkt=spreads");
    },

    getEPLoddsapi: function () {
        return axios.get("https://api.the-odds-api.com/v3/odds/?apiKey=1c9c9697e1c01c7b5a8668d184467046&sport=soccer_epl&region=us&mkt=spreads");
    },

    getLALIGAoddsapi: function () {
        return axios.get("https://api.the-odds-api.com/v3/odds/?apiKey=1c9c9697e1c01c7b5a8668d184467046&sport=soccer_spain_la_liga&region=us&mkt=spreads");
    },

    getGERModdsapi: function () {
        return axios.get("https://api.the-odds-api.com/v3/odds/?apiKey=e8e0053776c83a4e81a9dbe5850b45ed&sport=soccer_germany_bundesliga&region=us&mkt=spreads");
    },

    getoddsapi: function () {
        return axios.get("https://api.the-odds-api.com/v3/odds/?apiKey=e8e0053776c83a4e81a9dbe5850b45ed&sport=soccer_epl&region=us&mkt=spreads");
    },

    signUp: function (user) {
        return axios.post("/api/auth/signup", user);
    },

    signIn: function (user) {
        return axios.post("/api/auth/signin", user);
    },

    signOut: function () {
        return axios.get("api/auth/signout");
    },

    getBraintreeClientToken: function (userId, token) {
        return axios.get(`api/braintree/getToken/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    },


};
