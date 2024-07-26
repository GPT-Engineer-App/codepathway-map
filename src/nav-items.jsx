import { Home, BookOpen, Code, Map } from "lucide-react";
import Index from "./pages/Index.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Courses",
    to: "/courses",
    icon: <BookOpen className="h-4 w-4" />,
    page: <div>Courses Page</div>,
  },
  {
    title: "Practice",
    to: "/practice",
    icon: <Code className="h-4 w-4" />,
    page: <div>Practice Page</div>,
  },
  {
    title: "Roadmap",
    to: "/roadmap",
    icon: <Map className="h-4 w-4" />,
    page: <div>Roadmap Page</div>,
  },
];