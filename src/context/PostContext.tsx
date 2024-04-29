/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

export interface RepositoryData {
  postContext: string
  postTitle: string
  postComment: number
  postCreated_at: string
  postHtml_url: string
}

export interface PostActiveProps {
  postContext: string
  postTitle: string
  postComment: number
  postCreated_at: string
  postHtml_url: string
}

interface UsuarioType {
  avatar_url: string
  bio: string
  company: string
  created_at: string
  followers: number
  html_url: string
  id: number
  login: string
  name: string
}

interface Issue {
  active_lock_reason: null | string
  assignee: null | any // Você pode definir uma interface mais detalhada para assignee se necessário
  assignees: any[] // Você pode definir uma interface mais detalhada para assignees se necessário
  author_association: string
  body: string
  closed_at: null | string
  comments: number
  comments_url: string
  created_at: string
  events_url: string
  html_url: string
  id: number
  labels: any[] // Você pode definir uma interface mais detalhada para labels se necessário
  labels_url: string
  locked: boolean
  milestone: null | any // Você pode definir uma interface mais detalhada para milestone se necessário
  node_id: string
  number: number
  performed_via_github_app: null | any // Você pode definir uma interface mais detalhada para performed_via_github_app se necessário
  reactions: {
    url: string
    total_count: number
    '+1': number
    '-1': number
    laugh: number
    // Adicione mais reações conforme necessário
  }
  repository_url: string
  score: number
  state: string
  state_reason: null | string
  timeline_url: string
  title: string
  updated_at: string
  url: string
  user: {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    // Adicione mais propriedades de usuário conforme necessário
  }
}

interface PostContextType {
  repositorio: RepositoryData[]
  postActive: PostActiveProps
  usuario: UsuarioType
  addPost: (dados: PostActiveProps | undefined) => void
  fetchRepositorio: (data: string) => void
}

interface PostProviderProps {
  children: ReactNode
}

export const PostContext = createContext({} as PostContextType)

export function PostProvider({ children }: PostProviderProps) {
  const [repositorio, setRepositorio] = useState<RepositoryData[]>([])
  const [postActive, setPostActive] = useState<PostActiveProps>({
    postContext: '',
    postTitle: '',
    postComment: 0,
    postCreated_at: '',
    postHtml_url: '',
  })

  const [usuario, setUsuario] = useState<UsuarioType>({
    name: '',
    bio: '',
    login: '',
    company: '',
    followers: 0,
    html_url: '',
    avatar_url: '',
    created_at: '',
    id: 0,
  })

  const fetchUsuario = useCallback(async () => {
    const response = await api.get('/users/caiosantosxp', {})
    const userData = response.data

    const user: UsuarioType = {
      name: userData.name,
      bio: userData.bio,
      login: userData.login,
      company: userData.company,
      followers: userData.followers,
      html_url: userData.html_url,
      avatar_url: userData.avatar_url,
      created_at: userData.created_at,
      id: userData.id,
    }
    setUsuario(user)
  }, [])

  const fetchRepositorio = useCallback(async (query?: string) => {
    if (!query) {
      query = ''
    }
    const response = await api.get('/search/issues', {
      params: {
        q: `${query} user:caiosantosxp`,
      },
    })
    console.log(response)
    const allinsues = response.data.items.map((respo: Issue) => ({
      postContext: respo.body,
      postTitle: respo.title,
      postComment: respo.comments,
      postCreated_at: respo.created_at,
      postHtml_url: respo.html_url,
    }))
    setRepositorio(allinsues)
  }, [])

  useEffect(() => {
    fetchUsuario()
    fetchRepositorio()
  }, [fetchUsuario, fetchRepositorio])

  function addPost(post: PostActiveProps | undefined) {
    if (post) {
      setPostActive(post)
    }
  }

  return (
    <PostContext.Provider
      value={{
        repositorio,
        usuario,
        addPost,
        postActive,
        fetchRepositorio,
      }}
    >
      {children}
    </PostContext.Provider>
  )
}
