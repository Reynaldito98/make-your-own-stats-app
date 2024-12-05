const checkResponse = (res) => {
    if(res.ok) {
        return res.json();
    } else {
        return Promise.reject(`Error: ${res.status}`);
    }
}

const headers = {
    'Content-Type': 'application/json'
}

export {checkResponse, headers};