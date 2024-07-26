import { Home, BookOpen, Code, Map } from "lucide-react";
import Index from "./pages/Index.jsx";
import Roadmap from "./pages/Roadmap.jsx";
import Courses from "./pages/Courses.jsx";
import Practice from "./pages/Practice.jsx";

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
    page: <Courses />,
  },
  {
    title: "Practice",
    to: "/practice",
    icon: <Code className="h-4 w-4" />,
    page: <Practice />,
  },
  {
    title: "Roadmap",
    to: "/roadmap",
    icon: <Map className="h-4 w-4" />,
    page: <Roadmap />,
  },
];