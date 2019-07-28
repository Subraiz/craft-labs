import styled from "styled-components"

const HeaderCTA = styled.p`
  text-align: center;
  font-family: ${props => props.theme.secondaryFontFamily[0]},
    ${props => props.theme.secondaryFontFamily[1]};
  font-size: 44px;
  margin: 10px 0 30px 0;
  color: ${props => props.theme.secondaryColor};

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
    secondaryColor: "#ca3d26",
  },
}

export { HeaderCTA }
