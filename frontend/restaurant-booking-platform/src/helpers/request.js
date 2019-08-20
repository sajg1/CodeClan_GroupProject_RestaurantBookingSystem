class Request {
  get(url) {
    return fetch(url)
    .then((res) => res.json());
  }

  post(url, payload) {
    return fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then((res) => res.json());
  }

  delete(url) {
    return fetch(url, {
      method: "DELETE",
      headers: {'Content-Type': 'application/json'}
    })
    .then((res) => res.json())
  }
}



export default Request;
