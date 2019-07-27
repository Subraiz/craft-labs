import React, { Component } from "react"
import styled from "styled-components"
import {
  MenuContainer,
  MenuItemsContainer,
  ItemContainer,
  ItemImageContainer,
  ImageOverlay,
  ItemInfoContainer,
  ItemInfo,
  ImageConstraint,
  HeaderCTA,
  MenuSection,
  ItemName,
  ItemPrice,
  ItemCategory,
  CategoriesContainer,
  Category,
  IngredientsContainer,
  Spacer,
  SpacerOverlay,
} from "./styled-components"

const Ingredients = styled(IngredientsContainer)`
  ${ImageConstraint}:hover & {
    left: 0;
  }
`

class Menu extends Component {
  constructor(props) {
    super(props)
    this.categories = this.props.section.content[0]
    this.menu = this.props.section.content.slice(1)
    this.state = {
      category: this.categories.data[0],
      menu: this.menu,
    }
  }

  onCategoryClick = event => {
    this.setState({ category: event.target.innerHTML })
  }

  renderCategories = () => {
    return this.categories.data.map((category, index) => {
      if (category == this.state.category) {
        const ActiveCategory = styled(Category)`
          background-color: #ffd644;
          color: black;
        `
        return (
          <ActiveCategory
            onClick={event => this.onCategoryClick(event)}
            key={index}
          >
            {category}
          </ActiveCategory>
        )
      } else {
        return (
          <Category onClick={event => this.onCategoryClick(event)} key={index}>
            {category}
          </Category>
        )
      }
    })
  }

  renderMenuItems = () => {
    return this.state.menu.map((item, index) => {
      const ImageContainer = styled(ItemImageContainer)`
        background-image: url(${item.data.dishImage});
      `
      if (
        item.data.dishCategory.includes(this.state.category) ||
        this.state.category == "All"
      ) {
        return (
          <ItemContainer key={index}>
            <ImageConstraint>
              <Ingredients />
              <ImageContainer>
                <ImageOverlay />
              </ImageContainer>
            </ImageConstraint>
            <ItemInfoContainer>
              <ItemName>{item.data.dishName}</ItemName>
              <ItemInfo>
                <ItemPrice>{item.data.dishPrice} •</ItemPrice>
                <ItemCategory>{item.data.dishCategory}</ItemCategory>
              </ItemInfo>
            </ItemInfoContainer>
          </ItemContainer>
        )
      }
    })
  }

  render() {
    return (
      <div>
        <MenuSection>
          <HeaderCTA>Today's Menu</HeaderCTA>
          <CategoriesContainer>{this.renderCategories()}</CategoriesContainer>
          <MenuContainer>
            <MenuItemsContainer>{this.renderMenuItems()}</MenuItemsContainer>
          </MenuContainer>
        </MenuSection>
      </div>
    )
  }
}

export { Menu }
