import React, { Component } from "react"
import { Link } from "gatsby"
import styles from "./styles.module.scss"

class SingleClassicNavbar extends Component {
  constructor(props) {
    super(props)
    let { sections } = this.props
    this.navbar = React.createRef()
    this.navbarItems = React.createRef()
    this.state = {
      sections: sections,
      renderReady: false,
      selectedNavbarItemIndex: 0,
      navbarContainerStyle: styles.navbarContainer,
    }
  }

  // Tell the component it is ready to render the navbar
  componentDidMount() {
    this.setState({ renderReady: true })
    window.addEventListener("scroll", this.handleScroll)

    let sectionContainers = [].slice.call(
      this.navbar.current.nextElementSibling.children
    )

    this.sectionScrollSpan = []
    let totalScrollHeight = 0
    sectionContainers.forEach((container, index) => {
      totalScrollHeight =
        index == 0
          ? 0
          : totalScrollHeight + container.clientHeight + window.innerHeight / 4
      this.sectionScrollSpan.push(totalScrollHeight)
    })
  }

  // Handle changing styling on scroll event
  handleScroll = event => {
    if (this.state.renderReady) {
      const navbar = this.navbar.current

      // Change the style of the navbar
      let navbarScrollHeight = navbar.scrollHeight / 1.5
      let scrollDistance = window.pageYOffset
      if (scrollDistance - navbarScrollHeight > 0) {
        // Check to see if style is already applied or not, we do not want to keep
        // applying the style on every scroll.
        if (this.state.navbarContainerStyle != styles.scrollNavbarContainer) {
          this.setState({
            navbarContainerStyle: styles.scrollNavbarContainer,
          })
        }
      } else {
        if (this.state.navbarContainerStyle != styles.navbarContainer) {
          this.setState({
            navbarContainerStyle: styles.navbarContainer,
          })
        }
      }
      // Handle selecting proper navbar item on scroll
      if (this.sectionScrollSpan.length > 1) {
        setTimeout(() => {
          this.sectionScrollSpan.some((span, index) => {
            if (
              index == 0 &&
              scrollDistance < this.sectionScrollSpan[index + 1] + span
            ) {
              this.setState({ selectedNavbarItemIndex: index })
              return true
            } else if (
              index < this.sectionScrollSpan.length - 1 &&
              scrollDistance < span &&
              scrollDistance < this.sectionScrollSpan[index + 1]
            ) {
              this.setState({ selectedNavbarItemIndex: index })
              return true
            } else if (
              index == this.sectionScrollSpan.length - 1 &&
              scrollDistance > this.sectionScrollSpan[index - 1]
            ) {
              this.setState({ selectedNavbarItemIndex: index })
              return true
            }
          })
        }, 150)
      }
    }
  }

  // Handle toggling the navbar items
  toggleActiveItem = event => {
    if (this.state.renderReady) {
      // Convert HTML collection into an array of children

      let navbarItems = [].slice.call(this.navbarItems.current.children)
      let clickedNavbarItem = event.currentTarget
      let clickedIndex = navbarItems.indexOf(clickedNavbarItem)
      this.setState({ selectedNavbarItemIndex: clickedIndex })

      // Handle scrolling to specific section
      let scrollDistance =
        clickedIndex == 0
          ? 0
          : this.sectionScrollSpan[clickedIndex - 1] +
            this.sectionScrollSpan[clickedIndex] +
            window.innerHeight / 5
      window.scrollTo({
        top: scrollDistance,
        behavior: "smooth",
      })
    }
  }

  // Render all the sections for the navbar
  renderNavigation = () => {
    if (this.state.renderReady) {
      return this.state.sections.map((section, index) => {
        let activeStyle =
          index == this.state.selectedNavbarItemIndex
            ? styles.activeNavbarItem
            : styles.inactive
        return (
          <a
            data-index={index}
            key={section.name}
            onClick={this.toggleActiveItem}
          >
            <p className={[styles.navbarItem, activeStyle].join(" ")}>
              {capitalizeString(section.name)}
            </p>
          </a>
        )
      })
    }
  }

  render() {
    return (
      <div className={this.state.navbarContainerStyle} ref={this.navbar}>
        <div className={styles.navbarMainContainer}>
          <img
            src="https://cdn.freebiesupply.com/images/large/2x/philadelphia-eagles-logo-black-and-white.png"
            className={styles.navbarLogo}
          />
          <div className={styles.navbarItemsContainer} ref={this.navbarItems}>
            {this.renderNavigation()}
          </div>
        </div>
      </div>
    )
  }
}

function capitalizeString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export { SingleClassicNavbar }
