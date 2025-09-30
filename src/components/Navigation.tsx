import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Yoga & Wellness", path: "/yoga-wellness" },
    { name: "Media", path: "/media" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-gradient-card backdrop-blur-sm border-b border-border shadow-soft">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex justify-center md:justify-start py-3">
          <Link to="/" className="flex items-center space-x-2 font-bold text-lg sm:text-xl text-primary">
            <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
            <span>chantinyoga</span>
          </Link>
        </div>

        {/* Navigation Links - Always Visible */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-4 md:gap-6 pb-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-xs sm:text-sm md:text-base font-medium transition-colors hover:text-primary px-2 py-1.5 rounded-md ${
                isActive(item.path) ? "text-primary bg-primary/10" : "text-muted-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button variant="default" size="sm" className="bg-gradient-primary shadow-soft text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2">
            Book Consultation
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;