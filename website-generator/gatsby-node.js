const axios = require("axios")

let websiteID = process.env.website
//websiteID = "5d3714b7cf7ad7390a7b0ead"
const WEBSITE_API = `http://127.0.0.1:3000/website/${websiteID}`

exports.createPages = async ({ actions: { createPage } }) => {
  let response = await axios.get(WEBSITE_API).catch(err => console.log(err))
  const website = response.data

  website.pages.forEach((page, index) => {
    if (index === 0) {
      createPage({
        path: `/`,
        component: require.resolve("./src/templates/Page.js"),
        context: { website },
      })
    } else {
      createPage({
        path: `/${page.name}`,
        component: require.resolve("./src/templates/Page.js"),
        context: { website },
      })
    }
  })
}
