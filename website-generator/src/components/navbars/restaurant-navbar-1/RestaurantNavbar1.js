import React, { Component } from "react"
import { Link } from "gatsby"
import styles from "./styles.module.scss"

class RestaurantNavbar1 extends Component {
  constructor(props) {
    super(props)
    let { pages } = this.props
    this.state = {
      pages: pages,
    }
  }

  renderPages = () => {
    return this.state.pages.map((page, index) => {
      if (window.location.pathname === "/" && index === 0) {
        return (
          <Link
            to={`/`}
            className={[styles.navbarItem, styles.activeNavbarItem].join(" ")}
            key={page.name}
          >
            <p>{capitalizeString(page.name)}</p>
          </Link>
        )
      } else if (window.location.pathname === "/" + page.name) {
        return (
          <Link
            to={`/${page.name}`}
            className={[styles.navbarItem, styles.activeNavbarItem].join(" ")}
            key={page.name}
          >
            <p>{capitalizeString(page.name)}</p>
          </Link>
        )
      } else {
        let link = this.state.pages[0].name == page.name ? `/` : `/${page.name}`
        return (
          <Link to={link} className={styles.navbarItem} key={page.name}>
            <p>{capitalizeString(page.name)}</p>
          </Link>
        )
      }
    })
  }

  render() {
    return <div className={styles.navbarContainer}>{this.renderPages()}</div>
  }
}

function capitalizeString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export { RestaurantNavbar1 }
