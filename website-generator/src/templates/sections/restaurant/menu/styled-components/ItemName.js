import styled from "styled-components"

const ItemName = styled.p`
  font-family: ${props => props.theme.mainFontFamily[0]},
    ${props => props.theme.mainFontFamily[1]};
  font-weight: 500;
  margin: 10px 0px;
  color: ${props => props.theme.paragraphColor};
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

ItemName.defaultProps = {
  theme: {
    mainFontFamily: ["Ubuntu", "sans-serif"],
    paragraphColor: "black",
  },
}

export { ItemName }
