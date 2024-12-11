import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  BeakerIcon, 
  CommandLineIcon,
  CloudIcon,
  CpuChipIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline'

const techNotes = [
  {
    id: 1,
    date: '2023-12-20',
    title: 'Getting Started with React 18',
    category: 'Frontend',
    icon: CodeBracketIcon,
    content: `
      • Learned about the new concurrent features
      • Implemented automatic batching
      • Explored Suspense and streaming SSR
      • Built custom hooks with useTransition
    `,
    tags: ['React', 'JavaScript', 'Hooks']
  },
  {
    id: 2,
    date: '2023-12-15',
    title: 'Docker Containerization',
    category: 'DevOps',
    icon: BeakerIcon,
    content: `
      • Created multi-stage Dockerfile
      • Set up Docker Compose for development
      • Implemented volume mounting
      • Optimized container size
    `,
    tags: ['Docker', 'DevOps', 'Containers']
  },
  {
    id: 3,
    date: '2023-12-10',
    title: 'AWS Lambda Functions',
    category: 'Cloud',
    icon: CloudIcon,
    content: `
      • Built serverless APIs
      • Implemented API Gateway integration
      • Set up CloudWatch monitoring
      • Created custom IAM roles
    `,
    tags: ['AWS', 'Serverless', 'Cloud']
  },
  {
    id: 4,
    date: '2023-12-05',
    title: 'Machine Learning Basics',
    category: 'AI/ML',
    icon: CpuChipIcon,
    content: `
      • Studied linear regression
      • Implemented basic neural network
      • Explored TensorFlow basics
      • Worked with data preprocessing
    `,
    tags: ['ML', 'Python', 'TensorFlow']
  }
]

const categories = ['All', 'Frontend', 'DevOps', 'Cloud', 'AI/ML']

const TechNotes = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [expandedNote, setExpandedNote] = useState<number | null>(null)

  const filteredNotes = selectedCategory === 'All'
    ? techNotes
    : techNotes.filter(note => note.category === selectedCategory)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Tech Learning Notes</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Documenting my journey through various technologies
        </p>
      </motion.div>

      {/* Categories */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4 mb-12"
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

      {/* Notes Timeline */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-3xl mx-auto"
      >
        {filteredNotes.map((note) => {
          const Icon = note.icon
          const isExpanded = expandedNote === note.id

          return (
            <motion.div
              key={note.id}
              variants={item}
              className="mb-8"
            >
              <motion.div
                className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer
                  ${isExpanded ? 'ring-2 ring-accent' : 'hover:shadow-lg'}`}
                onClick={() => setExpandedNote(isExpanded ? null : note.id)}
                whileHover={{ scale: isExpanded ? 1 : 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-semibold mb-2">{note.title}</h3>
                        <span className="text-sm text-gray-500">{note.date}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-sm font-medium text-accent">
                          {note.category}
                        </span>
                      </div>
                      <motion.div
                        initial={false}
                        animate={{ height: isExpanded ? 'auto' : '0' }}
                        className="overflow-hidden"
                      >
                        <pre className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-wrap font-sans">
                          {note.content}
                        </pre>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {note.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default TechNotes 