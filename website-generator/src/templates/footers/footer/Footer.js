import React from "react"
import styled, { withTheme } from "styled-components"

const FooterTemplate = props => {
  const FooterContainer = styled.div`
    display: flex;
    padding: 0.5rem 2vw;
    align-items: center;
    justify-content: space-between;
    background-color: ${props.theme.bgColor};

    @media (max-width: 414px) {
      flex-flow: column-reverse;
    }
  `

  const CompanyName = styled.p`
    font-family: "Ubuntu", sans-serif;
  `
  return (
    <FooterContainer>
      <a
        href="https://splurgedev.com"
        target="_blank"
        style={{ padding: "0 15px" }}
      >
        <img src={require("./CraftLabsLogo.png")} style={{ width: 150 }} />
      </a>
      <CompanyName>© {props.companyName}</CompanyName>
    </FooterContainer>
  )
}

const Footer = withTheme(FooterTemplate)

export { Footer }
