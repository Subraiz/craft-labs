import React, { Component } from "react"
import {} from "./styled-components"

class Menu extends Component {
  constructor(props) {
    super(props)
    this.categories = this.props.section.content[0]
    this.menu = this.props.section.content.slice(1)
  }

  render() {
    return (
      <div>
        <h3>Menu Section</h3>
      </div>
    )
  }
}

export { Menu }
