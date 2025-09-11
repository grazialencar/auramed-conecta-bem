import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <h2 className="text-2xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          Oops! A página que você está procurando não existe ou foi movida.
        </p>
        <div className="space-y-4">
          <a href="/">
            <Button size="lg" className="text-lg px-8 py-3 h-auto">
              Voltar à Página Inicial
            </Button>
          </a>
          <p className="text-sm text-muted-foreground">
            Você tentou acessar: <code className="bg-muted px-2 py-1 rounded">{location.pathname}</code>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
