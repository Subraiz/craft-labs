import styled from "styled-components"

const Logo = styled.div`
  background-image: url("http://eagles.subraiz.tk/img/main_logo.png");
  width: 50%;
  height: 300px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: 8vh;
  z-index: 2;

  @media (max-width: 414px) {
    width: 75%;
  }
`

export { Logo }
