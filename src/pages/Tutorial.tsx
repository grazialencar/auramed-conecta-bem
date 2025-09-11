import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle, 
  Camera, 
  Wifi, 
  Smartphone, 
  Headphones,
  Volume2,
  ArrowRight,
  ArrowLeft,
  Home
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const Tutorial: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel(); // Stop any current speech
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR';
      utterance.rate = 0.9;
      utterance.onend = () => setIsPlaying(false);
      speechSynthesis.speak(utterance);
      setIsPlaying(true);
    }
  };

  const stopSpeech = () => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      setIsPlaying(false);
    }
  };

  const tutorialSteps = [
    {
      title: "Preparando seu Dispositivo",
      icon: Smartphone,
      content: `Primeiro, vamos verificar se seu celular ou computador está pronto para a teleconsulta.

• Certifique-se de que seu dispositivo está carregado ou conectado na tomada
• Feche outros aplicativos que possam estar abertos
• Coloque o celular na horizontal se for usar ele
• Encontre um local com boa iluminação, de preferência perto de uma janela`,
      audioText: "Primeiro passo: preparando seu dispositivo. Certifique-se de que seu celular ou computador está carregado ou conectado na tomada. Feche outros aplicativos que possam estar abertos. Coloque o celular na horizontal se for usar ele. Encontre um local com boa iluminação, de preferência perto de uma janela."
    },
    {
      title: "Testando sua Conexão",
      icon: Wifi,
      content: `Agora vamos verificar se sua internet está funcionando bem para a videochamada.

• Conecte-se ao Wi-Fi de casa, que geralmente é mais estável que os dados móveis
• Peça para outras pessoas pararem de assistir vídeos no YouTube ou Netflix durante sua consulta
• Se a internet estiver lenta, tente ficar mais perto do roteador
• Use nosso simulador para testar a velocidade`,
      audioText: "Segundo passo: testando sua conexão de internet. Conecte-se ao Wi-Fi de casa, que geralmente é mais estável que os dados móveis. Peça para outras pessoas pararem de assistir vídeos no YouTube ou Netflix durante sua consulta. Se a internet estiver lenta, tente ficar mais perto do roteador. Use nosso simulador para testar a velocidade."
    },
    {
      title: "Configurando Câmera e Áudio",
      icon: Camera,
      content: `Vamos ajustar sua câmera e microfone para que o médico possa ver e ouvir você claramente.

• Posicione a câmera na altura dos seus olhos
• Sente-se a cerca de um braço de distância da tela
• Teste se o microfone está captando sua voz
• Use fones de ouvido se possível - isso melhora muito a qualidade do som`,
      audioText: "Terceiro passo: configurando câmera e áudio. Posicione a câmera na altura dos seus olhos. Sente-se a cerca de um braço de distância da tela. Teste se o microfone está captando sua voz. Use fones de ouvido se possível - isso melhora muito a qualidade do som."
    },
    {
      title: "Ambiente da Consulta",
      icon: Home,
      content: `Prepare o ambiente onde você fará a consulta para ter a melhor experiência possível.

• Escolha um local quieto, longe de barulhos da rua ou da casa
• Certifique-se de que há luz suficiente no seu rosto
• Tenha seus documentos e exames por perto
• Avise as pessoas de casa sobre o horário da consulta para não ser interrompido`,
      audioText: "Quarto passo: preparando o ambiente da consulta. Escolha um local quieto, longe de barulhos da rua ou da casa. Certifique-se de que há luz suficiente no seu rosto. Tenha seus documentos e exames por perto. Avise as pessoas de casa sobre o horário da consulta para não ser interrompido."
    },
    {
      title: "Durante a Consulta",
      icon: Headphones,
      content: `Agora que tudo está pronto, vamos ver como se comportar durante a teleconsulta.

• Fale de forma clara e um pouco mais devagar que o normal
• Olhe para a câmera quando estiver falando, não para a tela
• Não tenha medo de pedir para o médico repetir algo se não entendeu
• Se tiver problemas técnicos, mantenha a calma e conte para o médico`,
      audioText: "Quinto passo: como se comportar durante a consulta. Fale de forma clara e um pouco mais devagar que o normal. Olhe para a câmera quando estiver falando, não para a tela. Não tenha medo de pedir para o médico repetir algo se não entendeu. Se tiver problemas técnicos, mantenha a calma e conte para o médico."
    }
  ];

  const nextStep = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
      stopSpeech();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      stopSpeech();
    }
  };

  const currentTutorial = tutorialSteps[currentStep];

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <section className="text-center space-y-4" aria-labelledby="tutorial-title">
        <h1 
          id="tutorial-title"
          className="text-4xl md:text-5xl font-bold text-foreground"
          onClick={() => speakText('Tutorial para sua Teleconsulta')}
        >
          Tutorial para sua Teleconsulta
        </h1>
        <p 
          className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          onClick={() => speakText('Um guia completo, passo a passo, para você se preparar da melhor forma para sua consulta online.')}
        >
          Um guia completo, passo a passo, para você se preparar da melhor forma 
          para sua consulta online.
        </p>
      </section>

      {/* Progress Indicator */}
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          {tutorialSteps.map((_, index) => (
            <div key={index} className="flex items-center">
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  index <= currentStep 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}
                aria-label={`Passo ${index + 1} ${index <= currentStep ? 'concluído' : 'pendente'}`}
              >
                {index < currentStep ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  index + 1
                )}
              </div>
              {index < tutorialSteps.length - 1 && (
                <div 
                  className={`h-1 w-12 mx-2 ${
                    index < currentStep ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Tutorial Content */}
      <Card className="max-w-4xl mx-auto border-2 p-8">
        <CardHeader className="text-center pb-6">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <currentTutorial.icon className="h-10 w-10 text-primary" aria-hidden="true" />
          </div>
          <CardTitle className="text-3xl text-foreground">
            Passo {currentStep + 1}: {currentTutorial.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Audio Controls */}
          <div className="flex items-center justify-center gap-4 p-4 bg-muted rounded-lg">
            <Button
              variant={isPlaying ? "default" : "outline"}
              size="lg"
              onClick={() => isPlaying ? stopSpeech() : speakText(currentTutorial.audioText)}
              aria-label={isPlaying ? "Pausar leitura" : "Reproduzir leitura em áudio"}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5 mr-2" />
              ) : (
                <Play className="h-5 w-5 mr-2" />
              )}
              {isPlaying ? 'Pausar' : 'Ouvir este passo'}
            </Button>
            
            <Button
              variant="ghost"
              size="lg"
              onClick={stopSpeech}
              disabled={!isPlaying}
              aria-label="Parar leitura"
            >
              <RotateCcw className="h-5 w-5 mr-2" />
              Parar
            </Button>
          </div>

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none text-foreground space-y-4"
            onClick={() => speakText(currentTutorial.content)}
          >
            <div className="whitespace-pre-line text-lg leading-relaxed">
              {currentTutorial.content}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-8 border-t">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 0}
              aria-label="Passo anterior"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Anterior
            </Button>

            <span className="text-muted-foreground font-medium">
              {currentStep + 1} de {tutorialSteps.length}
            </span>

            {currentStep < tutorialSteps.length - 1 ? (
              <Button
                onClick={nextStep}
                aria-label="Próximo passo"
              >
                Próximo
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Link to="/simulador">
                <Button className="bg-success hover:bg-success/90 text-success-foreground">
                  Fazer Simulação
                  <CheckCircle className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Quick Navigation */}
      <Card className="max-w-4xl mx-auto p-6">
        <CardContent>
          <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
            Navegação Rápida
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {tutorialSteps.map((step, index) => (
              <Button
                key={index}
                variant={index === currentStep ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setCurrentStep(index);
                  stopSpeech();
                }}
                className="text-left h-auto p-3"
                aria-label={`Ir para passo ${index + 1}: ${step.title}`}
              >
                <div className="flex items-center gap-2">
                  <step.icon className="h-4 w-4 flex-shrink-0" />
                  <span className="text-xs">{step.title}</span>
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* CTA Section */}
      <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-primary/20 p-8 text-center">
        <CardContent className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">
            Pronto para testar?
          </h2>
          <p className="text-lg text-muted-foreground">
            Agora que você já sabe como se preparar, que tal fazer uma simulação completa?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/simulador">
              <Button size="lg" className="text-lg px-8 py-3 h-auto">
                <Camera className="h-5 w-5 mr-2" />
                Testar Minha Consulta
              </Button>
            </Link>
            <Link to="/faq">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 h-auto">
                Ver Perguntas Frequentes
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};