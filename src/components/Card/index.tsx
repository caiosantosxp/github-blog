import { useContext } from 'react'
import { CardContainer, CardContent } from '../Card/styles'
import { PostActiveProps, PostContext } from '../../context/PostContext'
import { NavLink } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

export function Card() {
  const { repositorio, addPost } = useContext(PostContext)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleClickLink(event: any) {
    const title = event.target.innerHTML

    const post: PostActiveProps | undefined = repositorio.find(
      (repo) => repo.postTitle === title,
    )
    if (post) {
      addPost(post)
    }
  }

  return (
    <>
      {repositorio.map((repo) => {
        return (
          <div key={repo.postCreated_at}>
            <CardContainer>
              <div>
                <strong>
                  <NavLink
                    to={'/post'}
                    className="navlink"
                    onClick={handleClickLink}
                    defaultValue={repo.postTitle}
                  >
                    {repo.postTitle}
                  </NavLink>
                </strong>
                <span>
                  {formatDistanceToNow(repo.postCreated_at, {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </span>
              </div>
              <CardContent>
                <p>{repo.postContext}</p>
              </CardContent>
            </CardContainer>
          </div>
        )
      })}
    </>
  )
}
