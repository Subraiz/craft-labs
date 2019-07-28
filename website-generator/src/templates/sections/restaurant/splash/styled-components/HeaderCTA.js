import styled from "styled-components"

const HeaderCTA = styled.div`
  font-family: ${props => props.theme.secondaryFontFamily[0]},
    ${props => props.theme.secondaryFontFamily[1]};
  color: ${props => props.theme.primaryColor};
  font-size: 64px;
  margin: 0;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

HeaderCTA.defaultProps = {
  theme: {
    secondaryFontFamily: ["Kaushan Script", "cursive"],
    primaryColor: "white",
  },
}

export { HeaderCTA }
