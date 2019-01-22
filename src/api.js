const url = {
    local: "http://lvh.me:4500",
    dev: "https://pvosoby5yl.execute-api.us-east-2.amazonaws.com/dev",
    prod: "https://o467nl9wi3.execute-api.us-east-2.amazonaws.com/prod"
};



function Client() {
    let base;
    switch(process.env.GATSBY_ENV) {
        case "local": base = url.local; break;
        case "dev": base  = url.dev; break;
        case "prod": base  = url.prod; break;
        default:
            throw Error("Unknown GATSBY_ENV " + process.env.GATSBY_ENV);
    }
    this.basePath = base;
    console.log(this.basePath + "  " + process.env.GATSBY_ENV);
};

Client.prototype.call = function (path) {
    const url = this.basePath + path;
    console.log("calling " + url);
    return fetch(url);
}

Client.prototype.getLocations = function (campus) {
    if (campus === undefined) {
        throw Error("No campus defined for locations");
    }
    const path = `/campuses/${campus}/locations`;
    return this.call(path);
};

Client.prototype.getLocationsWithDeals = function (campus) {
    if (campus === undefined) {
        throw Error("No campus defined for locations & deals");
    }
    const path = `/campuses/${campus}/locations?expand=deals`;
    return this.call(path);
};

Client.prototype.getDeals = function (id) {
    if (id === undefined) {
        throw Error("No location id for deals");
    }
    const path = `/locations/${id}/deals`;
    return this.call(path);
};

Client.prototype.sendData = function (value) {
    const data = {
        timestamp: Date.now().toString(),
        search_term: value
    };

    const path = this.basePath + "/analytics";
    console.log("analytics path " + path);
    const options = {
        method: "post",
        body: JSON.stringify(data)
    };
    return fetch(path, options);
};

module.exports = Client;

