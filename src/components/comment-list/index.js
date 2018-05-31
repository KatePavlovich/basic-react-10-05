import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
import Form from '../form'
import toggleOpen from '../../decorators/toggleOpen'
import './style.css'
import { addComment } from '../../ac'

class CommentList extends Component {
  static defaultProps = {
    article: PropTypes.object.isRequired
  }

  static propTypes = {
    //comments: PropTypes.array.isRequired,
    //from toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  render() {
    const { isOpen, toggleOpen, article } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button onClick={toggleOpen} className="test__comment-list--btn">
          {text}
        </button>
        <Form articleId={article.id} />
        <CSSTransition
          transitionName="comments"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.getBody()}
        </CSSTransition>
      </div>
    )
  }

  getBody() {
    const { article, isOpen } = this.props
    if (!isOpen) return null

    return (
      <div className="test__comment-list--body">
        {article.comments.length ? (
          this.getComments()
        ) : (
          <h3 className="test__comment-list--empty">No comments yet</h3>
        )}
      </div>
    )
  }

  getComments() {
    return (
      <div>
      <ul>
        {this.props.article.comments.map((id) => (
          <li key={id} className="test__comment-list--item">
            <Comment id={id} />
          </li>
        ))}
      </ul>

      </div>
    )
  }
}

export default toggleOpen(CommentList)
