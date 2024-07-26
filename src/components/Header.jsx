import { NavLink } from 'react-router-dom';
import { Rocket, Settings } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 bg-gray-800 text-white z-10 border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <NavLink to="/" className="flex items-center space-x-2">
              <Rocket className="h-6 w-6 text-blue-500" />
              <span className="sr-only">CodeLearner</span>
            </NavLink>
            <nav>
              <ul className="flex space-x-4">
                <li><NavLink to="/courses" className="hover:text-blue-400">Courses</NavLink></li>
                <li><NavLink to="/practice" className="hover:text-blue-400">Practice</NavLink></li>
                <li><NavLink to="/roadmap" className="hover:text-blue-400">Roadmap</NavLink></li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="bg-green-600 hover:bg-green-700 text-white border-none">
              Pro
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
              Sign in
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;