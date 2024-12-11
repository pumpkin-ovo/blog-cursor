const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-md mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Personal Blog. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://twitter.com" className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent">
              Twitter
            </a>
            <a href="https://github.com" className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent">
              GitHub
            </a>
            <a href="https://linkedin.com" className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 