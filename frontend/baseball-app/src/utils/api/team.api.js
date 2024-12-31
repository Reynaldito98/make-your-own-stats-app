import { checkResponse, headers } from "./utils.js";

const getTeams = (token) => {
    return fetch('/api/team', {
        headers: headers(token)
    }).then(checkResponse)
}

const createTeam = (name, logo, token) => {
    return fetch('api/team', {
        method: 'POST',
        body: JSON.stringify({name, logo}),
        headers: headers(token)
    }).then(checkResponse)
}

const updateTeam = (id, name, logo, wins, losses, token) => {
    return fetch(`api/team/${id}`, {
        method: 'PUT',
        body: JSON.stringify({name, logo, wins, losses}),
        headers: headers(token)
    }).then(checkResponse)
}

export {getTeams, createTeam, updateTeam}