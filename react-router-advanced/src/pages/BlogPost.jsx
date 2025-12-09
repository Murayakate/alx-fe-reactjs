import { useParams, Link } from 'react-router-dom'
import '../styles/BlogPost.css'

const blogPostsData = {
  1: {
    title: 'Getting Started with React Router',
    author: 'John Doe',
    date: 'Dec 9, 2025',
    content: 'React Router is a library for routing in React applications. It enables you to build single-page applications with navigation without the page refreshing as the user navigates. This comprehensive guide covers all the basics you need to get started.'
  },
  2: {
    title: 'Nested Routes in React',
    author: 'Jane Smith',
    date: 'Dec 8, 2025',
    content: 'Nested routes allow you to create complex UIs with multiple levels of navigation. This article explores how to implement nested routes effectively in your React applications using the latest React Router features.'
  },
  3: {
    title: 'Dynamic Routing Patterns',
    author: 'Mike Johnson',
    date: 'Dec 7, 2025',
    content: 'Dynamic routing allows you to create routes with parameters that change based on user input. Learn how to use URL parameters to create flexible and scalable routing in your React applications.'
  },
  4: {
    title: 'Protected Routes & Auth',
    author: 'Sarah Williams',
    date: 'Dec 6, 2025',
    content: 'Protected routes are essential for applications that require authentication. This guide shows you how to implement authentication checks and protect routes from unauthorized access.'
  },
  5: {
    title: 'Advanced Routing Techniques',
    author: 'Tom Brown',
    date: 'Dec 5, 2025',
    content: 'Explore advanced routing techniques including lazy loading, code splitting, and progressive routing. These techniques help optimize your application performance.'
  },
  6: {
    title: 'React Router Best Practices',
    author: 'Emma Davis',
    date: 'Dec 4, 2025',
    content: 'Follow industry best practices for React Router to build scalable and maintainable applications. This article covers project structure, route organization, and performance optimization.'
  },
}

function BlogPost() {
  const { id } = useParams()
  const post = blogPostsData[id]

  if (!post) {
    return (
      <div className="blog-post-container">
        <h2>Post not found</h2>
        <Link to="/blog" className="back-link">← Back to Blog</Link>
      </div>
    )
  }

  return (
    <div className="blog-post-container">
      <Link to="/blog" className="back-link">← Back to Blog</Link>
      
      <article className="blog-post">
        <h1>{post.title}</h1>
        <div className="post-meta">
          <span className="author">By {post.author}</span>
          <span className="date">{post.date}</span>
        </div>
        <p className="post-content">{post.content}</p>
        
        <div className="post-footer">
          <p className="post-id">Post ID: {id}</p>
          <div className="navigation-links">
            {parseInt(id) > 1 && (
              <Link to={`/blog/${parseInt(id) - 1}`} className="nav-post">
                ← Previous Post
              </Link>
            )}
            {parseInt(id) < 6 && (
              <Link to={`/blog/${parseInt(id) + 1}`} className="nav-post">
                Next Post →
              </Link>
            )}
          </div>
        </div>
      </article>
    </div>
  )
}

export default BlogPost
