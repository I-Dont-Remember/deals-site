/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
//
const axios = require("axios");
const process = require("process");
const url = {
    local: "http://lvh.me:4500",
    dev: "https://pvosoby5yl.execute-api.us-east-2.amazonaws.com/dev",
    prod: "https://o467nl9wi3.execute-api.us-east-2.amazonaws.com/prod"
};

let basePath;

switch(process.env.GATSBY_ENV) {
    case "local": basePath = url.local; break;
    case "dev": basePath = url.dev; break;
    case "prod": basePath = url.prod; break;
    default:
        throw Error("Unknown GATSBY_ENV " + process.env.GATSBY_ENV);
}

console.log("[*] using url " + basePath + " for env " + process.env.GATSBY_ENV);

const get = path => axios.get(`${basePath}${path}`);

const getLocationData = () => {
    return get("/campuses/uw-madison/locations?expand=deals");
};

exports.createPages = async ({ actions: { createPage} }) => {
    const { data: locations } = await getLocationData();
    console.log(locations);
    locations.forEach(location => {
        createPage({
            path: `/${location.id}`,
            component: require.resolve("./src/templates/location.js"),
            context: { location }
        });
    });
};
