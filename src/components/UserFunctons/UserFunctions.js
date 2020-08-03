import axios from 'axios'

export const register = newUser => {
    return axios
        .post('API/users/register', {
            userName: newUser.userName,
            email: newUser.email,
            password: newUser.password,
            balance: newUser.balance,
        })


}

export const login = user => {
    return axios
        .get('/signin', {
            email: user.email,
            password: user.password
        })


}

// export const updateBalance = user => {
//     return axios
//         .put('http://localhost:8080/users/updateBalance/' + this., {
//             balance: user.balance
//         })
// }

