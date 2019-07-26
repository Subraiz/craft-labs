import React from "react"
import styled from "styled-components"

const OutlineButton = props => {
  const Button = styled.div`
    cursor: pointer;
    padding: 12px 35px;
    border: 1px solid ${props.borderColor || "white"};
    border-radius: 2px;
    transition: 0.3s linear;
    :hover {
      border: 1px solid ${props.hoverColor || "rgba(252, 98, 3, .65)"};
      background-color: ${props.hoverColor || "rgba(252, 98, 3, .65)"};
    }
  `

  return (
    <Button onClick={props.onClick}>
      <p
        style={{
          ...styles.buttonTextStyle,
          ...props.buttonTextStyle,
        }}
      >
        {props.buttonText}
      </p>
    </Button>
  )
}

const styles = {
  buttonTextStyle: {
    color: "white",
    fontFamily: "Helvetica",
    margin: 0,
    opacity: 0.9,
    transition: ".2s linear",
  },
}

export { OutlineButton }
