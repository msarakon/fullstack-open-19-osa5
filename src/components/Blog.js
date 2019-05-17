import React, { useState } from 'react'

const Blog = ({ blog }) => {
  const [fullInfo, setFullInfo] = useState(false)

  const showWhenVisible = { display: fullInfo ? '' : 'none' }

  const toggleFullInfo = () => setFullInfo(!fullInfo)

  return (
    <div class="blog-row" onClick={toggleFullInfo}>
      <div>{blog.title} ({blog.author})</div>
      <div style={showWhenVisible}>
        <div><a href={blog.url}>{blog.url}</a></div>
        <div>{blog.likes} likes</div>
        {blog.user && <div>added by {blog.user.name}</div>}
      </div>
    </div>
  )
}

export default Blog