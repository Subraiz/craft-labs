import styled from "styled-components"

const Icon = styled.div`
  margin: 0 8px;
  color: ${props => props.theme.primaryColor};
  transition: 0.2s linear;

  :hover {
    color: ${props => props.theme.secondaryColor};
  }
`

Icon.defaultProps = {
  theme: {
    primaryColor: "white",
    secondaryColor: "#ca3d26",
  },
}

export { Icon }
