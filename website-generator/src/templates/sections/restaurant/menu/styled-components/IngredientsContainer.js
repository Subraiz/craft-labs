import styled from "styled-components"
import ImageConstraint from "./ImageConstraint"

const IngredientsContainer = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2;
  transition: 0.4s linear;
  left: -50%;
`

export { IngredientsContainer }
