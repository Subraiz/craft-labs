import styled from "styled-components"

const Item = styled.p`
  margin: 0;
  padding: 2vh 0;
  margin-right: 1.5vw;
  text-decoration: none;
  transition: 0.25s linear;
  position: relative;
  opacity: 0.85;
  font-size: 19px;
  transition: 0.2s linear;

  ::after {
    content: "";
    display: block;
    position: absolute;
    width: 0;
    height: 1px;
    transition: 0.3s linear;
  }

  :hover::after {
    content: " ";
    display: block;
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: ${props => props.config.color};
  }
`

export { Item }
