import styled from "styled-components"

const DescriptionCTA = styled.div`
  font-family: ${props => props.theme.mainFontFamily[0]},
    ${props => props.theme.mainFontFamily[1]};
  color: ${props => props.theme.primaryColor};
  font-size: 44px;
  margin: 10px;
  margin-bottom: 25px;
  text-align: center;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

DescriptionCTA.defaultProps = {
  theme: {
    mainFontFamily: ["Ubuntu", "sans-serif"],
    primaryColor: "white",
  },
}

export { DescriptionCTA }
