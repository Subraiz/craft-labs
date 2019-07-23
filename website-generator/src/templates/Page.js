import React, { Component } from "react"
import { RestaurantNavbar1 } from "../components/navbars"
import { RestaurantPage1, Home, About } from "../components/pages"

const Components = {
  home: Home,
  about: About,
}

class Website extends Component {
  constructor(props) {
    super(props)
    this.website = this.props.pageContext.website
    let path = this.props.path
    this.page = this.website.pages.find(
      obj => obj.name.toLowerCase() === path.slice(1).toLowerCase()
    )
    if (this.page === undefined) {
      this.page = this.website.pages[0]
    }
  }

  renderPage = () => {
    console.log(this.page.name)
    let Page = Components[this.page.name.toLowerCase()]
    return <Page page={this.page} />
  }

  render() {
    return (
      <div>
        <RestaurantNavbar1
          pages={this.website.pages}
          currentPage={this.page.name}
        />
        {this.renderPage()}
      </div>
    )
  }
}

function capitalizeString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default Website
