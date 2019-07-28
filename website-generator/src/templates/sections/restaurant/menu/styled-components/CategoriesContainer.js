import styled from "styled-components"

const CategoriesContainer = styled.div`
  display: flex;
  margin-bottom: 35px;
  flex-wrap: wrap;

  @media (max-width: 414px) {
    justify-content: center;
    align-items: center;
  }
`

export { CategoriesContainer }
