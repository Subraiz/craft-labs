import styled from "styled-components"

const Email = styled.p`
  z-index: 2;
  line-height: 0;
  font-family: ${props => props.theme.mainFontFamily[0]},
    ${props => props.theme.mainFontFamily[1]};
  color: ${props => props.theme.primaryColor};
  font-weight: 500;
`

Email.defaultProps = {
  theme: {
    mainFontFamily: ["Ubuntu", "sans-serif"],
    primaryColor: "white",
  },
}

export { Email }
