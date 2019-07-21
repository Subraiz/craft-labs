const axios = require("axios")

let websiteID = process.env.website
const WEBSITE_API = `http://127.0.0.1:3000/website/${websiteID}`

exports.createPages = async ({ actions: { createPage } }) => {
  let response = await axios.get(WEBSITE_API).catch(err => console.log(err))
  const website = response.data

  createPage({
    path: `/`,
    component: require.resolve("./src/templates/website.js"),
    context: { website },
  })
}
