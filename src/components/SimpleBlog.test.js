import React from 'react'
import 'jest-dom/extend-expect'
import { render, cleanup } from 'react-testing-library'
import SimpleBlog from './SimpleBlog'

afterEach(cleanup)

test('should render blog title, author and likes', () => {
  const blog = {
    title: 'Title',
    author: 'Author',
    likes: 3,
    url: 'www.google.fi'
  }

  const onClick = () => {}

  const component = render(
    <SimpleBlog blog={blog} onClick={onClick} />
  )

  expect(component.container.querySelector('.blog-title')).toHaveTextContent(
    'Title Author'
  )

  expect(component.container.querySelector('.blog-likes')).toHaveTextContent(
    'blog has 3 likes'
  )
})