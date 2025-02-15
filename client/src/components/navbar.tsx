import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <div className="text-xl font-bold cursor-pointer">adTask.ai</div>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#features">Resources</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#contact">Contact Us</Link>
        </div>

        <Button variant="default">Try Now for Free</Button>
      </div>
    </nav>
  );
}
