const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, actions }) => {
    const ymlType = "DataYaml";
    if (node.internal.type == ymlType) {
        const slug = createFilePath({ node, getNode, basePath: `data`});
        console.log("Created slug path " + slug);
        actions.createNodeField({
            node,
            name: `slug`,
            value: slug
        })
    }
}

exports.createPages = ({ graphql, actions }) => {
    return graphql(`
    {
        allDataYaml {
            edges {
                node {
                    fields {
                        slug
                    }
                }
            }
        }
    }
    `
    ).then(result => {
        result.data.allDataYaml.edges.forEach(({ node }) => {
            actions.createPage({
                path: node.fields.slug,
                component: path.resolve(`./src/templates/location.js`),
                context: {
                    slug: node.fields.slug
                }
            })
        })
    })
    
}