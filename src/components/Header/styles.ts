import styled from 'styled-components'

export const HeaderContainer = styled.div`
  margin: 0;
  width: 100%;
  height: 296px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(prosp) => prosp.theme['base-profile']};

  img {
    margin-top: -70px;
  }
`
