import { navItems } from "@/nav-items";
import { Package2, RotateCcw, HelpCircle, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";
import { SidebarNavLink } from "./SidebarNavLink";
import { Button } from "@/components/ui/button";

export const NavbarAndSidebar = () => (
  <div className="hidden border-r bg-muted/40 md:block">
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <NavLink to="/" className="flex items-center gap-2 font-semibold">
          <Package2 className="h-6 w-6" />
          <span>Acme Inc</span>
        </NavLink>
      </div>
      <div className="flex-1 overflow-auto">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-2">
          {navItems.map((item) => (
            <SidebarNavLink key={item.to} to={item.to}>
              {item.icon}
              {item.title}
            </SidebarNavLink>
          ))}
        </nav>
      </div>
      <div className="mt-auto p-4 flex items-center justify-between border-t">
        <Button variant="outline" size="sm" className="w-16">
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset
        </Button>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <HelpCircle className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  </div>
);