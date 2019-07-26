import React, { Component } from "react"

class Page extends Component {
  constructor(props) {
    super(props)
    this.page = this.props.page
    this.sections = this.page.sections
    this.sectionType = require(`../sections/${this.props.websiteType.toLowerCase()}`)
  }

  renderSections = () => {
    return this.sections.map((section, index) => {
      let Section = this.sectionType[section.type.toLowerCase()]
      return (
        <Section
          key={index}
          section={section}
          id={section.name.replace(/\s/g, "")}
        />
      )
    })
  }

  render() {
    return <div>{this.renderSections()}</div>
  }
}

export default Page
