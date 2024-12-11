import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  HomeIcon, 
  BookOpenIcon, 
  CameraIcon, 
  CodeBracketIcon,
  UserIcon,
  ChatBubbleLeftIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  
  const navItems = [
    { name: 'Home', path: '/', icon: HomeIcon },
    { name: 'Blog', path: '/blog', icon: BookOpenIcon },
    { name: 'Photography', path: '/photography', icon: CameraIcon },
    { name: 'Tech Notes', path: '/tech-notes', icon: CodeBracketIcon },
    { name: 'About', path: '/about', icon: UserIcon },
    { name: 'Contact', path: '/contact', icon: ChatBubbleLeftIcon },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <motion.nav 
      className="bg-dark-400 shadow-lg sticky top-0 z-50 border-b border-pink-dark/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <motion.img 
              src="/pumpkin.svg" 
              alt="Pumpkin Logo" 
              className="w-10 h-10"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <span className="text-2xl font-display text-pink-DEFAULT">Pumpkin</span>
          </Link>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-pink-light hover:text-pink-DEFAULT transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center gap-1 px-3 py-2 rounded-md transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-pink-DEFAULT bg-pink-DEFAULT/10'
                      : 'text-pink-light hover:text-pink-DEFAULT hover:bg-pink-DEFAULT/5'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: "auto", marginTop: 16 },
            closed: { opacity: 0, height: 0, marginTop: 0 }
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-md transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-pink-DEFAULT bg-pink-DEFAULT/10'
                      : 'text-pink-light hover:text-pink-DEFAULT hover:bg-pink-DEFAULT/5'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar 