import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Camera, 
  BookOpen, 
  MessageCircle, 
  Shield, 
  Heart, 
  Users,
  CheckCircle,
  Accessibility as AccessibilityIcon,
  Volume2,
  ZoomIn
} from 'lucide-react';

export const Home: React.FC = () => {
  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR';
      utterance.rate = 0.9;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="container mx-auto px-4 text-center space-y-8" aria-labelledby="hero-title">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 
            id="hero-title"
            className="text-4xl md:text-6xl font-bold text-foreground leading-tight"
            onClick={() => speakText('Sua teleconsulta, mais fácil e sem faltas.')}
          >
            Sua teleconsulta, mais fácil e sem faltas.
          </h1>
          <p 
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            onClick={() => speakText('Preparamos você para sua consulta online de forma simples. Garanta que tudo funcione bem e não perca seu atendimento.')}
          >
            Preparamos você para sua consulta online de forma simples. 
            Garanta que tudo funcione bem e não perca seu atendimento.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/simulador">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-hover text-primary-foreground text-lg px-8 py-6 h-auto font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              aria-label="Ir para o simulador de consulta"
            >
              Quero testar minha consulta agora
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => speakText(document.querySelector('main')?.textContent || '')}
            aria-label="Ouvir o conteúdo da página"
            className="text-muted-foreground"
          >
            <Volume2 className="h-4 w-4 mr-2" />
            Ouvir página
          </Button>
        </div>

        {/* Hero Image Placeholder */}
        <div className="mt-12">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border-2 border-primary/20">
            <div className="aspect-video bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-8 w-8 text-success-foreground" />
                </div>
                <p className="text-lg font-medium text-foreground">
                  Teleconsulta funcionando perfeitamente
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section 
        className="bg-muted py-16" 
        aria-labelledby="how-it-works-title"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 
              id="how-it-works-title"
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              onClick={() => speakText('Como Funciona: Um passo de cada vez')}
            >
              Como Funciona: Um passo de cada vez
            </h2>
            <p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              onClick={() => speakText('Nossa solução ajuda você a se preparar completamente para sua teleconsulta')}
            >
              Nossa solução ajuda você a se preparar completamente para sua teleconsulta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <Card className="text-center p-6 border-2 hover:border-primary transition-colors hover:shadow-lg">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Camera className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Teste sua Câmera
                </h3>
                <p 
                  className="text-muted-foreground leading-relaxed"
                  onClick={() => speakText('Antes da consulta, nosso simulador avisa se sua imagem está boa para o médico ver você bem.')}
                >
                  Antes da consulta, nosso simulador avisa se sua imagem está boa 
                  para o médico ver você bem.
                </p>
                <Link to="/simulador">
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    aria-label="Testar câmera no simulador"
                  >
                    Saiba mais...
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="text-center p-6 border-2 hover:border-primary transition-colors hover:shadow-lg">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
                  <BookOpen className="h-8 w-8 text-secondary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Aprenda a Usar
                </h3>
                <p 
                  className="text-muted-foreground leading-relaxed"
                  onClick={() => speakText('Temos um guia completo em texto e áudio para você seguir, sem complicações.')}
                >
                  Temos um guia completo em texto e áudio para você seguir, 
                  sem complicações.
                </p>
                <Link to="/tutorial">
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    aria-label="Ver tutorial completo"
                  >
                    Ver o passo a passo...
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="text-center p-6 border-2 hover:border-primary transition-colors hover:shadow-lg">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle className="h-8 w-8 text-accent-foreground" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Tire suas Dúvidas
                </h3>
                <p 
                  className="text-muted-foreground leading-relaxed"
                  onClick={() => speakText('Nosso assistente virtual responde suas perguntas a qualquer hora do dia.')}
                >
                  Nosso assistente virtual responde suas perguntas a qualquer 
                  hora do dia.
                </p>
                <Link to="/faq">
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    aria-label="Conversar com assistente virtual"
                  >
                    Conversar agora...
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16" aria-labelledby="benefits-title">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* For Patients */}
          <Card className="p-8 border-2">
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-success" aria-hidden="true" />
                </div>
                <h3 
                  className="text-2xl font-bold text-foreground mb-4"
                  onClick={() => speakText('Mais confiança no atendimento online')}
                >
                  Mais confiança no atendimento online
                </h3>
              </div>
              <ul className="space-y-4" role="list">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" aria-hidden="true" />
                  <span 
                    className="text-muted-foreground"
                    onClick={() => speakText('Menos ansiedade com a tecnologia')}
                  >
                    Menos ansiedade com a tecnologia
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" aria-hidden="true" />
                  <span 
                    className="text-muted-foreground"
                    onClick={() => speakText('Ajuda para se sentir mais preparado')}
                  >
                    Ajuda para se sentir mais preparado
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" aria-hidden="true" />
                  <span 
                    className="text-muted-foreground"
                    onClick={() => speakText('Garantia de que seu atendimento acontecerá')}
                  >
                    Garantia de que seu atendimento acontecerá
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* For Healthcare Professionals */}
          <Card className="p-8 border-2">
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <h3 
                  className="text-2xl font-bold text-foreground mb-4"
                  onClick={() => speakText('Otimize seu tempo e organize seus atendimentos')}
                >
                  Otimize seu tempo e organize seus atendimentos
                </h3>
              </div>
              <ul className="space-y-4" role="list">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" aria-hidden="true" />
                  <span 
                    className="text-muted-foreground"
                    onClick={() => speakText('Redução no número de faltas')}
                  >
                    Redução no número de faltas
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" aria-hidden="true" />
                  <span 
                    className="text-muted-foreground"
                    onClick={() => speakText('Pacientes mais preparados para a consulta')}
                  >
                    Pacientes mais preparados para a consulta
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" aria-hidden="true" />
                  <span 
                    className="text-muted-foreground"
                    onClick={() => speakText('Fácil acesso para cadastrar e gerenciar seus pacientes')}
                  >
                    Fácil acesso para cadastrar e gerenciar seus pacientes
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Accessibility Section */}
      <section 
        className="bg-gradient-to-r from-primary/5 to-secondary/5 py-16" 
        aria-labelledby="accessibility-title"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 
              id="accessibility-title"
              className="text-3xl md:text-4xl font-bold text-foreground"
              onClick={() => speakText('Um site feito para ser usado por todos')}
            >
              Um site feito para ser usado por todos
            </h2>
            <p 
              className="text-lg text-muted-foreground leading-relaxed"
              onClick={() => speakText('Acreditamos que a tecnologia deve ser fácil para todos. Por isso, nosso site conta com recursos especiais')}
            >
              Acreditamos que a tecnologia deve ser fácil para todos. 
              Por isso, nosso site conta com recursos especiais:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <ZoomIn className="h-8 w-8 text-accent-foreground" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Lupa de Aumento</h3>
                <p className="text-muted-foreground">
                  Aumente qualquer parte da tela para ler melhor
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Volume2 className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Leitura em Áudio</h3>
                <p className="text-muted-foreground">
                  Ouça os textos da página com apenas um clique
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
                  <AccessibilityIcon className="h-8 w-8 text-secondary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Alto Contraste</h3>
                <p className="text-muted-foreground">
                  Modo especial para melhor visualização
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};