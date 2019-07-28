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

  @media (max-width: 414px) {
    background-color: white;
    position: fixed;
    height: 30px;
    padding-top: 20px;
    img {
      height: 40px;
      margin-left: 75vw;
      margin-top: -12px;
    }
  }
`

export { NavbarContainer }
