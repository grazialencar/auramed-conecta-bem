import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { User, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background border-b-2 border-border sticky top-0 z-40 shadow-sm" role="banner">
      {/* Skip to main content link */}
      <a 
        href="#main-content" 
        className="skip-link"
        onFocus={(e) => e.currentTarget.focus()}
      >
        Pular para o conteúdo principal
      </a>
      
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-2 -m-2"
            aria-label="Auramed - Página inicial"
          >
            <img 
              src="/lovable-uploads/d0ff8af9-60d8-499c-922f-d0d2de03cbf4.png" 
              alt="Auramed Logo - Solução para teleconsultas"
              className="h-12 w-auto group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1" role="navigation" aria-label="Navegação principal">
            <Link to="/">
              <Button 
                variant={isActive('/') ? 'default' : 'ghost'}
                className="text-accessible font-medium"
                aria-current={isActive('/') ? 'page' : undefined}
              >
                Início
              </Button>
            </Link>
            <Link to="/como-funciona">
              <Button 
                variant={isActive('/como-funciona') ? 'default' : 'ghost'}
                className="text-accessible font-medium"
                aria-current={isActive('/como-funciona') ? 'page' : undefined}
              >
                Como Funciona
              </Button>
            </Link>
            <Link to="/sobre">
              <Button 
                variant={isActive('/sobre') ? 'default' : 'ghost'}
                className="text-accessible font-medium"
                aria-current={isActive('/sobre') ? 'page' : undefined}
              >
                Sobre o Projeto
              </Button>
            </Link>
            <Link to="/faq">
              <Button 
                variant={isActive('/faq') ? 'default' : 'ghost'}
                className="text-accessible font-medium"
                aria-current={isActive('/faq') ? 'page' : undefined}
              >
                Dúvidas (FAQ)
              </Button>
            </Link>
          </nav>

          {/* Professional Access & Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Mobile Hamburger Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="md:hidden text-accessible"
                  aria-label="Abrir menu de navegação"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-background">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-foreground">Menu</h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setMobileMenuOpen(false)}
                      aria-label="Fechar menu"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <nav className="flex flex-col space-y-2" role="navigation" aria-label="Navegação móvel">
                    <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                      <Button 
                        variant={isActive('/') ? 'default' : 'ghost'}
                        className="w-full justify-start text-accessible font-medium"
                      >
                        Início
                      </Button>
                    </Link>
                    <Link to="/como-funciona" onClick={() => setMobileMenuOpen(false)}>
                      <Button 
                        variant={isActive('/como-funciona') ? 'default' : 'ghost'}
                        className="w-full justify-start text-accessible font-medium"
                      >
                        Como Funciona
                      </Button>
                    </Link>
                    <Link to="/sobre" onClick={() => setMobileMenuOpen(false)}>
                      <Button 
                        variant={isActive('/sobre') ? 'default' : 'ghost'}
                        className="w-full justify-start text-accessible font-medium"
                      >
                        Sobre o Projeto
                      </Button>
                    </Link>
                    <Link to="/faq" onClick={() => setMobileMenuOpen(false)}>
                      <Button 
                        variant={isActive('/faq') ? 'default' : 'ghost'}
                        className="w-full justify-start text-accessible font-medium"
                      >
                        Dúvidas (FAQ)
                      </Button>
                    </Link>
                    
                    <div className="border-t pt-4 mt-6">
                      <Link to="/login-profissional" onClick={() => setMobileMenuOpen(false)}>
                        <Button 
                          variant="outline" 
                          className="w-full justify-start text-accessible font-medium bg-card hover:bg-muted border-2"
                        >
                          <User className="h-4 w-4 mr-2" aria-hidden="true" />
                          Área do Profissional
                        </Button>
                      </Link>
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>

            {/* Desktop Professional Access */}
            <Link to="/login-profissional" className="hidden md:block">
              <Button 
                variant="outline" 
                className="text-accessible font-medium bg-card hover:bg-muted border-2"
                aria-label="Área do profissional de saúde"
              >
                <User className="h-4 w-4 mr-2" aria-hidden="true" />
                Área do Profissional
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};