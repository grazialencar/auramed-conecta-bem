import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  User, 
  Lock, 
  Stethoscope, 
  Eye, 
  EyeOff,
  ArrowRight,
  Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const LoginProfissional: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      // This would typically redirect to the professional dashboard
      alert('Funcionalidade de login em desenvolvimento. Em breve você poderá acessar o sistema completo!');
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <Stethoscope className="h-10 w-10 text-primary" aria-hidden="true" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">
            Área do Profissional
          </h1>
          <p className="text-muted-foreground">
            Acesse o sistema para gerenciar seus pacientes e consultas
          </p>
        </div>

        {/* Login Form */}
        <Card className="border-2 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-center flex items-center justify-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Login Seguro
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  E-mail Institucional
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu.email@imrea.org.br"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 text-accessible"
                    required
                    aria-describedby="email-help"
                  />
                </div>
                <p id="email-help" className="text-xs text-muted-foreground">
                  Use seu e-mail institucional cadastrado no sistema
                </p>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Senha
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 text-accessible"
                    required
                    aria-describedby="password-help"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <p id="password-help" className="text-xs text-muted-foreground">
                  Senha fornecida pelo administrador do sistema
                </p>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                className="w-full text-accessible font-medium py-3 h-auto"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                    Entrando...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    Entrar no Sistema
                    <ArrowRight className="h-4 w-4" />
                  </div>
                )}
              </Button>

              {/* Forgot Password */}
              <div className="text-center">
                <Button
                  type="button"
                  variant="ghost"
                  className="text-sm text-primary hover:text-primary/80"
                  onClick={() => alert('Entre em contato com o administrador para recuperar sua senha.')}
                >
                  Esqueceu sua senha?
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Features Preview */}
        <Card className="border-2 bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardContent className="p-6 space-y-4">
            <h3 className="font-semibold text-foreground text-center mb-4">
              Funcionalidades da Área do Profissional
            </h3>
            <div className="grid grid-cols-1 gap-3 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Cadastro e gestão de pacientes</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Relatórios de absenteísmo</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Análise de preparação dos pacientes</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Estatísticas de uso da plataforma</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Back to Home */}
        <div className="text-center">
          <Link to="/">
            <Button variant="ghost" className="text-muted-foreground">
              ← Voltar à página inicial
            </Button>
          </Link>
        </div>

        {/* Contact Support */}
        <Card className="border border-muted bg-muted/20">
          <CardContent className="p-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">
              Precisa de ajuda ou ainda não tem acesso?
            </p>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.location.href = 'mailto:suporte@auramed.com.br'}
            >
              Entrar em Contato
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};