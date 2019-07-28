import styled from "styled-components"

const Hamburger = styled.div`
  display: none;
  @media (max-width: 414px) {
    display: block;
    position: absolute;
    margin-left: 20px;
  }
`

export { Hamburger }
