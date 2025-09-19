import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAccessibility } from './AccessibilityProvider';
import { 
  Accessibility, 
  Plus, 
  Minus, 
  Eye, 
  RotateCcw, 
  X,
  Volume2
} from 'lucide-react';

export const AccessibilityMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    fontSize, 
    highContrast, 
    increaseFontSize, 
    decreaseFontSize, 
    toggleHighContrast, 
    resetSettings 
  } = useAccessibility();

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR';
      utterance.rate = 0.9;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="fixed top-4 left-4 md:top-4 md:right-4 z-50">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="outline"
        size="lg"
        className="bg-primary text-primary-foreground hover:bg-primary/90 border-2 border-primary shadow-lg"
        aria-label="Abrir menu de acessibilidade"
        aria-expanded={isOpen}
      >
        <Accessibility className="h-6 w-6" />
        <span className="sr-only">Acessibilidade</span>
      </Button>

      {isOpen && (
        <Card className="absolute top-full left-0 md:right-0 md:left-auto mt-2 w-80 shadow-xl border-2">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">
                Opções de Acessibilidade
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                aria-label="Fechar menu de acessibilidade"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Font Size Controls */}
            <div className="space-y-2">
              <h3 className="font-medium text-sm">Tamanho da Fonte</h3>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={decreaseFontSize}
                  disabled={fontSize <= 12}
                  aria-label="Diminuir fonte"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-sm font-medium px-3 py-1 bg-muted rounded">
                  {fontSize}px
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={increaseFontSize}
                  disabled={fontSize >= 24}
                  aria-label="Aumentar fonte"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* High Contrast Toggle */}
            <div className="space-y-2">
              <h3 className="font-medium text-sm">Modo Alto Contraste</h3>
              <Button
                variant={highContrast ? "default" : "outline"}
                className="w-full justify-start"
                onClick={toggleHighContrast}
                aria-pressed={highContrast}
              >
                <Eye className="h-4 w-4 mr-2" />
                {highContrast ? 'Desativar' : 'Ativar'} Alto Contraste
              </Button>
            </div>

            {/* Text to Speech */}
            <div className="space-y-2">
              <h3 className="font-medium text-sm">Leitura em Áudio</h3>
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => speakText('Função de leitura em áudio ativada. Clique em qualquer texto para ouvir.')}
                aria-label="Ativar leitura em áudio"
              >
                <Volume2 className="h-4 w-4 mr-2" />
                Ler Página
              </Button>
            </div>

            {/* Reset Settings */}
            <div className="pt-2 border-t">
              <Button
                variant="ghost"
                className="w-full justify-start text-muted-foreground"
                onClick={resetSettings}
                aria-label="Restaurar configurações padrão"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Restaurar Padrão
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};