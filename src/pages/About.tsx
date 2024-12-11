import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <motion.img
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-8"
        />

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-bold text-center mb-6"
        >
          About Me
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-6 text-gray-600 dark:text-gray-300"
        >
          <p>
            Hello! I'm a passionate developer who loves to create and share knowledge about web development,
            particularly in React, TypeScript, and modern web technologies.
          </p>

          <p>
            With several years of experience in the field, I've worked on various projects and learned
            valuable lessons along the way. This blog is my way of giving back to the community and
            sharing what I've learned.
          </p>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'TailwindCSS', 'Node.js', 'Next.js', 'GraphQL'].map((skill) => (
                <span
                  key={skill}
                  className="bg-accent bg-opacity-10 text-accent px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default About 