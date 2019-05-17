import React, { useState } from 'react'

const Blog = ({ blog, update, remove }) => {
  const [fullInfo, setFullInfo] = useState(false)

  const showWhenVisible = { display: fullInfo ? '' : 'none' }

  const toggleFullInfo = () => setFullInfo(!fullInfo)

  const like = () =>
    update({
      id: blog.id,
      title: blog.title,
      author: blog.author,
      url: blog.url,
      likes: blog.likes + 1,
      user: blog.user.id
    })

  return (
    <div className="blog-row" onClick={toggleFullInfo}>
      <div>{blog.title} ({blog.author})</div>
      <div style={showWhenVisible}>
        <div><a href={blog.url}>{blog.url}</a></div>
        <div>
          {blog.likes} likes <button onClick={like}>like</button>
        </div>
        <div>
          {blog.user && <div>added by {blog.user.name}</div>}
        </div>
        <button onClick={() => remove(blog)}>remove</button>
      </div>
    </div>
  )
}

export default Blog