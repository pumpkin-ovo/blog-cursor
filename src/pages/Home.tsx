import { motion } from 'framer-motion'

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: '今天的心情',
    description: '今天是个好天气，我去公园散步，看到了很多小动物...',
    mood: 'happy', // happy, sad, excited, calm
    createdAt: '2023-12-20',
    imageUrl: '/blog-images/park.jpg'
  },
  {
    id: 2,
    title: '学习React的一天',
    description: '今天学习了React的新特性，感觉收获很多...',
    mood: 'excited',
    createdAt: '2023-12-19',
    imageUrl: '/blog-images/coding.jpg'
  },
  {
    id: 3,
    title: '雨天的思考',
    description: '窗外下着雨，我在想一些关于未来的事情...',
    mood: 'calm',
    createdAt: '2023-12-18',
    imageUrl: '/blog-images/rain.jpg'
  }
]

const moodEmojis = {
  happy: '😊',
  sad: '😢',
  excited: '🎉',
  calm: '😌'
}

const Home = () => {
  return (
    <div className="min-h-screen bg-dark-500">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden bg-dark-400 py-24 border-b border-pink-dark/20"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <motion.div
              className="flex justify-center mb-6"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img src="/pumpkin.svg" alt="Pumpkin" className="w-24 h-24" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-display mb-6 text-pink-DEFAULT">
              Welcome to Pumpkin
            </h1>
            <p className="text-xl text-pink-light max-w-2xl mx-auto">
              分享生活，记录心情，在这里找到属于你的故事空间
            </p>
          </div>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-pink-DEFAULT/5 to-transparent" />
        </div>
      </motion.div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              className="bg-dark-400 rounded-lg overflow-hidden shadow-lg border border-pink-dark/20 hover:border-pink-DEFAULT/50 transition-all duration-300"
            >
              {post.imageUrl && (
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="object-cover w-full h-48"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-semibold text-pink-light hover:text-pink-DEFAULT transition-colors">
                    {post.title}
                  </h2>
                  <span className="text-2xl" role="img" aria-label="mood">
                    {moodEmojis[post.mood as keyof typeof moodEmojis]}
                  </span>
                </div>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {post.description}
                </p>
                <div className="flex justify-between items-center">
                  <time className="text-sm text-pink-light/60">
                    {post.createdAt}
                  </time>
                  <button className="text-pink-DEFAULT hover:text-pink-light transition-colors">
                    阅读更多 →
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Home 