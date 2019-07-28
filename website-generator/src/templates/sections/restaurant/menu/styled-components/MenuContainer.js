import styled from "styled-components"

const MenuContainer = styled.div`
  background-color: ${props => props.theme.bgColor};
`

MenuContainer.defaultProps = {
  theme: {
    bgColor: "white",
  },
}

export { MenuContainer }
