import styled from "styled-components"

const DescriptionTemplate = styled.p`
  color: ${props => props.theme.overlayTextColor};
  font-family: ${props => props.theme.mainFontFamily[0]},
    ${props => props.theme.mainFontFamily[1]};
  font-weight: 400;
  z-index: 2;
  position: absolute;
  text-align: center;
  bottom: 0px;
  font-size: 2px;
  left: 0;
  right: 0;
  opacity: 0;
  transition: 0.25s;
  transition-delay: 0.15s;
`

DescriptionTemplate.defaultProps = {
  theme: {
    mainFontFamily: ["Ubuntu", "sans-serif"],
    overlayTextColor: "white",
  },
}

export { DescriptionTemplate }
