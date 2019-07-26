import React, { Component } from "react"
import {
  Parallax,
  MainContainer,
  ContentContainer,
  ImageOverlay,
  HeaderCTA,
  DescriptionCTA,
} from "./styled-components"
import { OutlineButton } from "../../../components"

class Splash extends Component {
  constructor(props) {
    super(props)
    this.content = this.props.section.content
  }

  render() {
    return (
      <MainContainer id={this.props.id}>
        <Parallax>
          <ImageOverlay />
        </Parallax>
        <ContentContainer>
          <HeaderCTA>{this.content[0].data}</HeaderCTA>
          <DescriptionCTA>{this.content[1].data}</DescriptionCTA>
          <OutlineButton buttonText={"Order Now"} hoverColor={""} />
        </ContentContainer>
      </MainContainer>
    )
  }
}

export { Splash }
