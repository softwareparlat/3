import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Code, Menu, X } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
  onAuthClick: (mode: "login" | "register") => void;
}

export default function Layout({ children, onAuthClick }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-card/80 backdrop-blur-md border-b border-border z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Code className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">SoftwarePar</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-foreground hover:text-primary transition-colors duration-200"
                data-testid="nav-inicio"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                data-testid="nav-servicios"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('precios')}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                data-testid="nav-precios"
              >
                Precios
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                data-testid="nav-contacto"
              >
                Contacto
              </button>
              
              <div className="flex items-center space-x-3">
                <Button 
                  variant="ghost" 
                  onClick={() => onAuthClick('login')}
                  data-testid="button-login"
                >
                  Iniciar Sesión
                </Button>
                <Button 
                  onClick={() => onAuthClick('register')}
                  data-testid="button-register"
                >
                  Registrarse
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <div className="px-4 py-3 space-y-3">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="block w-full text-left text-foreground hover:text-primary py-2"
                data-testid="mobile-nav-inicio"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="block w-full text-left text-muted-foreground hover:text-primary py-2"
                data-testid="mobile-nav-servicios"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('precios')}
                className="block w-full text-left text-muted-foreground hover:text-primary py-2"
                data-testid="mobile-nav-precios"
              >
                Precios
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="block w-full text-left text-muted-foreground hover:text-primary py-2"
                data-testid="mobile-nav-contacto"
              >
                Contacto
              </button>
              <div className="pt-3 border-t border-border space-y-2">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start"
                  onClick={() => onAuthClick('login')}
                  data-testid="mobile-button-login"
                >
                  Iniciar Sesión
                </Button>
                <Button 
                  className="w-full"
                  onClick={() => onAuthClick('register')}
                  data-testid="mobile-button-register"
                >
                  Registrarse
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {children}
    </div>
  );
}
