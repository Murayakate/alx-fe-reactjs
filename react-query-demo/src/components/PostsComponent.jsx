import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import '../styles/PostsComponent.css'

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!response.ok) {
    throw new Error('Failed to fetch posts')
  }
  return response.json()
}

const PostsComponent = () => {
  const [showDetails, setShowDetails] = useState(false)

  const { data: posts, isLoading, isError, error, refetch, isFetching } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 10, // 10 minutes
    refetchOnWindowFocus: true,
    keepPreviousData: true,
  })

  if (isLoading) {
    return <div className="loading">Loading posts...</div>
  }

  if (isError) {
    return (
      <div className="error">
        <p>Error fetching posts: {error?.message}</p>
        <button onClick={() => refetch()} className="refetch-btn">
          Try Again
        </button>
      </div>
    )
  }

  return (
    <div className="posts-container">
      <div className="controls">
        <button 
          onClick={() => refetch()} 
          disabled={isFetching}
          className="refetch-btn"
        >
          {isFetching ? 'Refetching...' : 'Refetch Posts'}
        </button>
        <button 
          onClick={() => setShowDetails(!showDetails)}
          className="toggle-btn"
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
      </div>

      <div className="cache-info">
        <p>Data refetch interaction: Click "Refetch Posts" to manually update the data on demand</p>
        <p>Caching demonstrated: Data is cached for 10 minutes - navigate away and return to see instant load</p>
      </div>

      <div className="posts-grid">
        {posts?.slice(0, 10).map((post) => (
          <div key={post.id} className="post-card">
            <h3>Post #{post.id}</h3>
            <h4>{post.title}</h4>
            {showDetails && (
              <p className="post-body">{post.body}</p>
            )}
            <p className="post-user">User ID: {post.userId}</p>
          </div>
        ))}
      </div>

      <p className="total-posts">Total posts available: {posts?.length}</p>
    </div>
  )
}

export default PostsComponent
