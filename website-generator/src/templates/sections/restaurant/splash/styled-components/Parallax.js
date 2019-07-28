import styled from "styled-components"

const Parallax = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-attachment: fixed;
  background-size: cover;
  background-image: url("https://www.palubickis.com/wp-content/uploads/iStock_000028761886turkey-and-cheese-sandwich-SM.jpg");

  @media (max-width: 414px) {
    background-size: scale;
    background-position: center;
  }
`

export { Parallax }
