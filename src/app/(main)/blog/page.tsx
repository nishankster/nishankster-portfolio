
import MediumFeed from '@/components/MediumFeed'

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
      <p className="text-lg text-gray-600 mb-12 max-w-3xl">
        My latest articles on payments technology, AI, and product development.
        Published on Medium.
      </p>
      <MediumFeed username="nishankster" />
    </div>
  )
}