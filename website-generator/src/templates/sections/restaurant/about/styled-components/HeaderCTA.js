import styled from "styled-components"

const HeaderCTA = styled.div`
  font-size: 64px;
  font-family: ${props => props.theme.secondaryFontFamily[0]},
    ${props => props.theme.secondaryFontFamily[1]};
  color: ${props => props.theme.secondaryColor};
  text-align: center;
  margin-top: -20px;
  margin-bottom: 20px;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

HeaderCTA.defaultProps = {
  theme: {
    secondaryFontFamily: ["Ubuntu", "sans-serif"],
    secondaryColor: "#ca3d26",
  },
}

export { HeaderCTA }
