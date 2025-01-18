import { checkResponse, headers } from "./utils.js";

const getPitchers = (token) => {
    return fetch('https://make-your-own-stats-app-back.vercel.app/api/pitcher', {
            headers: headers(token)
        }).then(checkResponse)
}

const createPitcher = (name, position, imageUrl, token) => {
    return fetch('https://make-your-own-stats-app-back.vercel.app/api/pitcher', {
        method: 'POST',
        body: JSON.stringify({name, position, imageUrl}),
        headers: headers(token)
    }).then(checkResponse)
}

const updatePitcher = (id, ip, er, k, bb, w, l, sv, token) => {
    return fetch(`https://make-your-own-stats-app-back.vercel.app/api/pitcher/${id}`, {
        method: 'PUT',
        body: JSON.stringify({IP: Number(ip), ER: Number(er), K: Number(k), BB: Number(bb), W: Number(w), L: Number(l), SV: Number(sv)}),
        headers: headers(token),
    }).then(checkResponse)
}

const deletePitcher = (id, token) => {
    return fetch(`https://make-your-own-stats-app-back.vercel.app/api/pitcher/${id}`, {
        method: 'DELETE',
        headers: headers(token)
    }).then(checkResponse)
}

export {getPitchers, createPitcher, updatePitcher, deletePitcher}