import { NavLink } from 'react-router-dom';
import { Rocket } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white border-b z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center space-x-2">
            <Rocket className="h-6 w-6 text-purple-600" />
            <span className="font-bold text-xl text-purple-600">CodeLearner</span>
          </NavLink>
          <nav>
            <ul className="flex space-x-4">
              <li><NavLink to="/courses" className="hover:text-purple-600">Courses</NavLink></li>
              <li><NavLink to="/practice" className="hover:text-purple-600">Practice</NavLink></li>
              <li><NavLink to="/roadmap" className="hover:text-purple-600">Roadmap</NavLink></li>
            </ul>
          </nav>
          <Button variant="outline">Sign In</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;