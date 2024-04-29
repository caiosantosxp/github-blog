import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import {
  IconPost,
  LinkContent,
  PostContentContainer,
  PostProfileContainer,
} from './styles'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { PostContext } from '../../context/PostContext'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

export function Post() {
  const { postActive, usuario } = useContext(PostContext)
  console.log(postActive)
  return (
    <>
      <PostProfileContainer>
        <LinkContent>
          <span>
            <FontAwesomeIcon icon={faChevronLeft} />
            <NavLink to={'/'} className="navlink">
              VOLTAR
            </NavLink>
          </span>
          <span>
            <a
              href={postActive.postHtml_url}
              className="navlink"
              target="_blank"
              rel="noreferrer"
            >
              VER NO GITHUB
            </a>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </span>
        </LinkContent>
        <div className="PostTitle">
          <h1>{postActive.postTitle}</h1>
          <IconPost>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              {usuario.login}
            </span>
            <span>
              <FontAwesomeIcon icon={faCalendarDay} />

              {formatDistanceToNow(postActive.postCreated_at, {
                addSuffix: true,
                locale: ptBR,
              })}
            </span>
            <span>
              <FontAwesomeIcon icon={faComment} /> {postActive.postComment}{' '}
              Comentarios
            </span>
          </IconPost>
        </div>
      </PostProfileContainer>
      <PostContentContainer>
        <Markdown remarkPlugins={[remarkGfm]}>
          {postActive.postContext}
        </Markdown>
      </PostContentContainer>
    </>
  )
}
