import React, { Component } from "react"

class About extends Component {
  render() {
    console.log(this.props.page.sections)
    return (
      <div>
        <h1>About</h1>
      </div>
    )
  }
}

export { About }
