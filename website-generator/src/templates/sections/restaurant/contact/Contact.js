import React, { Component } from "react"
import styled from "styled-components"
import {
  ContactContainer,
  Overlay,
  Logo,
  Address,
  Phone,
  Email,
  SocialMedia,
  Icon,
} from "./styled-components"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SocialIcons = {
  facebook: faFacebook,
  instagram: faInstagram,
}

class Contact extends Component {
  constructor(props) {
    super(props)

    this.content = this.props.section.content
    this.logo = this.content[0].data
    this.address = this.content[1].data
    this.email = this.content[2].data
    this.phone = this.content[3].data
    this.social = this.content[4].data
  }

  LogoContainer = styled(Logo)`
    background-image: ${this.logo};
  `

  renderSocialMedia = () => {
    return Object.keys(this.social).map((social, index) => {
      let icon = SocialIcons[social]
      let link = this.social[social]
      return (
        <a href={link} target="_blank" key={index}>
          <Icon>
            <FontAwesomeIcon icon={icon} size="2x" />
          </Icon>
        </a>
      )
    })
  }

  render() {
    return (
      <div>
        <ContactContainer>
          <Overlay />
          <Logo />
          <Address>{this.address}</Address>
          <Email>
            <a href={`mailto:${this.email}`}>{this.email}</a>
          </Email>
          <Phone>
            <a href={`tel:${this.phone}`}>{this.phone}</a>
          </Phone>
          <SocialMedia>{this.renderSocialMedia()}</SocialMedia>
        </ContactContainer>
      </div>
    )
  }
}

export { Contact }
