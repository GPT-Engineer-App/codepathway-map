import { NavLink } from 'react-router-dom';
import { Rocket } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 bg-background border-b z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center space-x-2">
            <Rocket className="h-6 w-6" />
            <span className="font-bold text-xl">CodeLearner</span>
          </NavLink>
          <nav>
            <ul className="flex space-x-4">
              <li><NavLink to="/courses" className="hover:text-primary">Courses</NavLink></li>
              <li><NavLink to="/practice" className="hover:text-primary">Practice</NavLink></li>
              <li><NavLink to="/roadmap" className="hover:text-primary">Roadmap</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;