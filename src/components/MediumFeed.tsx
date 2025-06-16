'use client'
import { useEffect, useState } from 'react'
import { FaMedium } from 'react-icons/fa'
import Image from 'next/image' // Added for image optimization

interface MediumPost {
  title: string
  pubDate: string
  link: string
  thumbnail: string
  description: string
}

export default function MediumFeed({ username = 'nishankster' }: { username?: string }) {
  const [posts, setPosts] = useState<MediumPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`
        )
        const data = await res.json()
        if (data.status === 'ok') setPosts(data.items.slice(0, 5))
        else setError('Failed to load articles')
      } catch {
        setError('Network error')
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [username])

  if (loading) return <div className="text-center py-12">Loading articles...</div>
  if (error) return <div className="text-center py-12 text-red-500">{error}</div>
  if (!posts.length) return <div className="text-center py-12">No articles found</div>

  return (
    <div className="space-y-10">
      {posts.map((post) => (
        <article key={post.link} className="group">
          <div className="flex items-center gap-2 text-gray-500 mb-2">
            <FaMedium className="text-green-600" />
            <span className="text-sm">Medium</span>
            <span>•</span>
            <time className="text-sm">
              {new Date(post.pubDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </time>
          </div>
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-blue-600 transition-colors"
          >
            <h3 className="text-2xl font-bold mb-2 group-hover:underline">
              {post.title}
            </h3>
            {post.thumbnail && (
              <Image
                src={post.thumbnail}
                alt={post.title}
                width={800}
                height={450}
                className="w-full h-48 object-cover rounded-lg mb-3"
                loading="lazy"
              />
            )}
            <p className="text-gray-600 line-clamp-2">
              {post.description.replace(/<[^>]+>/g, '')}
            </p>
          </a>
        </article>
      ))}
    </div>
  )
}