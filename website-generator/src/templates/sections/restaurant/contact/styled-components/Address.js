import styled from "styled-components"

const Address = styled.p`
  z-index: 2;
  line-height: 0;
  font-family: ${props => props.theme.mainFontFamily[0]},
    ${props => props.theme.mainFontFamily[1]};
  color: ${props => props.theme.primaryColor};
  font-size: 18px;
  font-weight: 500;
`

Address.defaultProps = {
  theme: {
    mainFontFamily: ["Ubuntu", "sans-serif"],
    primaryColor: "white",
  },
}

export { Address }
