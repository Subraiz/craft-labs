import styled from "styled-components"

const ItemPrice = styled.p`
  font-family: ${props => props.theme.mainFontFamily[0]},
    ${props => props.theme.mainFontFamily[1]};
  font-weight: 300;
  margin: 0px;
  color: ${props => props.theme.paragraphColor};
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

ItemPrice.defaultProps = {
  theme: {
    mainFontFamily: ["Ubuntu", "sans-serif"],
    paragraphColor: "black",
  },
}

export { ItemPrice }
