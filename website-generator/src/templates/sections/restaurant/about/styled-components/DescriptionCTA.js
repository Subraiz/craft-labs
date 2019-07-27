import styled from "styled-components"

const DescriptionCTA = styled.div`
  font-family: "Ubuntu", sans-serif;
  color: rgba(0, 0, 0, 0.8);
  line-height: 20px;
  font-weight: 300;
  :first-of-type::first-letter {
    float: left;
    font-weight: 400;
    font-size: 40px;
    font-size: 4rem;
    line-height: 40px;
    line-height: 3rem;
    height: 4rem;
    text-transform: uppercase;
    margin-right: 5px;
  }

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export { DescriptionCTA }
