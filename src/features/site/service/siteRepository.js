export class SiteRepository {
    constructor(url = "") {
        this.urlBase = "https://interview.staging.atresplayer.com";
    }
    createError(response) {
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = "HTTPError";
        return error;
    }
    getAll() {
        return fetch(`${this.urlBase}/sites`)
            .then((response) => response.json())
            .catch((error) => {
                return `${error}`;
            });
    }
    get(id) {
        return fetch(`${this.urlBase}/site/${id}`)
            .then((response) => response.json())
            .catch((error) => {
                return `${error}`;
            });
    }
    post(site) {
        return fetch(`${this.urlBase}/site`, {
            method: "POST",
            body: JSON.stringify(site),
            headers: {
                "content-Type": "application/json",
            },
        })
            .then((response) => {
                return response.json();
            })
            .catch((error) => {
                return `${error}`;
            });
    }
    put(id, site) {
        return fetch(`${this.urlBase}/site/${id}`, {
            method: "PUT",
            body: JSON.stringify(site),
            headers: {
                "content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .catch((error) => {
                return `${error}`;
            });
    }
    delete(id) {
        return fetch(`${this.urlBase}/site/${id}`, {
            method: "DELETE",
            headers: {
                "content-Type": "application/json",
            },
        })
            .then((response) => {
                return response.json();
            })
            .catch((error) => {
                return `${error}`;
            });
    }
}
