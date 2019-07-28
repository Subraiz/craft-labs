import styled, { keyframes } from "styled-components"

const ScrollNavbarContainer = styled.div`
  width: 100vw;
  margin: 0;
  position: absolute;
  font-family: Helvetica;
  background-color: white;
  transition: 0.25s linear;
  position: fixed;
  z-index: 10;
  animation: ${props => props.animation} 1s linear;
  img {
    height: 60px;
  }
`

export { ScrollNavbarContainer }
