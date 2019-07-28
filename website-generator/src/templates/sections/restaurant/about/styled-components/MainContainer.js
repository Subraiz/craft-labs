import styled from "styled-components"

const MainContainer = styled.div`
  position: relative;
  padding: 8vh 0 0 0;
  background-color: ${props => props.theme.bgColor};
`

MainContainer.defaultProps = {
  theme: {
    bgColor: "white",
  },
}

export { MainContainer }
