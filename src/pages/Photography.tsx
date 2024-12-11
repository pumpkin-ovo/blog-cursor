import { motion } from 'framer-motion'
import { useState } from 'react'

// 这里的图片数据应该来自你的public文件夹
const photos = [
  {
    id: 1,
    title: 'Mountain Landscape',
    category: 'Nature',
    src: '/photos/landscape1.jpg', // 需要在public/photos文件夹中添加实际图片
    description: 'Beautiful mountain landscape at sunset'
  },
  {
    id: 2,
    title: 'Urban Architecture',
    category: 'City',
    src: '/photos/city1.jpg',
    description: 'Modern city architecture'
  },
  {
    id: 3,
    title: 'Portrait',
    category: 'People',
    src: '/photos/portrait1.jpg',
    description: 'Environmental portrait photography'
  },
  // 添加更多图片...
]

const categories = ['All', 'Nature', 'City', 'People']

const Photography = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null)

  const filteredPhotos = selectedCategory === 'All'
    ? photos
    : photos.filter(photo => photo.category === selectedCategory)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-12"
    >
      <motion.h1
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="text-4xl font-bold text-center mb-8"
      >
        Photography Portfolio
      </motion.h1>

      {/* Categories */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex justify-center gap-4 mb-12"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-accent text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-accent/10'
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Photo Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredPhotos.map((photo) => (
          <motion.div
            layout
            key={photo.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="relative group cursor-pointer"
            onClick={() => setSelectedPhoto(photo)}
          >
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
              <img
                src={photo.src}
                alt={photo.title}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 rounded-lg flex items-center justify-center">
              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                <h3 className="text-xl font-semibold mb-2">{photo.title}</h3>
                <p className="text-sm">{photo.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox */}
      {selectedPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative max-w-4xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
              <h3 className="text-2xl font-semibold mb-2">{selectedPhoto.title}</h3>
              <p>{selectedPhoto.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Photography 