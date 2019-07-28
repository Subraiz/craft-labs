const axios = require("axios")

let websiteID = process.env.website
websiteID = "5d3d41d92cebb40441f869dd"
const WEBSITE_API = `http://127.0.0.1:3000/website/${websiteID}`

exports.createPages = async ({ actions: { createPage } }) => {
  // Fetch website data
  let response = await axios.get(WEBSITE_API).catch(err => console.log(err))
  const website = response.data

  // Get the proper website template based on the theme and website type
  const themePack = website.theme.split("-")[0].toLowerCase()
  let themePackPath = `./src/themes/${website.type.toLowerCase()}/${themePack}/${themePack}`

  // Create each page
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
