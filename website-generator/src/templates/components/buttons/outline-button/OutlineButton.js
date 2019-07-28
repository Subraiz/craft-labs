import React from "react"
import styled, { withTheme } from "styled-components"

const OutlineButtonTemplate = props => {
  const Button = styled.div`
    cursor: pointer;
    padding: 12px 35px;
    border: 1px solid ${props.theme.primaryColor};
    border-radius: 2px;
    transition: 0.3s linear;
    color: ${props => props.theme.primaryColor};
    :hover {
      border: 1px solid ${props.theme.tertiaryColor};
      background-color: ${props.theme.tertiaryColor};
      color: ${props => props.theme.paragraphColor};
    }
  `
  const ButtonText = styled.p`
    font-family: ${props => props.theme.mainFontFamily[0]},
      ${props => props.theme.mainFontFamily[1]};
    margin: 0;
    font-size: 20px;
    opacity: 0.9;
    font-weight: 500;
  `

  return (
    <Button onClick={props.onClick}>
      <ButtonText>{props.buttonText}</ButtonText>
    </Button>
  )
}

OutlineButtonTemplate.defaultProps = {
  theme: {
    primaryColor: "white",
    tertiaryColor: "#ffd644",
    mainFontFamily: ["Ubuntu", "sans-serif"],
    paragraphColor: "black",
  },
}

const OutlineButton = withTheme(OutlineButtonTemplate)

export { OutlineButton }
