import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Users, Target, Heart, Award } from 'lucide-react';

export const Sobre: React.FC = () => {
  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR';
      utterance.rate = 0.9;
      speechSynthesis.speak(utterance);
    }
  };

  const teamMembers = [
    {
      name: "Dra. Ana Silva",
      role: "Coordenadora do Projeto",
      description: "Especialista em Medicina Digital e Telemedicina"
    },
    {
      name: "Dr. Carlos Santos",
      role: "Consultor Médico",
      description: "Médico Fisiatra do IMREA"
    },
    {
      name: "Maria Oliveira",
      role: "Desenvolvadora UX/UI",
      description: "Especialista em Acessibilidade Digital"
    },
    {
      name: "João Pedro",
      role: "Desenvolvedor Full-Stack",
      description: "Engenheiro de Software especializado em soluções de saúde"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6" aria-labelledby="sobre-title">
        <h1 
          id="sobre-title"
          className="text-4xl md:text-5xl font-bold text-foreground"
          onClick={() => speakText('Sobre o Projeto Auramed')}
        >
          Sobre o Projeto Auramed
        </h1>
        <p 
          className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          onClick={() => speakText('Uma solução inovadora para reduzir o absenteísmo em teleconsultas, tornando a medicina digital mais acessível e eficiente para todos.')}
        >
          Uma solução inovadora para reduzir o absenteísmo em teleconsultas, 
          tornando a medicina digital mais acessível e eficiente para todos.
        </p>
      </section>

      {/* Mission and Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="border-2 p-6">
          <CardHeader>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Target className="h-8 w-8 text-primary" aria-hidden="true" />
            </div>
            <CardTitle className="text-2xl text-foreground">Nossa Missão</CardTitle>
          </CardHeader>
          <CardContent>
            <p 
              className="text-muted-foreground leading-relaxed text-lg"
              onClick={() => speakText('Reduzir significativamente o absenteísmo em teleconsultas através de uma plataforma acessível que prepara e capacita pacientes para o atendimento digital, garantindo que todos tenham acesso igualitário aos cuidados de saúde.')}
            >
              Reduzir significativamente o absenteísmo em teleconsultas através de uma 
              plataforma acessível que prepara e capacita pacientes para o atendimento 
              digital, garantindo que todos tenham acesso igualitário aos cuidados de saúde.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 p-6">
          <CardHeader>
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-secondary" aria-hidden="true" />
            </div>
            <CardTitle className="text-2xl text-foreground">Nossa Visão</CardTitle>
          </CardHeader>
          <CardContent>
            <p 
              className="text-muted-foreground leading-relaxed text-lg"
              onClick={() => speakText('Ser referência em soluções de acessibilidade para telemedicina, criando um futuro onde a tecnologia em saúde seja verdadeiramente inclusiva e onde nenhum paciente seja deixado para trás na transformação digital da medicina.')}
            >
              Ser referência em soluções de acessibilidade para telemedicina, criando 
              um futuro onde a tecnologia em saúde seja verdadeiramente inclusiva e 
              onde nenhum paciente seja deixado para trás na transformação digital da medicina.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Project Objectives */}
      <section className="space-y-8" aria-labelledby="objetivos-title">
        <div className="text-center">
          <h2 
            id="objetivos-title"
            className="text-3xl font-bold text-foreground mb-4"
            onClick={() => speakText('Objetivos do Projeto')}
          >
            Objetivos do Projeto
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center p-6 border-2 hover:border-primary transition-colors">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-success" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Redução do Absenteísmo
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Diminuir em até 50% as faltas em teleconsultas através de preparação adequada
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-2 hover:border-primary transition-colors">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Inclusão Digital
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Garantir acesso igualitário à telemedicina para todos os perfis de pacientes
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-2 hover:border-primary transition-colors">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-accent-foreground" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Melhoria da Experiência
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Tornar a teleconsulta mais confortável e confiável para pacientes e médicos
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section className="space-y-8" aria-labelledby="equipe-title">
        <div className="text-center">
          <h2 
            id="equipe-title"
            className="text-3xl font-bold text-foreground mb-4"
            onClick={() => speakText('Nossa Equipe')}
          >
            Nossa Equipe
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profissionais dedicados à inovação em saúde digital e acessibilidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="p-6 border-2 hover:border-primary transition-colors">
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-primary" aria-hidden="true" />
                  </div>
                  <h3 
                    className="text-xl font-semibold text-foreground"
                    onClick={() => speakText(member.name)}
                  >
                    {member.name}
                  </h3>
                  <p 
                    className="text-primary font-medium"
                    onClick={() => speakText(member.role)}
                  >
                    {member.role}
                  </p>
                  <p 
                    className="text-muted-foreground mt-2"
                    onClick={() => speakText(member.description)}
                  >
                    {member.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-muted rounded-2xl p-8 text-center space-y-6" aria-labelledby="contato-title">
        <h2 
          id="contato-title"
          className="text-3xl font-bold text-foreground"
          onClick={() => speakText('Entre em Contato')}
        >
          Entre em Contato
        </h2>
        <p 
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
          onClick={() => speakText('Tem alguma dúvida sobre o projeto? Quer saber como implementar em sua instituição? Fale conosco!')}
        >
          Tem alguma dúvida sobre o projeto? Quer saber como implementar em sua instituição? 
          Fale conosco!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="space-y-4">
            <Mail className="h-8 w-8 text-primary mx-auto" aria-hidden="true" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">E-mail</h3>
              <p className="text-muted-foreground">contato@auramed.com.br</p>
            </div>
          </div>

          <div className="space-y-4">
            <Phone className="h-8 w-8 text-primary mx-auto" aria-hidden="true" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">Telefone</h3>
              <p className="text-muted-foreground">(11) 9999-9999</p>
            </div>
          </div>
        </div>

        <Button 
          size="lg" 
          className="mt-6"
          onClick={() => window.location.href = 'mailto:contato@auramed.com.br'}
        >
          Entrar em Contato
        </Button>
      </section>
    </div>
  );
};