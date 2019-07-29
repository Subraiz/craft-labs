import styled from "styled-components"

const MenuSection = styled.div`
  padding: 4vh 10vw;
  min-height: 600px;
  background-color: ${props => props.theme.bgColor};
`

MenuSection.defaultProps = {
  theme: {
    bgColor: "white",
  },
}

export { MenuSection }
