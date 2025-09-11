import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { 
  MessageCircle, 
  Search, 
  HelpCircle, 
  Camera, 
  Smartphone, 
  Wifi,
  Volume2
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR';
      utterance.rate = 0.9;
      speechSynthesis.speak(utterance);
    }
  };

  const faqCategories = [
    {
      title: "Preparação para Teleconsulta",
      icon: Camera,
      questions: [
        {
          question: "Como faço para testar se minha câmera está funcionando?",
          answer: "Use nosso simulador de consulta para testar sua câmera antes da consulta real. Ele verifica se sua imagem está clara e bem posicionada."
        },
        {
          question: "Preciso de algum programa especial no meu celular?",
          answer: "Não! Nossa plataforma funciona direto no navegador do seu celular ou computador, sem necessidade de instalar aplicativos."
        },
        {
          question: "Como sei se minha internet está boa o suficiente?",
          answer: "Nosso simulador também testa sua conexão. Recomendamos uma internet de pelo menos 1MB para chamadas de vídeo."
        }
      ]
    },
    {
      title: "Problemas Técnicos",
      icon: Smartphone,
      questions: [
        {
          question: "Minha câmera não aparece no teste. O que fazer?",
          answer: "Primeiro, verifique se você deu permissão para o navegador usar a câmera. Se continuar com problema, tente usar outro navegador ou dispositivo."
        },
        {
          question: "O som não está funcionando durante o teste. Como resolver?",
          answer: "Verifique se o volume está ligado e se você deu permissão para usar o microfone. Teste com fones de ouvido se possível."
        },
        {
          question: "A imagem está travando durante o teste. É normal?",
          answer: "Isso pode indicar internet lenta. Feche outros programas e tente novamente. Se persistir, entre em contato conosco."
        }
      ]
    },
    {
      title: "Sobre o Projeto",
      icon: HelpCircle,
      questions: [
        {
          question: "O que é o projeto Auramed?",
          answer: "É uma solução para reduzir faltas em teleconsultas, ajudando pacientes a se prepararem melhor para suas consultas online."
        },
        {
          question: "É gratuito usar a plataforma?",
          answer: "Sim! Nossa plataforma é totalmente gratuita para pacientes. Queremos que todos tenham acesso às teleconsultas."
        },
        {
          question: "Como posso dar sugestões para melhorar a plataforma?",
          answer: "Adoramos receber feedback! Use nosso chat de dúvidas ou nos envie um e-mail com suas sugestões."
        }
      ]
    }
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      qa => 
        qa.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        qa.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <section className="text-center space-y-4" aria-labelledby="faq-title">
        <h1 
          id="faq-title"
          className="text-4xl md:text-5xl font-bold text-foreground"
          onClick={() => speakText('Perguntas Frequentes')}
        >
          Perguntas Frequentes
        </h1>
        <p 
          className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          onClick={() => speakText('As dúvidas mais comuns de nossos pacientes, respondidas de forma simples e clara.')}
        >
          As dúvidas mais comuns de nossos pacientes, respondidas de forma simples e clara.
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

      {/* Search */}
      <Card className="p-6 border-2">
        <div className="flex items-center gap-3">
          <Search className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
          <Input
            placeholder="Buscar dúvidas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 text-lg"
            aria-label="Buscar nas perguntas frequentes"
          />
        </div>
      </Card>

      {/* ML-Powered FAQ Notice */}
      <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-primary/20 p-6">
        <CardContent className="text-center space-y-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <MessageCircle className="h-8 w-8 text-primary" aria-hidden="true" />
          </div>
          <h2 
            className="text-2xl font-semibold text-foreground"
            onClick={() => speakText('FAQ Inteligente')}
          >
            FAQ Inteligente
          </h2>
          <p 
            className="text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            onClick={() => speakText('Esta seção é atualizada automaticamente com base nas perguntas mais feitas no nosso chatbot, usando inteligência artificial para agrupar os temas mais importantes.')}
          >
            Esta seção é atualizada automaticamente com base nas perguntas mais feitas 
            no nosso chatbot, usando inteligência artificial para agrupar os temas mais importantes.
          </p>
        </CardContent>
      </Card>

      {/* FAQ Categories */}
      {filteredCategories.length > 0 ? (
        <div className="space-y-8">
          {filteredCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="border-2 p-6">
              <CardContent className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h2 
                    className="text-2xl font-semibold text-foreground"
                    onClick={() => speakText(category.title)}
                  >
                    {category.title}
                  </h2>
                </div>

                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((qa, qaIndex) => (
                    <AccordionItem key={qaIndex} value={`${categoryIndex}-${qaIndex}`} className="border border-border rounded-lg px-4">
                      <AccordionTrigger 
                        className="text-left hover:no-underline py-4"
                        onClick={() => speakText(qa.question)}
                      >
                        <span className="font-medium text-foreground">{qa.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4">
                        <p 
                          className="text-muted-foreground leading-relaxed"
                          onClick={() => speakText(qa.answer)}
                        >
                          {qa.answer}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        searchTerm && (
          <Card className="p-8 text-center border-2">
            <CardContent className="space-y-4">
              <Search className="h-12 w-12 text-muted-foreground mx-auto" />
              <h3 className="text-xl font-semibold text-foreground">
                Nenhuma resposta encontrada
              </h3>
              <p className="text-muted-foreground">
                Não encontramos respostas para "{searchTerm}". Tente usar outras palavras-chave.
              </p>
            </CardContent>
          </Card>
        )
      )}

      {/* Chatbot CTA */}
      <Card className="bg-gradient-to-r from-accent/10 to-secondary/10 border-2 border-accent/20 p-8 text-center">
        <CardContent className="space-y-6">
          <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
            <MessageCircle className="h-8 w-8 text-accent-foreground" aria-hidden="true" />
          </div>
          <h2 
            className="text-2xl font-bold text-foreground"
            onClick={() => speakText('Não encontrou sua resposta?')}
          >
            Não encontrou sua resposta?
          </h2>
          <p 
            className="text-lg text-muted-foreground"
            onClick={() => speakText('Converse com nosso assistente virtual 24 horas por dia, 7 dias por semana.')}
          >
            Converse com nosso assistente virtual 24 horas por dia, 7 dias por semana.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3 h-auto">
              <MessageCircle className="h-5 w-5 mr-2" />
              Conversar com Assistente
            </Button>
            <Link to="/tutorial">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 h-auto">
                Ver Tutorial Completo
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};