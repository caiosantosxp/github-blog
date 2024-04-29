import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 416px;
  height: 260px;

  border: 2px solid transparent;
  border-radius: 10px;
  background: ${(props) => props.theme['base-post']};

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 32px;
    margin-top: 32px;
    margin-right: 32px;

    strong {
      width: 283px;
      height: 40px;
      font-size: 20px;
      font-family: 700;
      line-height: 1.6;

      color: ${(props) => props.theme['base-title']};
      cursor: pointer;

      .navlink {
        text-decoration: none;
        color: ${(props) => props.theme['base-title']};
      }
    }

    span {
      font-size: 14px;
      font-weight: 400;
      line-height: 1.6;

      color: ${(props) => props.theme['base-span']};
    }
  }
`
export const CardContent = styled.div`
  margin: 20px 32px;
  overflow: hidden;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;

  p {
    display: -webkit-box; /* Para navegadores baseados em WebKit */
    display: -moz-box; /* Para navegadores baseados em Gecko */
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    -webkit-line-clamp: 4; /* Número máximo de linhas antes do ellipsis */
    -moz-line-clamp: 4; /* Número máximo de linhas antes do ellipsis */
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
