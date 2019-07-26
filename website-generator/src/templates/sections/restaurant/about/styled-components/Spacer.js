import styled from "styled-components"

const Spacer = styled.div`
  width: 100vw;
  padding: 8vh 0;
  background-color: red;
  margin-top: 5vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  position: relative;
  justify-content: center;
  background-attachment: fixed;
  background-size: cover;
  background-image: url("https://www.camisa.co.uk/image/data/new-images/tn_background-1920x1080.jpg");

  p {
    color: white;
    z-index: 2;
    font-family: "Ubuntu", sans-serif;
    font-weight: 500;
    font-size: 40px;
  }
`

export { Spacer }
