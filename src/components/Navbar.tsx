
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-streaming-background/95 backdrop-blur-sm border-b border-streaming-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-streaming-primary to-streaming-secondary bg-clip-text text-transparent">
              WatchWhisper
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-streaming-foreground hover:text-streaming-primary transition-colors">
              Home
            </Link>
            <Link to="/browse" className="text-streaming-foreground hover:text-streaming-primary transition-colors">
              Browse
            </Link>
          </nav>

          {/* Search & User Actions (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-streaming-foreground/60" size={18} />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-10 bg-streaming-muted text-streaming-foreground border-streaming-border focus:border-streaming-primary w-64"
              />
            </div>
            <Button variant="ghost" className="text-streaming-foreground hover:bg-streaming-muted">
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-streaming-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-streaming-background border-b border-streaming-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-streaming-foreground/60" size={18} />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-10 bg-streaming-muted text-streaming-foreground border-streaming-border"
              />
            </div>
            <Link 
              to="/" 
              className="block py-2 text-streaming-foreground hover:text-streaming-primary"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/browse" 
              className="block py-2 text-streaming-foreground hover:text-streaming-primary"
              onClick={() => setIsOpen(false)}
            >
              Browse
            </Link>
            <Button variant="ghost" className="justify-start text-streaming-foreground hover:bg-streaming-muted">
              Sign In
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
