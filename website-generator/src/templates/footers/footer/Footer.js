import React from "react"
import styled from "styled-components"

const FooterContainer = styled.div`
  display: flex;
  padding: 0.5rem 2vw;
  align-items: center;
  justify-content: space-between;
`

const CompanyName = styled.p`
  font-family: "Ubuntu", sans-serif;
`

const Footer = props => {
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

export { Footer }
