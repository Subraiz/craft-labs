import styled from "styled-components"

const ItemImageContainer = styled.div`
  position: relative;
  background-image: url("https://www.seriouseats.com/recipes/images/2015/07/20150728-homemade-whopper-food-lab-35-1500x1125.jpg");
  width: 100%;
  height: 100%;
  background-size: cover;
  overflow: hidden;
  transition: 0.25s linear;

  :hover {
    transform: scale(1.15) rotate(5deg);
    transition: 0.25s linear;
  }
`

export { ItemImageContainer }
