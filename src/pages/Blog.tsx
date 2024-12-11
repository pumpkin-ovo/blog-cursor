import { motion } from 'framer-motion'

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with React and TypeScript',
    excerpt: 'Learn how to set up a new React project with TypeScript and best practices.',
    date: '2023-12-20',
    category: 'React'
  },
  {
    id: 2,
    title: 'Mastering TailwindCSS',
    excerpt: 'A comprehensive guide to using TailwindCSS in your projects.',
    date: '2023-12-18',
    category: 'CSS'
  },
  {
    id: 3,
    title: 'Animation with Framer Motion',
    excerpt: 'Create beautiful animations in React using Framer Motion.',
    date: '2023-12-15',
    category: 'Animation'
  }
]

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Blog Posts
      </motion.h1>

      <div className="max-w-3xl mx-auto">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
          >
            <span className="text-sm text-accent mb-2 inline-block">
              {post.category}
            </span>
            <h2 className="text-2xl font-semibold mb-3">{post.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {post.excerpt}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">
                {post.date}
              </span>
              <button className="text-accent hover:text-accent-dark transition-colors">
                Read More →
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}

export default Blog 