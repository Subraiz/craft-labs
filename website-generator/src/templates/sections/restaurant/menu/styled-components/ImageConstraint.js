import styled from "styled-components"

const ImageConstraint = styled.div`
  width: 225px;
  height: 125px;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 2px 4px 12px 4px ${props => props.theme.shadowColor};
  position: relative;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
`

ImageConstraint.defaultProps = {
  theme: {
    shadowColor: "rbga(0,0,0,.06)",
  },
}

export { ImageConstraint }
