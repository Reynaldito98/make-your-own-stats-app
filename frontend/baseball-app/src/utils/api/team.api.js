import { checkResponse, headers } from "./utils.js";

const getTeams = () => {
    return fetch('/api/team', {
        headers: headers
    }).then(checkResponse)
}

const createTeam = (name, logo) => {
    return fetch('api/team', {
        method: 'POST',
        body: JSON.stringify({name, logo}),
        headers: headers,
    }).then(checkResponse)
}

const updateTeam = (id, name, logo, wins, losses) => {
    return fetch(`api/team/${id}`, {
        method: 'PUT',
        body: JSON.stringify({name, logo, wins, losses}),
        headers: headers
    }).then(checkResponse)
}

export {getTeams, createTeam, updateTeam}