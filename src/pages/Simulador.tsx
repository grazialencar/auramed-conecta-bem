import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Camera, 
  CameraOff, 
  CheckCircle, 
  AlertTriangle, 
  RotateCcw, 
  Settings,
  Monitor,
  Wifi,
  Volume2,
  Lightbulb
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const Simulador: React.FC = () => {
  const [cameraActive, setCameraActive] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [feedback, setFeedback] = useState<string>('');
  const [feedbackType, setFeedbackType] = useState<'success' | 'warning' | 'error'>('success');
  const videoRef = useRef<HTMLVideoElement>(null);

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR';
      utterance.rate = 0.9;
      speechSynthesis.speak(utterance);
    }
  };

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: true, 
        audio: true 
      });
      setStream(mediaStream);
      setCameraActive(true);
      
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }

      // Simulate facial landmark detection feedback
      setTimeout(() => {
        setFeedback('Excelente! Você está bem posicionado e a imagem está clara.');
        setFeedbackType('success');
        speakText('Excelente! Você está bem posicionado e a imagem está clara.');
      }, 2000);

    } catch (error) {
      setFeedback('Não foi possível acessar a câmera. Verifique as permissões do navegador.');
      setFeedbackType('error');
      speakText('Não foi possível acessar a câmera. Verifique as permissões do navegador.');
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setCameraActive(false);
    setFeedback('');
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };

  const checkConditions = () => {
    const conditions = [
      'Verificando posicionamento da câmera...',
      'Analisando qualidade da imagem...',
      'Testando conexão de internet...',
      'Verificando áudio...'
    ];
    
    let index = 0;
    const interval = setInterval(() => {
      if (index < conditions.length) {
        setFeedback(conditions[index]);
        setFeedbackType('warning');
        speakText(conditions[index]);
        index++;
      } else {
        clearInterval(interval);
        setFeedback('Tudo funcionando perfeitamente! Você está pronto para sua teleconsulta.');
        setFeedbackType('success');
        speakText('Tudo funcionando perfeitamente! Você está pronto para sua teleconsulta.');
      }
    }, 1500);
  };

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <section className="text-center space-y-4" aria-labelledby="simulador-title">
        <h1 
          id="simulador-title"
          className="text-4xl md:text-5xl font-bold text-foreground"
          onClick={() => speakText('Simulador de Consulta')}
        >
          Simulador de Consulta
        </h1>
        <p 
          className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          onClick={() => speakText('Teste sua câmera, áudio e conexão antes da consulta real. Receba feedback em tempo real para garantir a melhor experiência.')}
        >
          Teste sua câmera, áudio e conexão antes da consulta real. 
          Receba feedback em tempo real para garantir a melhor experiência.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Video Preview */}
        <Card className="border-2 p-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Camera className="h-6 w-6 text-primary" />
              Preview da Câmera
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
              {cameraActive ? (
                <>
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    className="w-full h-full object-cover"
                    aria-label="Preview da câmera"
                  />
                  <div className="absolute top-4 right-4 bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success-foreground rounded-full animate-pulse"></div>
                      AO VIVO
                    </div>
                  </div>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
                  <div className="text-center space-y-4">
                    <CameraOff className="h-16 w-16 text-muted-foreground mx-auto" />
                    <p className="text-muted-foreground text-lg">
                      Clique em "Testar Câmera" para começar
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Camera Controls */}
            <div className="flex gap-3 justify-center">
              {!cameraActive ? (
                <Button 
                  size="lg" 
                  onClick={startCamera}
                  className="bg-primary hover:bg-primary-hover text-primary-foreground px-8"
                  aria-label="Ativar câmera para teste"
                >
                  <Camera className="h-5 w-5 mr-2" />
                  Testar Câmera
                </Button>
              ) : (
                <>
                  <Button 
                    size="lg" 
                    variant="destructive"
                    onClick={stopCamera}
                    aria-label="Desativar câmera"
                  >
                    <CameraOff className="h-5 w-5 mr-2" />
                    Parar
                  </Button>
                  <Button 
                    size="lg" 
                    variant="secondary"
                    onClick={checkConditions}
                    aria-label="Verificar todas as condições"
                  >
                    <Settings className="h-5 w-5 mr-2" />
                    Verificar Tudo
                  </Button>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Feedback and Instructions */}
        <div className="space-y-6">
          {/* Real-time Feedback */}
          {feedback && (
            <Card className={`border-2 p-6 ${
              feedbackType === 'success' ? 'border-success bg-success/5' :
              feedbackType === 'warning' ? 'border-warning bg-warning/5' :
              'border-destructive bg-destructive/5'
            }`}>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  {feedbackType === 'success' && (
                    <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  )}
                  {feedbackType === 'warning' && (
                    <AlertTriangle className="h-6 w-6 text-warning flex-shrink-0 mt-1" />
                  )}
                  {feedbackType === 'error' && (
                    <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                  )}
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Feedback da Simulação</h3>
                    <p 
                      className="leading-relaxed"
                      onClick={() => speakText(feedback)}
                    >
                      {feedback}
                    </p>
                  </div>
                </div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => speakText(feedback)}
                  aria-label="Ouvir feedback"
                >
                  <Volume2 className="h-4 w-4 mr-2" />
                  Ouvir
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Checklist */}
          <Card className="border-2 p-6">
            <CardHeader>
              <CardTitle className="text-xl">Lista de Verificação</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Monitor className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Posição da Tela</h4>
                    <p className="text-sm text-muted-foreground">
                      A câmera deve estar na altura dos seus olhos
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Iluminação</h4>
                    <p className="text-sm text-muted-foreground">
                      Certifique-se de ter luz suficiente no rosto
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Wifi className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Conexão</h4>
                    <p className="text-sm text-muted-foreground">
                      Use Wi-Fi sempre que possível
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Volume2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Áudio</h4>
                    <p className="text-sm text-muted-foreground">
                      Use fones de ouvido para melhor qualidade
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tips */}
          <Card className="bg-gradient-to-r from-accent/10 to-secondary/10 border-2 border-accent/20 p-6">
            <CardContent className="space-y-4">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-accent-foreground" />
                Dicas Importantes
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li 
                  className="flex items-start gap-2 cursor-pointer"
                  onClick={() => speakText('Teste sempre alguns minutos antes da consulta real')}
                >
                  <CheckCircle className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                  Teste sempre alguns minutos antes da consulta real
                </li>
                <li 
                  className="flex items-start gap-2 cursor-pointer"
                  onClick={() => speakText('Mantenha documentos e exames por perto')}
                >
                  <CheckCircle className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                  Mantenha documentos e exames por perto
                </li>
                <li 
                  className="flex items-start gap-2 cursor-pointer"
                  onClick={() => speakText('Avise pessoas de casa sobre o horário da consulta')}
                >
                  <CheckCircle className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                  Avise pessoas de casa sobre o horário da consulta
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Action Buttons */}
      <Card className="max-w-4xl mx-auto p-8 text-center border-2">
        <CardContent className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">
            Pronto para sua consulta?
          </h2>
          <p className="text-lg text-muted-foreground">
            Agora que você testou tudo, está preparado para ter uma ótima experiência na teleconsulta.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => {
                setCameraActive(false);
                setFeedback('');
                if (stream) {
                  stream.getTracks().forEach(track => track.stop());
                  setStream(null);
                }
              }}
              className="text-lg px-8 py-3 h-auto"
            >
              <RotateCcw className="h-5 w-5 mr-2" />
              Testar Novamente
            </Button>
            
            <Link to="/tutorial">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-3 h-auto"
              >
                Ver Tutorial Completo
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};