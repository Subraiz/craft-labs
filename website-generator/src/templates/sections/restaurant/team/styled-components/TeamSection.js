import styled from "styled-components"

const TeamSection = styled.div`
  background-color: ${props => props.theme.secondaryBGColor};
  padding: 7vh 0;
`

TeamSection.defaultProps = {
  theme: {
    secondaryBGColor: "#f7f7f7",
  },
}

export { TeamSection }
