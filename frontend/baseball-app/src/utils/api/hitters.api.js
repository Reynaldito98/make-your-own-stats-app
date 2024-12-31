import { checkResponse, headers } from "./utils.js";

const getHitters = (token) => {
    return fetch(`/api/hitter`, {
        headers: headers(token)
    }).then(checkResponse)
}

const createHitter = (name, position, imageUrl, token) => {
    return fetch(`/api/hitter`, {
        method: 'POST',
        body: JSON.stringify({name, position, imageUrl}),
        headers: headers(token)
    }).then(checkResponse)
}

const updateHitter = (id, ab, h, hr, rbi, sb, cs, doubles, triples, r, token) => {
    return fetch(`/api/hitter/${id}`, {
        method: 'PUT',
        body: JSON.stringify({AB: Number(ab), H: Number(h), HR: Number(hr), RBI: Number(rbi), SB: Number(sb), CS: Number(cs), Doubles: Number(doubles), Triples: Number(triples), R: Number(r)}),
        headers: headers(token)
    }).then(checkResponse)
}

const deleteHitter = (id, token) => {
    return fetch(`/api/hitter/${id}`, {
        method: 'DELETE',
        headers: headers(token)
    }).then(checkResponse)
}

export {createHitter, getHitters, deleteHitter, updateHitter};