import React, { useState } from 'react'
import PropTypes from 'prop-types'

const BlogForm = ({ save }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const submit = (event) => {
    event.preventDefault()
    save(title, author, url)
  }

  return (
    <form onSubmit={submit}>
      <div>
        title:
        <input type="text" value={title} onChange={({ target }) => setTitle(target.value)} />
      </div>
      <div>
        author:
        <input type="text" value={author} onChange={({ target }) => setAuthor(target.value)} />
      </div>
      <div>
        url:
        <input type="text" value={url} onChange={({ target }) => setUrl(target.value)} />
      </div>
      <button type="submit">save</button>
    </form>
  )
}

BlogForm.propTypes = {
  save: PropTypes.func.isRequired
}

export default BlogForm