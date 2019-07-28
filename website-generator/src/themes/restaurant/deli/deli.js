import React, { Component } from "react"
import { light } from "./themes"
import styles from "./styles.module.scss"
import { SingleClassicNavbar } from "../../../templates/navbars"
import { Footer } from "../../../templates/footers"
import Page from "../../../templates/page"

const Navbars = {
  singleclassicnavbar: SingleClassicNavbar,
}

const Themes = {
  light: light,
}

// Deli - Dark Theme -- Single Page Website -- Two pages for testing purposes
class Theme extends Component {
  constructor(props) {
    super(props)
    // Grab the website off the page context we get from create pages in gatsby-node.js
    this.website = this.props.pageContext.website

    // Specify which page we are rendering
    let path = this.props.path
    this.page = this.website.pages.find(
      obj => obj.name.toLowerCase() === path.slice(1).toLowerCase()
    )
    if (this.page === undefined) {
      this.page = this.website.pages[0]
    }

    // Specify the theme the website will use
    this.theme = Themes[this.website.theme.split("-")[1]]
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
          theme={this.theme}
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

export default Theme
