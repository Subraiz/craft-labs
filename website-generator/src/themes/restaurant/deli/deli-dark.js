import React, { Component } from "react"
import { SingleClassicNavbar } from "../../../templates/navbars"
import { Footer } from "../../../templates/footers"
import Page from "../../../templates/page"
import styles from "./styles.module.scss"

const Navbars = {
  singleclassicnavbar: SingleClassicNavbar,
}

// Deli - Dark Theme -- Single Page Website -- Two pages for testing purposes
class Theme extends Component {
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

    this.state = {
      readyToRender: false,
    }
  }

  componentDidMount() {
    this.setState({ readyToRender: true })
  }

  renderNavbar = () => {
    if (this.state.readyToRender) {
      let Navbar = Navbars[this.website.navbar.toLowerCase()]
      return <Navbar sections={this.website.pages[0].sections} />
    }
  }

  renderPage = () => {
    if (this.state.readyToRender) {
      return (
        <Page
          page={this.page}
          websiteType={this.website.type}
          website={this.website}
        />
      )
    }
  }

  renderFooter = () => {
    return <Footer companyName={this.website.companyInformation.title.value} />
  }

  render() {
    return (
      <div>
        {this.renderNavbar()}
        {this.renderPage()}
        {this.renderFooter()}
      </div>
    )
  }
}

function capitalizeString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default Theme
