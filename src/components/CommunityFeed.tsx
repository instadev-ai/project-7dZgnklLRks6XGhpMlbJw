import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { ChevronUp } from "lucide-react"

interface Post {
  id: number
  title: string
  description: string
  votes: number
}

const initialPosts: Post[] = [
  {
    id: 1,
    title: "Add Dark Mode Support",
    description: "Implement a system-wide dark mode for better night-time viewing",
    votes: 42,
  },
  {
    id: 2,
    title: "Mobile App Integration",
    description: "Create native mobile apps for iOS and Android platforms",
    votes: 38,
  },
  {
    id: 3,
    title: "API Documentation",
    description: "Comprehensive API documentation with examples and use cases",
    votes: 25,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  show: { 
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
}

const voteVariants = {
  tap: { scale: 0.95 },
  hover: { scale: 1.05 }
}

export function CommunityFeed() {
  const [posts, setPosts] = useState<Post[]>(initialPosts)

  const handleUpvote = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, votes: post.votes + 1 } : post
    ))
  }

  return (
    <motion.div 
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="space-y-4"
    >
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold tracking-tight"
      >
        Feature Requests
      </motion.h1>
      
      <motion.div 
        variants={containerVariants}
        className="grid gap-4"
      >
        <AnimatePresence>
          {posts.map((post) => (
            <motion.div
              key={post.id}
              variants={cardVariants}
              layout
            >
              <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="flex gap-4">
                  <motion.div
                    whileHover="hover"
                    whileTap="tap"
                    variants={voteVariants}
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex flex-col items-center space-y-1 h-auto py-4"
                      onClick={() => handleUpvote(post.id)}
                    >
                      <motion.div
                        whileHover={{ y: -2 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <ChevronUp className="h-5 w-5" />
                      </motion.div>
                      <motion.span 
                        key={post.votes}
                        initial={{ scale: 1.2, color: "#8B5CF6" }}
                        animate={{ scale: 1, color: "currentColor" }}
                        className="text-sm font-medium"
                      >
                        {post.votes}
                      </motion.span>
                    </Button>
                  </motion.div>
                  
                  <div className="space-y-1">
                    <motion.h3 
                      className="font-semibold leading-none tracking-tight"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {post.title}
                    </motion.h3>
                    <motion.p 
                      className="text-sm text-muted-foreground"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {post.description}
                    </motion.p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}