import styled from "styled-components"

const ImageOverlay = styled.div`
  background-attachment: fixed;
  background-color: ${props => props.theme.overlayColor};
  height: 100%;
  width: 100%;
  opacity: 0.7;
  background-image: url("https://www.transparenttextures.com/patterns/black-mamba.png");
  position: absolute;
`

ImageOverlay.defaultProps = {
  theme: {
    overlayColor: "black",
  },
}

export { ImageOverlay }
