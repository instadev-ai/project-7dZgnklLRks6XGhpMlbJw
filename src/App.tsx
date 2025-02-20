import { ThemeProvider } from "./components/theme-provider"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { CommunityFeed } from "./components/CommunityFeed"
import { Header } from "./components/Header"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="min-h-screen bg-background">
          <Header />
          <main className="container mx-auto px-4 py-6">
            <CommunityFeed />
          </main>
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App