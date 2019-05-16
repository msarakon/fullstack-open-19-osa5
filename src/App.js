import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Notification from './components/Notification'
import loginService from './services/login'
import blogService from './services/blogs'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [ notification, setNotification ] = useState({ msg: '', style: null })

  useEffect(() => {
    const loggedUser = window.localStorage.getItem('loggedBlogAppUser')
    if (loggedUser) {
      const user = JSON.parse(loggedUser)
      setUser(user)
    }
  }, [])

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  const showError = msg => {
    setNotification({ msg: msg, style: 'error' })
    setTimeout(() => setNotification({ msg: '', style: null }), 2000)
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({ username, password })
      window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(user))
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      showError('käyttäjätunnus tai salasana ei kelpaa')
      setTimeout(() => showError(null), 5000)
    }
  }

  const handleLogOut = () => {
    setUser(null)
    window.localStorage.removeItem('loggedBlogAppUser')
  }

  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <div>
        username
        <input type="text"
                value={username}
                name="username"
                onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password
        <input type="password"
                value={password}
                name="password"
                onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">log in</button>
    </form>
  )

  const blogList = () => (
    blogs.map(blog =>
      <Blog key={blog.id} blog={blog} />
    )
  )

  return (
    <div>
      <h1>blogs</h1>
      <Notification message={notification.msg} style={notification.style} />
      {
        user === null ? loginForm() :
        <div>
          <p>
            {user.name} logged in <button onClick={handleLogOut}>log out</button>
          </p>
          {blogList()}
        </div>
      }
    </div>
  )
}

export default App