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

export function CommunityFeed() {
  const [posts, setPosts] = useState<Post[]>(initialPosts)

  const handleUpvote = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, votes: post.votes + 1 } : post
    ))
  }

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold tracking-tight">Feature Requests</h1>
      <div className="grid gap-4">
        {posts.map((post) => (
          <Card key={post.id} className="p-6">
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="flex flex-col items-center space-y-1 h-auto py-4"
                onClick={() => handleUpvote(post.id)}
              >
                <ChevronUp className="h-5 w-5" />
                <span className="text-sm font-medium">{post.votes}</span>
              </Button>
              <div className="space-y-1">
                <h3 className="font-semibold leading-none tracking-tight">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {post.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}