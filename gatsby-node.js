/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
//

const axios = require("axios");
const basePath = "http://localhost:4500"
const get = path => axios.get(`${basePath}${path}`);

const getLocationData = () => {
    return get("/campuses/uw-madison/locations");
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
