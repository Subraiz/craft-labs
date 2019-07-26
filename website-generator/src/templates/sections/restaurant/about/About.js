import React, { Component } from "react"

class About extends Component {
  constructor(props) {
    super(props)
    this.content = this.props.section.content
  }

  renderContent = () => {
    return this.content.map(item => {
      return <p key={item._id}>{item.data}</p>
    })
  }

  render() {
    return (
      <div id={this.props.id}>
        <p>{this.content[0].data}</p>
        <p>{this.content[1].data}</p>
      </div>
    )
  }
}

export { About }
