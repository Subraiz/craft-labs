import React, { Component } from "react"
import styled, { ThemeProvider, withTheme, keyframes } from "styled-components"
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
  SpacerOverlay,
} from "./styled-components"

const Ingredients = styled(IngredientsContainer)`
  ${ImageConstraint}:hover & {
    left: 0;
  }
`

const config = {
  scale: "scale(1)",
  opacity: 1,
}

class MenuTemplate extends Component {
  constructor(props) {
    super(props)
    this.title = this.props.section.content[0].data
    this.categories = this.props.section.content[1]
    this.menu = this.props.section.content.slice(2)
    this.state = {
      category: this.categories.data[0],
      menu: this.menu,
      config: config,
    }
  }

  onCategoryClick = event => {
    const category = event.target.innerHTML
    const removeConfig = {
      scale: "scale(.2)",
      opacity: 0,
    }
    this.setState({ config: removeConfig })
    setTimeout(() => {
      this.setState({ category: category, config: removeConfig })
    }, 200)
    setTimeout(() => {
      this.setState({ config: config })
    }, 450)
  }

  renderCategories = () => {
    return this.categories.data.map((category, index) => {
      if (category == this.state.category) {
        const ActiveCategory = styled(Category)`
          background-color: ${this.props.theme.tertiaryColor};
          color: ${this.props.theme.paragraphColor};
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
          <ItemContainer key={index} config={this.state.config}>
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
      <MenuContainer>
        <ThemeProvider theme={this.props.theme}>
          <MenuSection>
            <HeaderCTA>{this.title}</HeaderCTA>
            <CategoriesContainer>{this.renderCategories()}</CategoriesContainer>
            <MenuContainer>
              <MenuItemsContainer>{this.renderMenuItems()}</MenuItemsContainer>
            </MenuContainer>
          </MenuSection>
        </ThemeProvider>
      </MenuContainer>
    )
  }
}

const Menu = withTheme(MenuTemplate)

export { Menu }
