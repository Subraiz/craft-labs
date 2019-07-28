import styled from "styled-components"

const Overlay = styled.div`
  position: absolute;
  background-color: ${props => props.theme.overlayColor};
  opacity: 0.6;
  background-image: url("https://www.transparenttextures.com/patterns/black-mamba.png");
  width: 100%;
  height: 100%;
  z-index: 1;
`

Overlay.defaultProps = {
  theme: {
    overlayColor: "slategrey",
  },
}

export { Overlay }
