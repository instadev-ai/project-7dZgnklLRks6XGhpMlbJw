import { Button } from "./ui/button"
import { ModeToggle } from "./mode-toggle"
import { motion } from "framer-motion"

const headerVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const navItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.3
    }
  }
}

export function Header() {
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-14 items-center px-4">
        <motion.div 
          className="mr-4 flex"
          variants={navItemVariants}
        >
          <a href="/" className="mr-6 flex items-center space-x-2">
            <motion.span 
              className="font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Community
            </motion.span>
          </a>
        </motion.div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-2">
            <motion.div
              variants={navItemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="ghost">Features</Button>
            </motion.div>
            <motion.div
              variants={navItemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="ghost">Roadmap</Button>
            </motion.div>
            <motion.div
              variants={navItemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <ModeToggle />
            </motion.div>
          </nav>
        </div>
      </div>
    </motion.header>
  )
}