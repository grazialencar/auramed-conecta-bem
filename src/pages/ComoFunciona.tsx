import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Camera, 
  BookOpen, 
  MessageCircle, 
  CheckCircle, 
  ArrowRight,
  Users,
  Stethoscope,
  Clock,
  Shield,
  Heart,
  Volume2,
  Lightbulb
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const ComoFunciona: React.FC = () => {
  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR';
      utterance.rate = 0.9;
      speechSynthesis.speak(utterance);
    }
  };

  const mainSteps = [
    {
      icon: Camera,
      title: "Teste sua Tecnologia",
      description: "Nosso simulador verifica se sua câmera, áudio e internet estão funcionando perfeitamente para a consulta.",
      details: [
        "Verificação automática da câmera",
        "Teste de qualidade de áudio", 
        "Análise da velocidade da internet",
        "Feedback em tempo real com sugestões"
      ]
    },
    {
      icon: BookOpen,
      title: "Aprenda o Passo a Passo", 
      description: "Tutorial completo em texto e áudio que ensina como se preparar e se comportar durante a teleconsulta.",
      details: [
        "Guia narrado em português claro",
        "Instruções visuais detalhadas",
        "Dicas para melhor posicionamento",
        "Como lidar com problemas técnicos"
      ]
    },
    {
      icon: MessageCircle,
      title: "Tire suas Dúvidas",
      description: "Assistente virtual disponível 24h para responder perguntas e ajudar com preparação da consulta.",
      details: [
        "Respostas instantâneas",
        "Perguntas frequentes atualizadas",
        "Suporte personalizado",
        "Disponível a qualquer hora"
      ]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Menos Tempo Perdido",
      description: "Redução significativa no tempo perdido com consultas canceladas ou remarcadas"
    },
    {
      icon: Shield,
      title: "Mais Segurança",
      description: "Maior confiança dos pacientes na tecnologia e no processo de teleconsulta"
    },
    {
      icon: Heart,
      title: "Melhor Cuidado",
      description: "Atendimento médico mais eficiente com pacientes melhor preparados"
    }
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Header */}
      <section className="container mx-auto px-4 text-center space-y-6" aria-labelledby="como-funciona-title">
        <h1 
          id="como-funciona-title"
          className="text-4xl md:text-5xl font-bold text-foreground"
          onClick={() => speakText('Como Funciona a Solução Auramed')}
        >
          Como Funciona a Solução Auramed
        </h1>
        <p 
          className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          onClick={() => speakText('Entenda como nossa plataforma ajuda pacientes e profissionais de saúde a terem sucesso em teleconsultas.')}
        >
          Entenda como nossa plataforma ajuda pacientes e profissionais de saúde 
          a terem sucesso em teleconsultas.
        </p>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => speakText(document.querySelector('main')?.textContent || '')}
          aria-label="Ouvir conteúdo da página"
          className="text-muted-foreground"
        >
          <Volume2 className="h-4 w-4 mr-2" />
          Ouvir página
        </Button>
      </section>

      {/* Main Process Steps */}
      <section className="container mx-auto px-4 space-y-12" aria-labelledby="processo-title">
        <div className="text-center">
          <h2 
            id="processo-title"
            className="text-3xl font-bold text-foreground mb-4"
            onClick={() => speakText('O Processo em 3 Passos Simples')}
          >
            O Processo em 3 Passos Simples
          </h2>
        </div>

        <div className="space-y-12">
          {mainSteps.map((step, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <step.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-primary">Passo {index + 1}</span>
                        <h3 
                          className="text-2xl font-bold text-foreground"
                          onClick={() => speakText(step.title)}
                        >
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p 
                      className="text-lg text-muted-foreground leading-relaxed"
                      onClick={() => speakText(step.description)}
                    >
                      {step.description}
                    </p>

                    <div className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                          <span 
                            className="text-muted-foreground"
                            onClick={() => speakText(detail)}
                          >
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link to={
                      index === 0 ? "/simulador" : 
                      index === 1 ? "/tutorial" : 
                      "/faq"
                    }>
                      <Button className="mt-4" size="lg">
                        {index === 0 ? "Testar Agora" : 
                         index === 1 ? "Ver Tutorial" : 
                         "Fazer Pergunta"}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
                    <div className="aspect-square bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                      <step.icon className="h-20 w-20 text-primary" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Technology Behind */}
      <section className="bg-muted py-16" aria-labelledby="tecnologia-title">
        <div className="container mx-auto px-4 text-center space-y-12">
          <div>
            <h2 
              id="tecnologia-title"
              className="text-3xl font-bold text-foreground mb-4"
              onClick={() => speakText('A Tecnologia por Trás da Solução')}
            >
              A Tecnologia por Trás da Solução
            </h2>
            <p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              onClick={() => speakText('Utilizamos tecnologias avançadas para garantir a melhor experiência possível.')}
            >
              Utilizamos tecnologias avançadas para garantir a melhor experiência possível.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center border-2">
              <CardContent className="space-y-4">
                <Lightbulb className="h-12 w-12 text-accent-foreground mx-auto" />
                <h3 
                  className="font-semibold text-foreground"
                  onClick={() => speakText('Detecção Facial')}
                >
                  Detecção Facial
                </h3>
                <p 
                  className="text-sm text-muted-foreground"
                  onClick={() => speakText('Algoritmos de Facial Landmark para verificar posicionamento ideal da câmera')}
                >
                  Algoritmos de Facial Landmark para verificar posicionamento ideal da câmera
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center border-2">
              <CardContent className="space-y-4">
                <MessageCircle className="h-12 w-12 text-primary mx-auto" />
                <h3 
                  className="font-semibold text-foreground"
                  onClick={() => speakText('Inteligência Artificial')}
                >
                  Inteligência Artificial
                </h3>
                <p 
                  className="text-sm text-muted-foreground"
                  onClick={() => speakText('Machine Learning para agrupar e responder perguntas frequentes automaticamente')}
                >
                  Machine Learning para agrupar e responder perguntas frequentes automaticamente
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center border-2">
              <CardContent className="space-y-4">
                <Volume2 className="h-12 w-12 text-secondary mx-auto" />
                <h3 
                  className="font-semibold text-foreground"
                  onClick={() => speakText('Síntese de Voz')}
                >
                  Síntese de Voz
                </h3>
                <p 
                  className="text-sm text-muted-foreground"
                  onClick={() => speakText('Narração automática para maior acessibilidade e inclusão digital')}
                >
                  Narração automática para maior acessibilidade e inclusão digital
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center border-2">
              <CardContent className="space-y-4">
                <Shield className="h-12 w-12 text-success mx-auto" />
                <h3 
                  className="font-semibold text-foreground"
                  onClick={() => speakText('Segurança de Dados')}
                >
                  Segurança de Dados
                </h3>
                <p 
                  className="text-sm text-muted-foreground"
                  onClick={() => speakText('Processamento local dos dados de vídeo, sem armazenamento na nuvem')}
                >
                  Processamento local dos dados de vídeo, sem armazenamento na nuvem
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-4 space-y-12" aria-labelledby="beneficios-title">
        <div className="text-center">
          <h2 
            id="beneficios-title"
            className="text-3xl font-bold text-foreground mb-4"
            onClick={() => speakText('Benefícios Comprovados')}
          >
            Benefícios Comprovados
          </h2>
          <p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            onClick={() => speakText('Nossa solução já demonstra resultados positivos em testes com pacientes reais.')}
          >
            Nossa solução já demonstra resultados positivos em testes com pacientes reais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center p-8 border-2 hover:border-primary transition-colors">
              <CardContent className="space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <benefit.icon className="h-10 w-10 text-primary" aria-hidden="true" />
                </div>
                <h3 
                  className="text-xl font-semibold text-foreground"
                  onClick={() => speakText(benefit.title)}
                >
                  {benefit.title}
                </h3>
                <p 
                  className="text-muted-foreground leading-relaxed"
                  onClick={() => speakText(benefit.description)}
                >
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* For Healthcare Professionals */}
      <section className="bg-gradient-to-r from-primary/5 to-secondary/5 py-16" aria-labelledby="profissionais-title">
        <div className="container mx-auto px-4 text-center space-y-8">
          <div>
            <h2 
              id="profissionais-title"
              className="text-3xl font-bold text-foreground mb-4"
              onClick={() => speakText('Para Profissionais de Saúde')}
            >
              Para Profissionais de Saúde
            </h2>
            <p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              onClick={() => speakText('Gerencie e prepare seus pacientes para teleconsultas mais eficientes.')}
            >
              Gerencie e prepare seus pacientes para teleconsultas mais eficientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 border-2 text-left">
              <CardContent className="space-y-4">
                <Stethoscope className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">
                  Cadastro de Pacientes
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Interface simples para cadastrar e gerenciar informações dos seus pacientes, 
                  incluindo histórico de teleconsultas e preparação.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 text-left">
              <CardContent className="space-y-4">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">
                  Relatórios e Analytics
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Acompanhe estatísticas de absenteísmo, qualidade das consultas e 
                  nível de preparação dos seus pacientes.
                </p>
              </CardContent>
            </Card>
          </div>

          <Link to="/login-profissional">
            <Button size="lg" className="text-lg px-8 py-3 h-auto mt-8">
              <Stethoscope className="h-5 w-5 mr-2" />
              Acessar Área do Profissional
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 text-center space-y-8">
        <Card className="max-w-4xl mx-auto p-8 border-2">
          <CardContent className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              Pronto para Experimentar?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comece agora mesmo a preparar sua próxima teleconsulta. 
              É gratuito e leva apenas alguns minutos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/simulador">
                <Button size="lg" className="text-lg px-8 py-3 h-auto">
                  <Camera className="h-5 w-5 mr-2" />
                  Testar Minha Consulta
                </Button>
              </Link>
              <Link to="/tutorial">
                <Button variant="outline" size="lg" className="text-lg px-8 py-3 h-auto">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Ver Tutorial Completo
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};