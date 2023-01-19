export class SiteRepository {
    constructor(url = "") {
        this.urlBase = "https://interview.staging.atresplayer.com/sites";
    }
    createError(response) {
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = "HTTPError";
        return error;
    }
    getAll() {
        return fetch(`${this.urlBase}`)
            .then((response) => response.json())
            .catch((error) => {
                return `${error}`;
            });
    }
    get(id) {
        return fetch(`${this.urlBase}/${id}`)
            .then((response) => response.json())
            .catch((error) => {
                return `${error}`;
            });
    }
    post(site) {
        return fetch(`${this.urlBase}/`, {
            method: "POST",
            body: JSON.stringify(site),
        })
            .then((response) => response.json())
            .catch((error) => {
                return `${error}`;
            });
    }
    put(id, site) {
        return fetch(`${this.urlBase}/${id}`, {
            method: "PUT",
            body: JSON.stringify(site),
        })
            .then((response) => response.json())
            .catch((error) => {
                return `${error}`;
            });
    }
    delete(id) {
        return fetch(`${this.urlBase}/${id}`, {
            method: "DELETE",
        })
            .then((response) => {
                return response.json();
            })
            .catch((error) => {
                return `${error}`;
            });
    }
}
