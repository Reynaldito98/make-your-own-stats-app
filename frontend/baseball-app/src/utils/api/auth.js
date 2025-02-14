import { checkResponse } from "./utils.js";

const registerUser = (username, email, password) => {
    return fetch('https://make-your-own-stats-app-back.vercel.app/api/signup', {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({username, email, password})
    }).then(checkResponse)
}

const loginUser = (email, password) => {
    return fetch('https://make-your-own-stats-app-back.vercel.app/api/signin', {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password})
    }).then(checkResponse)
}

export {registerUser, loginUser};