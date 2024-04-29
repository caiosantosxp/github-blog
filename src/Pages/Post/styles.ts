import styled from 'styled-components'

export const LinkContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;

  padding: 32px 32px;
  color: ${(props) => props.theme['brand-blue']};

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    a {
      text-decoration: none;
      color: ${(props) => props.theme['brand-blue']};
    }
  }
`

export const PostProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 864px;
  height: 212px;
  margin: -90px auto;

  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  p {
    font-size: 15px;
    font-weight: 400;
    line-height: 1.6;

    color: ${(props) => props.theme['base-text']};
  }

  .PostTitle {
    margin: 0 32px;
  }
`

export const IconPost = styled.div`
  display: flex;
  gap: 15px;

  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
  margin-top: 8px;
  color: ${(props) => props.theme['base-subtitle']};

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    svg {
      font-size: 18px;
      color: ${(props) => props.theme['base-label']};
    }
  }
`
export const PostContentContainer = styled.div`
  display: flex;
  width: 864px;
  padding: 40px 32px;
  flex-direction: column;
  margin: 100px auto;
  gap: 24px;

  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  color: ${(props) => props.theme['base-text']};

  code {
    display: flex;
    padding: 10px;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-radius: 2px;

    background: ${(props) => props.theme['base-post']};
  }
`

export const Typography = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
`

export const DynamycTyping = styled.p``
