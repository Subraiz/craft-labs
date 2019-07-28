import styled from "styled-components"

const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-transform: capitalize;

  @media (max-width: 414px) {
    transition: 0.3s linear;
    flex-flow: column;
    width: 45vw;
    justify-content: center;
    margin-top: 29px;
    box-shadow: 3px 20px 12px 4px rgba(0, 0, 0, 0.2);
    position: absolute;
    left: ${props => props.mobile.left};
    height: 100vh;
    background-color: white;
  }
`

export { ItemsContainer }
