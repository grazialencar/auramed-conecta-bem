import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-muted border-t-2 border-border mt-auto" role="contentinfo">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/d0ff8af9-60d8-499c-922f-d0d2de03cbf4.png" 
              alt="Auramed Logo"
              className="h-10 w-auto"
            />
            <p className="text-muted-foreground text-accessible leading-relaxed">
              Reduzindo o absenteísmo em teleconsultas através de uma solução acessível e intuitiva.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-lg">
              Navegação
            </h3>
            <nav className="space-y-2" aria-label="Links do rodapé">
              <Link 
                to="/" 
                className="block text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded p-1 -m-1"
              >
                Página Inicial
              </Link>
              <Link 
                to="/como-funciona" 
                className="block text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded p-1 -m-1"
              >
                Como Funciona
              </Link>
              <Link 
                to="/tutorial" 
                className="block text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded p-1 -m-1"
              >
                Tutorial
              </Link>
              <Link 
                to="/simulador" 
                className="block text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded p-1 -m-1"
              >
                Simular Consulta
              </Link>
              <Link 
                to="/faq" 
                className="block text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded p-1 -m-1"
              >
                Perguntas Frequentes
              </Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-lg">
              Contato
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" aria-hidden="true" />
                <span className="text-muted-foreground text-accessible">
                  contato@auramed.com.br
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" aria-hidden="true" />
                <span className="text-muted-foreground text-accessible">
                  (11) 9999-9999
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" aria-hidden="true" />
                <span className="text-muted-foreground text-accessible">
                  IMREA - Instituto de Medicina Física e Reabilitação
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-muted-foreground text-accessible">
            © 2024 Auramed. Todos os direitos reservados. 
            <span className="block mt-1">
              Projeto desenvolvido para redução do absenteísmo em teleconsultas.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};