import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <div className="text-xl font-bold cursor-pointer flex items-center">
            <span className="text-primary">ad</span>Task.ai
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-8 text-sm text-muted-foreground">
          <Link href="/resources" className="hover:text-foreground transition-colors">Resources</Link>
          <Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link>
          <Link href="/contact" className="hover:text-foreground transition-colors">Contact Us</Link>
        </div>

        <Button variant="default" className="rounded-full">Try Now for Free</Button>
      </div>
    </nav>
  );
}