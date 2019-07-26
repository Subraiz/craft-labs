import React from "react"
import styled from "styled-components"

const Button = props => {
  const Button = styled.div`
    cursor: pointer;
    padding: 14px 45px;
    background-color: white;
    z-index: 2;
    border-radius: 2px;
    transition: 0.2s linear;
    color: #ca3d26;
    :hover {
      background-color: ${props.hoverColor || "#ca3d26"};
      color: white;
    }
  `

  const Text = styled.div`
    font-family: "Ubuntu", sans-serif;
    font-weight: 500;
    font-size: 24px;
  `

  return (
    <Button onClick={props.onClick} style={props.buttonStyle}>
      <Text style={props.textStyle}>{props.buttonText}</Text>
    </Button>
  )
}

export { Button }
