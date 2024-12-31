const checkResponse = (res) => {
    if(res.ok) {
        return res.json();
    } else {
        return Promise.reject(`Error: ${res.status}`);
    }
}

const headers = (token) => {
    return {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`
    }
}

export {checkResponse, headers};