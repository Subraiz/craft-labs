import styled from "styled-components"

const DescriptionCTA = styled.div`
  font-family: ${props => props.theme.mainFontFamily[0]},
    ${props => props.theme.mainFontFamily[1]};
  color: ${props => props.theme.paragraphColor};
  opacity: 0.8;
  line-height: 20px;
  font-weight: 300;
  :first-of-type::first-letter {
    float: left;
    font-weight: 400;
    font-size: 40px;
    font-size: 4rem;
    line-height: 40px;
    line-height: 3rem;
    height: 4rem;
    text-transform: uppercase;
    margin-right: 5px;
  }

  @media (max-width: 414px) {
    :first-of-type::first-letter {
      float: left;
      font-weight: 400;
      font-size: 3rem;
      line-height: 2.5rem;
      height: 2rem;
      text-transform: uppercase;
      margin: 0;
    }
  }

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

DescriptionCTA.defaultProps = {
  theme: {
    paragraphColor: "black",
    mainFontFamily: ["Ubuntu", "sans-serif"],
  },
}

export { DescriptionCTA }
