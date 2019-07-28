import styled from "styled-components"

const TeamContainer = styled.div`
  width: 50vw;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;

  @media (max-width: 1112px) {
    width: 75vw;
  }

  @media (max-width: 414px) {
    width: 95vw;
  }
`

export { TeamContainer }
