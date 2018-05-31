import {ADD_COMMENT} from '../constants'
import { normalizedComments } from '../fixtures'

/*const defaultComments = normalizedComments.reduce(
  (acc, comment) => ({
    ...acc,
    [comment.id]: comment
  }),
  {}
)*/

export default (commentsState = normalizedComments, action) => {
  const { type, payload, randomId } = action

  switch (type) {
    case ADD_COMMENT:
          return commentsState.concat(commentsState.id: randomId,
             ...payload.comment)
    default:
      return commentsState
  }
}
