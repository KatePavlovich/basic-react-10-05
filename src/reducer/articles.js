import { DELETE_ARTICLE } from '../constants'
import { normalizedArticles} from '../fixtures'

export default (articleState = normalizedArticles, action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      return articleState.filter((article) => article.id !== payload.id)

    default:
      return articleState
  }
}
