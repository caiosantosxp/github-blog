import {
  GitHubLink,
  Icon,
  PostContainer,
  ProfileContainer,
  SearchCoonatainer,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding } from '@fortawesome/free-solid-svg-icons/faBuilding'
import {
  faArrowUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { Card } from '../../components/Card'
import { useContext } from 'react'
import { PostContext } from '../../context/PostContext'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function Home() {
  const { repositorio, usuario, fetchRepositorio } = useContext(PostContext)
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      query: '',
    },
  })

  async function handleSearchPost(data: SearchFormInput) {
    await fetchRepositorio(data.query)
    console.log(data.query)
  }

  return (
    <>
      <ProfileContainer>
        <img src={usuario.avatar_url} alt="" />
        <div>
          <div>
            <h1>{usuario.name}</h1>
            <p>{usuario.bio} </p>
            <Icon>
              <span>
                <FontAwesomeIcon icon={faGithub} />
                {usuario.login}
              </span>
              <span>
                <FontAwesomeIcon icon={faBuilding} />
                {usuario.company}
              </span>
              <span>
                <FontAwesomeIcon icon={faUserGroup} />
                {usuario.followers} seguidores
              </span>
            </Icon>
          </div>
        </div>
        <GitHubLink>
          <a href={usuario.html_url} target="_blank" rel="noreferrer">
            GITHUB
          </a>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </GitHubLink>
      </ProfileContainer>
      <SearchCoonatainer>
        <div>
          <strong>Publicações</strong>
          <p>{repositorio.length} publicações</p>
        </div>
        <form onSubmit={handleSubmit(handleSearchPost)}>
          <input
            type="text"
            placeholder="Buscar conteúdo"
            {...register('query')}
          />
        </form>
      </SearchCoonatainer>
      <PostContainer>
        <Card />
      </PostContainer>
    </>
  )
}
