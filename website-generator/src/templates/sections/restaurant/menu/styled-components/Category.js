import styled from "styled-components"

const Category = styled.div`
  transition: 0.2s linear;
  background-color: ${props => props.theme.secondaryBGColor};
  padding: 8px 25px;
  margin-right: 20px;
  border-radius: 15px;
  font-family: ${props => props.theme.mainFontFamily[0]},
    ${props => props.theme.mainFontFamily[1]};
  cursor: pointer;
  color: ${props => props.theme.secondaryParagraphColor};

  @media (max-width: 414px) {
    margin: 5px 5px;
    padding: 5px 18px;
  }
`

Category.defaultProps = {
  theme: {
    mainFontFamily: ["Ubuntu", "sans-serif"],
    secondaryParagraphColor: "rgba(0,0,0,.5)",
    secondaryBGColor: "#f7f7f7",
  },
}

export { Category }
