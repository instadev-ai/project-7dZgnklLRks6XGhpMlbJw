import { Button } from "./ui/button"
import { ModeToggle } from "./mode-toggle"

export function Header() {
  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center px-4">
        <div className="mr-4 flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Community</span>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-2">
            <Button variant="ghost">Features</Button>
            <Button variant="ghost">Roadmap</Button>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}