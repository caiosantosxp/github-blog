import { HeaderContainer } from "./styles";
import logoGitHub from '../../assets/logo-github-blog.svg'

export function Header(){
  return (
    <HeaderContainer>
      <img src={logoGitHub} alt="" />
    </HeaderContainer>
  )
}