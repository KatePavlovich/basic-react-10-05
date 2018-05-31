import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addComment } from '../ac'


class Form extends React.Component {

  static propTypes = {
    addComment: PropTypes.func.isRequired,
    articleId: PropTypes.string.isRequired
  }

  state = { user: '',
            text:''
  }

  handleChange = element =>  ev => {
    this.setState({
      [element]: ev.target.value
    })
  }

  handleSubmit = ev => {
      const {addComment, articleId} = this.props
      addComment(this.state, articleId)

      this.setState({
        user: '',
        text: ''
      })
  }

  render() {
    const { text, user } = this.state
    return (
      <form onSubmit = {this.handleSubmit} >
        <h3>Add new comment</h3>
        <textarea
          value={text}
          onChange={this.handleChange('text')}
        />
        <input
          value={user}
          placeholder="user name"
          onChange={this.handleChange('user')}
        />
        <input type="submit" value="add comment"/>
      </form>
    );
  }
}

export default connect(null, {addComment})(Form)
