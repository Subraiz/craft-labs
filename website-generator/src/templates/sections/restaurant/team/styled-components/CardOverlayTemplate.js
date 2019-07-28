import styled from "styled-components"

const CardOverlayTemplate = styled.div`
  position: absolute;
  width: 100%;
  margin: -175px 0;
  height: 100%;
  background-color: ${props => props.theme.transparentOverlayColor};
  opacity: 0;
  transition: 0.2s linear;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
`

CardOverlayTemplate.defaultProps = {
  theme: {
    transparentOverlayColor: "rgba(0,0,0,.4)",
  },
}

export { CardOverlayTemplate }
