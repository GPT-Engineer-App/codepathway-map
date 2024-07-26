import { NavLink } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 bg-background text-foreground z-10 border-b border-border">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <NavLink to="/" className="flex items-center space-x-2">
              <img src="/neetcode-logo.png" alt="NeetCode" className="h-8 w-8" />
              <span className="font-bold text-lg">NeetCode</span>
            </NavLink>
            <nav>
              <ul className="flex space-x-4">
                <li><NavLink to="/courses" className="hover:text-primary">Courses</NavLink></li>
                <li><NavLink to="/practice" className="hover:text-primary">Practice</NavLink></li>
                <li><NavLink to="/roadmap" className="hover:text-primary">Roadmap</NavLink></li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 border-none">
              Pro
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="text-foreground hover:text-primary"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            <Button variant="outline" size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
              Sign in
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;