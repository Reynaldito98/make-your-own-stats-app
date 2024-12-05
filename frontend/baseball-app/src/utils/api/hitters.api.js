import { checkResponse, headers } from "./utils.js";

const getHitters = () => {
    return fetch(`/api/hitter`, {
        headers: headers
    }).then(checkResponse)
}

const createHitter = (name, position, imageUrl) => {
    return fetch(`/api/hitter`, {
        method: 'POST',
        body: JSON.stringify({name, position, imageUrl}),
        headers: headers
    })
}

const updateHitter = (id, ab, h, hr, rbi, sb, cs, doubles, triples, r) => {
    return fetch(`/api/hitter/${id}`, {
        method: 'PUT',
        body: JSON.stringify({AB: Number(ab), H: Number(h), HR: Number(hr), RBI: Number(rbi), SB: Number(sb), CS: Number(cs), Doubles: Number(doubles), Triples: Number(triples), R: Number(r)}),
        headers: headers
    })
}

const deleteHitter = id => {
    return fetch(`/api/hitter/${id}`, {
        method: 'DELETE',
        headers: headers
    })
}

export {createHitter, getHitters, deleteHitter, updateHitter};