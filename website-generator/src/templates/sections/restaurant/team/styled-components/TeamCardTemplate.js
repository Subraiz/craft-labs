import styled from "styled-components"

const TeamCardTemplate = styled.div`
  position: relative;
  overflow: hidden;
  padding: 175px 0;
  border-radius: 5px;
  background-size: cover;
  background-position: center;
  background-image: url("https://media.licdn.com/dms/image/C4E03AQF0jIcFO8bz5Q/profile-displayphoto-shrink_800_800/0?e=1569456000&v=beta&t=WYKobCDcnyocJgIKXx8__yu_R_fG-5tNc5RxCKa7FUo");

  @media (max-width: 414px) {
    padding: 100px 0;
    font-size: 11px;
  }
`

export { TeamCardTemplate }
