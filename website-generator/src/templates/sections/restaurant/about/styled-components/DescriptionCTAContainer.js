import styled from "styled-components"

const DescriptionCTAContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 50px;
  padding: 5vh 15vw;

  @media (max-width: 414px) {
    display: flex;
    flex-flow: column;
  }
`

export { DescriptionCTAContainer }
