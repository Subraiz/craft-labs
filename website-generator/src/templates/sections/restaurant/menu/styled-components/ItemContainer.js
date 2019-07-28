import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
  0% {
    transform: scale(.2);
    opacity: 0;
  },
  100% {
    transform: scale(1);
    opacity: 1;
  }
`

const ItemContainer = styled.div`
  margin: 0 20px 15px 5px;
  transition: 0.2s linear;
  transform: ${props => props.config.scale};
  opacity: ${props => props.config.opacity};
  -webkit-animation-fill-mode: forwards;
`

export { ItemContainer }
