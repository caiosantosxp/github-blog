import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 864px;
  height: 212px;
  margin: -90px auto;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  img {
    width: 148px;
    height: 148px;
    margin: 32px 32px 32px 38px;
    border-radius: 8px;
  }

  div {
    width: 500px;
    height: 120px;
    margin: 15px 0;
  }
  p {
    font-size: 15px;
    font-weight: 400;
    line-height: 1.6;

    color: ${(props) => props.theme['base-text']};
  }
`
export const GitHubLink = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;
  margin-top: 40px;
  margin-right: 32px;
  color: ${(props) => props.theme['brand-blue']};
  cursor: pointer;

  a {
    text-decoration: none;
    color: ${(props) => props.theme['brand-blue']};
  }
`

export const Icon = styled.div`
  display: flex;
  gap: 15px;

  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;

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
// Seach Container

export const SearchCoonatainer = styled.div`
  display: flex;
  width: 864px;
  flex-direction: column;
  justify-content: center;
  margin: 150px auto;

  div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 12px;

    strong {
      font-size: 18px;
      font-weight: 700;
      line-height: 1.6;

      color: ${(props) => props.theme['base-subtitle']};
    }

    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 1.6;

      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    width: 100%;
    padding: 12px 16px;
    border-radius: 6px;

    font-family: 'Nunito', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;

    border: 1px solid ${(props) => props.theme['base-border']};
    background: ${(props) => props.theme['base-input']};

    &:hover {
      border: 1px solid ${(props) => props.theme['brand-blue']};
      transition: border 0.2s;
    }

    &:focus {
      border: 1px solid ${(props) => props.theme['brand-blue']};
      color: ${(props) => props.theme['base-text']};
    }
  }
`
// Post Container

export const PostContainer = styled.div`
  display: flex;
  width: 864px;

  align-items: flex-start;
  margin: -90px auto -90px;
  gap: 32px;

  flex-wrap: wrap;
`
