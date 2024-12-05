import { checkResponse, headers } from "./utils.js";

const getPitchers = () => {
    return fetch('/api/pitcher', {
            headers: headers
        }).then(checkResponse)
}

const createPitcher = (name, position, imageUrl) => {
    return fetch('/api/pitcher', {
        method: 'POST',
        body: JSON.stringify({name, position, imageUrl}),
        headers: headers
    }).then(checkResponse)
}

const updatePitcher = (id, ip, er, k, bb, w, l, sv) => {
    return fetch(`/api/pitcher/${id}`, {
        method: 'PUT',
        body: JSON.stringify({IP: Number(ip), ER: Number(er), K: Number(k), BB: Number(bb), W: Number(w), L: Number(l), SV: Number(sv)}),
        headers: headers
    }).then(checkResponse)
}

const deletePitcher = id => {
    return fetch(`/api/pitcher/${id}`, {
        method: 'DELETE',
        headers: headers
    }).then(checkResponse)
}

export {getPitchers, createPitcher, updatePitcher, deletePitcher}