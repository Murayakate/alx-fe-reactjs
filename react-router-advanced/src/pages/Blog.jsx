import { Link } from 'react-router-dom'
import '../styles/Blog.css'

const blogPosts = [
  { id: 1, title: 'Getting Started with React Router', excerpt: 'Learn the basics of React Router and navigation' },
  { id: 2, title: 'Nested Routes in React', excerpt: 'Explore how to create nested routes for complex UIs' },
  { id: 3, title: 'Dynamic Routing Patterns', excerpt: 'Master dynamic routes with URL parameters' },
  { id: 4, title: 'Protected Routes & Auth', excerpt: 'Implement authentication and protected pages' },
  { id: 5, title: 'Advanced Routing Techniques', excerpt: 'Deep dive into advanced routing patterns' },
  { id: 6, title: 'React Router Best Practices', excerpt: 'Best practices for scalable routing' },
]

function Blog() {
  return (
    <div className="blog-container">
      <h1>Blog Posts</h1>
      <p className="blog-intro">Click on any post to view the full article with dynamic routing</p>
      
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <Link to={`/blog/${post.id}`} className="read-more">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
