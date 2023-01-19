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
}
