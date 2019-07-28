import styled from "styled-components"

const Item = styled.p`
  font-family: ${props => props.theme.mainFontFamily[0]},
    ${props => props.theme.mainFontFamily[1]};
  margin: 0;
  padding: 2vh 0;
  margin-right: 1.5vw;
  text-decoration: none;
  transition: 0.25s linear;
  color: ${props => props.config.color};
  position: relative;
  font-size: ${props => props.config.fontSize};
  transition: 0.2s linear;
  font-weight: ${props => props.config.weight};
  border-bottom: ${props => props.config.borderBottom}
    ${props => props.theme.secondaryColor};

  z-index: 2;

  ::after {
    content: "";
    display: block;
    position: absolute;
    width: 0;
    height: 1px;
    margin-top: 2vh;
    transition: 0.3s linear;
    z-index: 1;
  }

  :hover::after {
    content: " ";
    display: block;
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: ${props => props.theme.secondaryColor};
  }
`

export { Item }
