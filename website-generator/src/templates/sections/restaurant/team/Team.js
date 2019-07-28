import React, { Component } from "react"
import Swiper from "react-id-swiper"
import styled from "styled-components"
import "react-id-swiper/lib/styles/css/swiper.css"
import {
  TeamCardTemplate,
  TeamContainer,
  CardOverlayTemplate,
  NameTemplate,
  DescriptionTemplate,
  HeaderCTA,
} from "./styled-components"

const params = {
  slidesPerView: 3,
  spaceBetween: 20,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    left: 0,
  },
}

const CardOverlay = styled(CardOverlayTemplate)`
  ${TeamCardTemplate}:hover & {
    opacity: 1;
  }
`
const Name = styled(NameTemplate)`
  ${TeamCardTemplate}:hover & {
    font-size: 18px;
    opacity: 1;
    bottom: 45px;
  }
`
const Description = styled(DescriptionTemplate)`
  ${TeamCardTemplate}:hover & {
    font-size: 14px;
    opacity: 1;
    bottom: 25px;
  }
`

class Team extends Component {
  constructor(props) {
    super(props)

    this.title = this.props.section.content[0].data
    this.team = this.props.section.content.slice(1)
  }

  renderTeamCards = () => {
    return this.team.map((member, index) => {
      const TeamCard = styled(TeamCardTemplate)`
        background-image: url(${member.data.img});
      `
      return (
        <TeamCard key={index}>
          <CardOverlay />
          <Name>{member.data.name}</Name>
          <Description>{member.data.description}</Description>
        </TeamCard>
      )
    })
  }

  render() {
    return (
      <div>
        <HeaderCTA>{this.title}</HeaderCTA>
        <TeamContainer>
          <Swiper {...params}>{this.renderTeamCards()}</Swiper>
        </TeamContainer>
      </div>
    )
  }
}

export { Team }
