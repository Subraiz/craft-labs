const axios = require("axios")

let websiteID = process.env.website
//websiteID = "5d3cf88a45484b9000c4caa5"
const WEBSITE_API = `http://127.0.0.1:3000/website/${websiteID}`

exports.createPages = async ({ actions: { createPage } }) => {
  let response = await axios.get(WEBSITE_API).catch(err => console.log(err))
  const website = response.data
  let themePackPath = `./src/themes/${website.type.toLowerCase()}/${website.theme
    .split("-")[0]
    .toLowerCase()}/${website.theme.toLowerCase()}`
  website.pages.forEach((page, index) => {
    if (index === 0) {
      createPage({
        path: `/`,
        component: require.resolve(themePackPath),
        context: { website },
      })
    } else {
      createPage({
        path: `/${page.name}`,
        component: require.resolve(themePackPath),
        context: { website },
      })
    }
  })
}
