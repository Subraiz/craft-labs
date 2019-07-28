import styled from "styled-components"

const NavbarContainer = styled.div`
  width: 100vw;
  color: ${props => props.config.color};
  margin: 0;
  padding-top: ${props => props.config.paddingTop};
  font-family: Helvetica;
  transition: 0.25s linear;
  z-index: 10;
  background-color: ${props => props.config.backgroundColor};
  position: ${props => props.config.position};
  box-shadow: ${props => props.config.boxShadow}
    ${props => props.theme.shadowColor};
  border-bottom: ${props => props.config.borderBottom}
    ${props => props.theme.shadowColor};
  img {
    height: 90px;
  }
`

export { NavbarContainer }
