import React from "react"
import styled, { withTheme } from "styled-components"

const ButtonTemplate = props => {
  const Button = styled.div`
    cursor: pointer;
    padding: 14px 45px;
    background-color: ${props => props.theme.buttonColor};
    z-index: 2;
    border-radius: 2px;
    transition: 0.2s linear;
    color: ${props => props.theme.secondaryColor};
    :hover {
      background-color: ${props => props.theme.secondaryColor};
      color: ${props => props.theme.buttonColor};
    }
  `

  const Text = styled.div`
    font-family: ${props => props.theme.mainFontFamily[0]},
      ${props => props.theme.mainFontFamily[1]};
    font-weight: 500;
    font-size: 24px;
  `

  return (
    <Button onClick={props.onClick}>
      <Text>{props.buttonText}</Text>
    </Button>
  )
}

ButtonTemplate.defaultProps = {
  theme: {
    buttonColor: "white",
    secondaryColor: "#ca3d26",
    mainFontFamily: ["Ubuntu", "sans-serif"],
  },
}

const Button = withTheme(ButtonTemplate)

export { Button }
