import React, { useState, useEffect } from 'react';
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
  ZoomIn,
  Clock,
  TrendingUp,
  Star,
  ArrowRight,
  Play,
  Target,
  Award,
  Sparkles
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Home: React.FC = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const increment1 = 94 / steps;
    const increment2 = 87 / steps;
    const increment3 = 92 / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCounter1(prev => Math.min(prev + increment1, 94));
      setCounter2(prev => Math.min(prev + increment2, 87));
      setCounter3(prev => Math.min(prev + increment3, 92));
      
      if (currentStep >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR';
      utterance.rate = 0.9;
      speechSynthesis.speak(utterance);
    }
  };

  const testimonials = [
    {
      text: "Nunca pensei que seria tão fácil fazer uma consulta online. O simulador me ajudou muito!",
      author: "Maria S., 68 anos",
      rating: 5
    },
    {
      text: "Como profissional, percebi uma redução de 80% nas faltas após implementar este sistema.",
      author: "Dr. João P., Cardiologista",
      rating: 5
    },
    {
      text: "Minha mãe conseguiu fazer a consulta sozinha depois de usar o tutorial. Incrível!",
      author: "Ana R., 42 anos",
      rating: 5
    },
    {
      text: "O suporte de acessibilidade faz toda diferença. Finalmente um site pensado em todos!",
      author: "Carlos M., 55 anos",
      rating: 5
    }
  ];

  const timelineSteps = [
    { title: "Acesse o Simulador", description: "Teste sua câmera e microfone", icon: Camera },
    { title: "Siga o Tutorial", description: "Aprenda passo a passo", icon: BookOpen },
    { title: "Tire Dúvidas", description: "Converse com o assistente", icon: MessageCircle },
    { title: "Faça sua Consulta", description: "Pronto para o atendimento", icon: CheckCircle }
  ];

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

      {/* Stats Counter Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-primary via-primary/90 to-secondary rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Resultados que Fazem Diferença
            </h2>
            <p className="text-primary-foreground/90 text-lg">
              Números que comprovam nossa eficácia
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-2 p-6 bg-background/10 backdrop-blur-sm rounded-2xl transform hover:scale-105 transition-transform">
              <TrendingUp className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
              <div className="text-5xl font-bold text-primary-foreground">
                {Math.round(counter1)}%
              </div>
              <p className="text-primary-foreground/90 font-medium">
                Redução de Faltas
              </p>
            </div>
            <div className="text-center space-y-2 p-6 bg-background/10 backdrop-blur-sm rounded-2xl transform hover:scale-105 transition-transform">
              <Target className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
              <div className="text-5xl font-bold text-primary-foreground">
                {Math.round(counter2)}%
              </div>
              <p className="text-primary-foreground/90 font-medium">
                Pacientes Satisfeitos
              </p>
            </div>
            <div className="text-center space-y-2 p-6 bg-background/10 backdrop-blur-sm rounded-2xl transform hover:scale-105 transition-transform">
              <Award className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
              <div className="text-5xl font-bold text-primary-foreground">
                {Math.round(counter3)}%
              </div>
              <p className="text-primary-foreground/90 font-medium">
                Consultas Bem-Sucedidas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline Section */}
      <section className="container mx-auto px-4 py-16" aria-labelledby="timeline-title">
        <div className="text-center mb-12">
          <h2 id="timeline-title" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sua Jornada em 4 Passos Simples
          </h2>
          <p className="text-lg text-muted-foreground">
            Siga este caminho e esteja 100% preparado
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {timelineSteps.map((step, index) => (
              <div 
                key={index}
                className="group relative"
              >
                <Card className="border-2 hover:border-primary transition-all hover:shadow-xl cursor-pointer transform hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground rounded-full flex items-center justify-center transition-colors">
                          <step.icon className="h-8 w-8" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-bold text-primary">
                            Passo {index + 1}
                          </span>
                          <h3 className="text-xl font-bold text-foreground">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                      <ArrowRight className="h-6 w-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </CardContent>
                </Card>
                {index < timelineSteps.length - 1 && (
                  <div className="w-1 h-6 bg-border ml-8 my-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="bg-muted py-16" aria-labelledby="testimonials-title">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="testimonials-title" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              O Que Dizem Sobre Nós
            </h2>
            <p className="text-lg text-muted-foreground">
              Histórias reais de quem transformou sua experiência com teleconsultas
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                    <Card className="h-full border-2 hover:border-primary transition-colors">
                      <CardContent className="p-8 space-y-4 h-full flex flex-col">
                        <div className="flex gap-1 mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                          ))}
                        </div>
                        <p className="text-lg text-foreground italic flex-grow">
                          "{testimonial.text}"
                        </p>
                        <p className="text-sm font-semibold text-muted-foreground">
                          — {testimonial.author}
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-3xl p-8 md:p-12 border-2 border-secondary/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                <Sparkles className="h-4 w-4" />
                Experimente Agora
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Veja Como é Fácil e Rápido
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nossa plataforma foi desenhada pensando em você. Interface simples, 
                guias claros e suporte em cada etapa. Em menos de 5 minutos você está 
                pronto para sua consulta.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-success-foreground" />
                  </div>
                  <span className="text-foreground">Teste de equipamento em tempo real</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-success-foreground" />
                  </div>
                  <span className="text-foreground">Tutorial interativo com áudio</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-success-foreground" />
                  </div>
                  <span className="text-foreground">Assistente virtual disponível 24/7</span>
                </div>
              </div>
              <Link to="/simulador">
                <Button size="lg" className="text-lg px-8 py-6 h-auto group">
                  <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Começar Demonstração
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center relative overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-center space-y-4 z-10">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto transform group-hover:scale-110 transition-transform">
                    <Play className="h-12 w-12 text-primary-foreground ml-1" />
                  </div>
                  <p className="text-lg font-semibold text-foreground">
                    Demonstração Interativa
                  </p>
                  <p className="text-muted-foreground">
                    Clique para iniciar
                  </p>
                </div>
                {/* Animated rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 border-4 border-primary/30 rounded-full animate-ping" />
                </div>
              </div>
            </div>
          </div>
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
              <div className="space-y-4 p-6 bg-background rounded-2xl hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <ZoomIn className="h-8 w-8 text-accent-foreground" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Lupa de Aumento</h3>
                <p className="text-muted-foreground">
                  Aumente qualquer parte da tela para ler melhor
                </p>
              </div>

              <div className="space-y-4 p-6 bg-background rounded-2xl hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Volume2 className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Leitura em Áudio</h3>
                <p className="text-muted-foreground">
                  Ouça os textos da página com apenas um clique
                </p>
              </div>

              <div className="space-y-4 p-6 bg-background rounded-2xl hover:shadow-lg transition-shadow">
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

      {/* Final CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="border-2 border-primary bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardContent className="p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Pronto para Começar?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Não deixe que dúvidas técnicas impeçam seu atendimento de saúde. 
              Teste agora e veja como é simples!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/simulador">
                <Button size="lg" className="text-lg px-8 py-6 h-auto">
                  Testar Agora Gratuitamente
                </Button>
              </Link>
              <Link to="/como-funciona">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
                  Saiba Mais
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};