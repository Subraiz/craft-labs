import styled from "styled-components"

const ItemCategory = styled.p`
  font-family: ${props => props.theme.mainFontFamily[0]},
    ${props => props.theme.mainFontFamily[1]};
  font-weight: 300;
  margin: 0px;
  margin-left: 5px;
  color: ${props => props.theme.secondaryParagraphColor};

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

ItemCategory.defaultProps = {
  theme: {
    mainFontFamily: ["Ubuntu", "sans-serif"],
    secondaryParagraphColor: "rgba(0,0,0,.5)",
  },
}

export { ItemCategory }
