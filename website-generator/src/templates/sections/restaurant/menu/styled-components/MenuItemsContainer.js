import styled from "styled-components"

const MenuItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 414px) {
    justify-content: center;
  }
`

export { MenuItemsContainer }
