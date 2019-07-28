import React, { Component } from "react"
import styled, { ThemeProvider } from "styled-components"
import {
  MainContainer,
  DescriptionCTAContainer,
  HeaderCTA,
  DescriptionCTA,
  Spacer,
  ImageOverlay,
} from "./styled-components"
import { Button } from "../../../components"

class About extends Component {
  constructor(props) {
    super(props)
    this.content = this.props.section.content

    this.paragraph1 = this.content[1].data.slice(
      0,
      this.content[1].data.length / 2
    )
    this.paragraph2 = this.content[1].data.slice(
      this.content[1].data.length / 2,
      this.content[1].data.length
    )
  }

  componentDidMount() {}

  renderContent = () => {
    return this.content.map(item => {
      return <p key={item._id}>{item.data}</p>
    })
  }

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <MainContainer id={this.props.id}>
          <HeaderCTA>{this.content[0].data}</HeaderCTA>
          <DescriptionCTAContainer>
            <DescriptionCTA>{this.paragraph1}</DescriptionCTA>
            <DescriptionCTA>{this.paragraph2}</DescriptionCTA>
          </DescriptionCTAContainer>
          <Spacer>
            <ImageOverlay />
            <p>Now you can order online!</p>
            <Button buttonText={"Order Now"} />
          </Spacer>
        </MainContainer>
      </ThemeProvider>
    )
  }
}

export { About }
