import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  UserPlus, 
  Calendar, 
  TrendingUp,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  Download,
  CheckCircle,
  AlertCircle,
  Clock,
  LogOut,
  Bell,
  BarChart3,
  PieChart,
  MessageSquare,
  HelpCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent
} from '@/components/ui/chart';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  Area,
  AreaChart
} from 'recharts';

// Mock data
const mockProfessional = {
  name: "Dr. Ana Silva",
  specialty: "Cardiologia",
  crm: "CRM/SP 123456",
  email: "ana.silva@imrea.org.br"
};

const mockPatients = [
  {
    id: 1,
    name: "Maria Santos",
    cpf: "123.456.789-00",
    phone: "(11) 99999-1234",
    email: "maria@email.com",
    birthDate: "15/03/1985",
    status: "Preparado",
    lastConsultation: "2024-01-10",
    nextConsultation: "2024-01-25"
  },
  {
    id: 2,
    name: "João Oliveira",
    cpf: "987.654.321-00",
    phone: "(11) 99888-5678",
    email: "joao@email.com",
    birthDate: "22/07/1972",
    status: "Pendente",
    lastConsultation: "2023-12-15",
    nextConsultation: "2024-01-20"
  },
  {
    id: 3,
    name: "Carmen Rodriguez",
    cpf: "456.789.123-00",
    phone: "(11) 99777-9012",
    email: "carmen@email.com",
    birthDate: "08/11/1990",
    status: "Não Preparado",
    lastConsultation: "2024-01-05",
    nextConsultation: "2024-01-22"
  }
];

const mockStats = {
  totalPatients: 156,
  consultationsThisMonth: 89,
  preparationRate: 78,
  absenteeismRate: 12
};

// Mock data for dashboard charts
const digitalSkillsData = [
  { skill: 'Usa celular sozinho', count: 85, percentage: 54 },
  { skill: 'Precisa de ajuda', count: 52, percentage: 33 },
  { skill: 'Não utiliza', count: 19, percentage: 13 }
];

const accessibilityData = [
  { type: 'Dificuldades de Visão', count: 43, total: 156 },
  { type: 'Dificuldades Auditivas', count: 32, total: 156 },
  { type: 'Dificuldades Cognitivas', count: 28, total: 156 }
];

const reminderChannelData = [
  { name: 'WhatsApp', value: 78, fill: 'hsl(var(--primary))' },
  { name: 'SMS', value: 45, fill: 'hsl(var(--primary-glow))' },
  { name: 'E-mail', value: 23, fill: 'hsl(var(--secondary))' },
  { name: 'Ligação', value: 10, fill: 'hsl(var(--accent))' }
];

const faqData = [
  { question: 'Como fazer login na plataforma?', views: 234 },
  { question: 'Como resetar senha?', views: 187 },
  { question: 'Como agendar consulta?', views: 156 },
  { question: 'Problemas técnicos', views: 134 },
  { question: 'Como cancelar consulta?', views: 98 }
];

const chatbotUsageData = [
  { month: 'Jan', usage: 120 },
  { month: 'Fev', usage: 156 },
  { month: 'Mar', usage: 189 },
  { month: 'Abr', usage: 234 },
  { month: 'Mai', usage: 278 },
  { month: 'Jun', usage: 312 }
];

const unansweredQuestions = [
  'Como alterar dados pessoais no perfil?',
  'Posso remarcar consulta no mesmo dia?',
  'Como acessar histórico de exames?',
  'Existe limite de reagendamento?',
  'Como funciona o pagamento online?'
];

export const DashboardProfissional: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [newPatient, setNewPatient] = useState({
    name: '',
    cpf: '',
    phone: '',
    email: '',
    birthDate: '',
    address: '',
    observations: '',
    visionDifficulty: '',
    usesGlasses: '',
    hearingDifficulty: '',
    usesHearingAid: '',
    cognitiveDifficulty: '',
    digitalSkills: '',
    reminderChannel: '',
    needsCaregiver: '',
    previousTelehealth: '',
    accessibilityNeeds: ''
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Preparado':
        return <Badge className="bg-success text-success-foreground">Preparado</Badge>;
      case 'Pendente':
        return <Badge className="bg-warning text-warning-foreground">Pendente</Badge>;
      case 'Não Preparado':
        return <Badge className="bg-destructive text-destructive-foreground">Não Preparado</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const filteredPatients = mockPatients.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.cpf.includes(searchTerm);
    const matchesStatus = statusFilter === 'all' || patient.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <img 
              src="/lovable-uploads/d0ff8af9-60d8-499c-922f-d0d2de03cbf4.png" 
              alt="Auramed Logo" 
              className="h-10 w-auto"
            />
            <div>
              <h1 className="text-xl font-semibold text-foreground">Dashboard Profissional</h1>
              <p className="text-sm text-muted-foreground">Bem-vindo, {mockProfessional.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
            <div className="text-right text-sm">
              <p className="font-medium">{mockProfessional.name}</p>
              <p className="text-muted-foreground">{mockProfessional.specialty}</p>
            </div>
            <Link to="/login-profissional">
              <Button variant="ghost" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="register">Cadastrar Paciente</TabsTrigger>
            <TabsTrigger value="patients">Lista de Pacientes</TabsTrigger>
            <TabsTrigger value="reports">Relatórios</TabsTrigger>
            <TabsTrigger value="settings">Configurações</TabsTrigger>
          </TabsList>

          {/* Visão Geral */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total de Pacientes</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockStats.totalPatients}</div>
                  <p className="text-xs text-muted-foreground">+12% em relação ao mês anterior</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Consultas do Mês</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockStats.consultationsThisMonth}</div>
                  <p className="text-xs text-muted-foreground">+8% em relação ao mês anterior</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Taxa de Preparação</CardTitle>
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockStats.preparationRate}%</div>
                  <p className="text-xs text-success">+5% em relação ao mês anterior</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Taxa de Absenteísmo</CardTitle>
                  <AlertCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockStats.absenteeismRate}%</div>
                  <p className="text-xs text-success">-3% em relação ao mês anterior</p>
                </CardContent>
              </Card>
            </div>

            {/* Próximas Consultas */}
            <Card>
              <CardHeader>
                <CardTitle>Próximas Consultas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockPatients.slice(0, 3).map((patient) => (
                    <div key={patient.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{patient.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {patient.nextConsultation} • {getStatusBadge(patient.status)}
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        Ver Detalhes
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Cadastrar Paciente */}
          <TabsContent value="register" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserPlus className="h-5 w-5" />
                  Cadastrar Novo Paciente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input 
                        id="name" 
                        placeholder="Nome completo do paciente"
                        value={newPatient.name}
                        onChange={(e) => setNewPatient({...newPatient, name: e.target.value})}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cpf">CPF *</Label>
                      <Input 
                        id="cpf" 
                        placeholder="000.000.000-00"
                        value={newPatient.cpf}
                        onChange={(e) => setNewPatient({...newPatient, cpf: e.target.value})}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone *</Label>
                      <Input 
                        id="phone" 
                        placeholder="(11) 99999-9999"
                        value={newPatient.phone}
                        onChange={(e) => setNewPatient({...newPatient, phone: e.target.value})}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email"
                        placeholder="email@exemplo.com"
                        value={newPatient.email}
                        onChange={(e) => setNewPatient({...newPatient, email: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="birthDate">Data de Nascimento *</Label>
                      <Input 
                        id="birthDate" 
                        type="date"
                        value={newPatient.birthDate}
                        onChange={(e) => setNewPatient({...newPatient, birthDate: e.target.value})}
                        required 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Endereço</Label>
                    <Input 
                      id="address" 
                      placeholder="Endereço completo"
                      value={newPatient.address}
                      onChange={(e) => setNewPatient({...newPatient, address: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="observations">Observações Médicas</Label>
                    <Textarea 
                      id="observations" 
                      placeholder="Observações importantes sobre o paciente..."
                      value={newPatient.observations}
                      onChange={(e) => setNewPatient({...newPatient, observations: e.target.value})}
                      rows={4}
                    />
                  </div>

                  {/* Seção de Acessibilidade e Necessidades Especiais */}
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold mb-4">Acessibilidade e Necessidades Especiais</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Dificuldades de visão */}
                      <div className="space-y-3">
                        <Label>Dificuldades de visão?</Label>
                        <RadioGroup 
                          value={newPatient.visionDifficulty || ""}
                          onValueChange={(value) => setNewPatient({...newPatient, visionDifficulty: value})}
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="sim" id="vision-yes" />
                            <Label htmlFor="vision-yes">Sim</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="não" id="vision-no" />
                            <Label htmlFor="vision-no">Não</Label>
                          </div>
                        </RadioGroup>
                        {newPatient.visionDifficulty === "sim" && (
                          <div className="ml-6 space-y-2">
                            <Label>Usa óculos/lentes?</Label>
                            <RadioGroup 
                              value={newPatient.usesGlasses || ""}
                              onValueChange={(value) => setNewPatient({...newPatient, usesGlasses: value})}
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="sim" id="glasses-yes" />
                                <Label htmlFor="glasses-yes">Sim</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="não" id="glasses-no" />
                                <Label htmlFor="glasses-no">Não</Label>
                              </div>
                            </RadioGroup>
                          </div>
                        )}
                      </div>

                      {/* Dificuldades auditivas */}
                      <div className="space-y-3">
                        <Label>Dificuldades auditivas?</Label>
                        <RadioGroup 
                          value={newPatient.hearingDifficulty || ""}
                          onValueChange={(value) => setNewPatient({...newPatient, hearingDifficulty: value})}
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="sim" id="hearing-yes" />
                            <Label htmlFor="hearing-yes">Sim</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="não" id="hearing-no" />
                            <Label htmlFor="hearing-no">Não</Label>
                          </div>
                        </RadioGroup>
                        {newPatient.hearingDifficulty === "sim" && (
                          <div className="ml-6 space-y-2">
                            <Label>Usa aparelho auditivo?</Label>
                            <RadioGroup 
                              value={newPatient.usesHearingAid || ""}
                              onValueChange={(value) => setNewPatient({...newPatient, usesHearingAid: value})}
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="sim" id="aid-yes" />
                                <Label htmlFor="aid-yes">Sim</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="não" id="aid-no" />
                                <Label htmlFor="aid-no">Não</Label>
                              </div>
                            </RadioGroup>
                          </div>
                        )}
                      </div>

                      {/* Dificuldades cognitivas */}
                      <div className="space-y-3">
                        <Label>Dificuldades cognitivas ou de memória?</Label>
                        <RadioGroup 
                          value={newPatient.cognitiveDifficulty || ""}
                          onValueChange={(value) => setNewPatient({...newPatient, cognitiveDifficulty: value})}
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="sim" id="cognitive-yes" />
                            <Label htmlFor="cognitive-yes">Sim</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="não" id="cognitive-no" />
                            <Label htmlFor="cognitive-no">Não</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      {/* Habilidades digitais */}
                      <div className="space-y-2">
                        <Label>Habilidades digitais</Label>
                        <Select 
                          value={newPatient.digitalSkills || ""} 
                          onValueChange={(value) => setNewPatient({...newPatient, digitalSkills: value})}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o nível" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sozinho">Usa celular sozinho</SelectItem>
                            <SelectItem value="ajuda">Precisa de ajuda</SelectItem>
                            <SelectItem value="nao-utiliza">Não utiliza</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Preferência de canal para lembrete */}
                      <div className="space-y-2">
                        <Label>Preferência de canal para lembrete</Label>
                        <Select 
                          value={newPatient.reminderChannel || ""} 
                          onValueChange={(value) => setNewPatient({...newPatient, reminderChannel: value})}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o canal" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="whatsapp">WhatsApp</SelectItem>
                            <SelectItem value="sms">SMS</SelectItem>
                            <SelectItem value="ligacao">Ligação</SelectItem>
                            <SelectItem value="email">E-mail</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Necessita de cuidador */}
                      <div className="space-y-3">
                        <Label>Necessita de cuidador presente na consulta?</Label>
                        <RadioGroup 
                          value={newPatient.needsCaregiver || ""}
                          onValueChange={(value) => setNewPatient({...newPatient, needsCaregiver: value})}
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="sim" id="caregiver-yes" />
                            <Label htmlFor="caregiver-yes">Sim</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="não" id="caregiver-no" />
                            <Label htmlFor="caregiver-no">Não</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      {/* Já realizou teleconsultas */}
                      <div className="space-y-3">
                        <Label>Já realizou teleconsultas antes?</Label>
                        <RadioGroup 
                          value={newPatient.previousTelehealth || ""}
                          onValueChange={(value) => setNewPatient({...newPatient, previousTelehealth: value})}
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="sim" id="telehealth-yes" />
                            <Label htmlFor="telehealth-yes">Sim</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="não" id="telehealth-no" />
                            <Label htmlFor="telehealth-no">Não</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>

                    {/* Necessidades de acessibilidade */}
                    <div className="space-y-2 mt-6">
                      <Label>Necessidades de acessibilidade</Label>
                      <Select 
                        value={newPatient.accessibilityNeeds || ""} 
                        onValueChange={(value) => setNewPatient({...newPatient, accessibilityNeeds: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione as necessidades" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nenhuma">Nenhuma necessidade especial</SelectItem>
                          <SelectItem value="narracao">Narração em áudio</SelectItem>
                          <SelectItem value="fonte-ampliada">Fonte ampliada</SelectItem>
                          <SelectItem value="contraste-alto">Contraste alto</SelectItem>
                          <SelectItem value="teclado-voz">Teclado/voz</SelectItem>
                          <SelectItem value="multiplas">Múltiplas necessidades</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button type="submit" className="flex-1">
                      <UserPlus className="h-4 w-4 mr-2" />
                      Cadastrar Paciente
                    </Button>
                    <Button type="button" variant="outline">
                      Limpar Formulário
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Lista de Pacientes */}
          <TabsContent value="patients" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Gerenciar Pacientes</CardTitle>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Buscar por nome ou CPF..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-full sm:w-[200px]">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Filtrar por status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos</SelectItem>
                      <SelectItem value="Preparado">Preparado</SelectItem>
                      <SelectItem value="Pendente">Pendente</SelectItem>
                      <SelectItem value="Não Preparado">Não Preparado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nome</TableHead>
                        <TableHead>CPF</TableHead>
                        <TableHead>Telefone</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Próxima Consulta</TableHead>
                        <TableHead>Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredPatients.map((patient) => (
                        <TableRow key={patient.id}>
                          <TableCell className="font-medium">{patient.name}</TableCell>
                          <TableCell>{patient.cpf}</TableCell>
                          <TableCell>{patient.phone}</TableCell>
                          <TableCell>{getStatusBadge(patient.status)}</TableCell>
                          <TableCell>{patient.nextConsultation}</TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Relatórios */}
          <TabsContent value="reports" className="space-y-6">
            {/* Dashboard 1: Prontidão e Acessibilidade do Paciente */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <BarChart3 className="h-6 w-6" />
                  Prontidão e Acessibilidade do Paciente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Habilidades Digitais */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Habilidades Digitais dos Pacientes</h3>
                    <ChartContainer
                      config={{
                        count: {
                          label: "Número de Pacientes",
                          color: "hsl(var(--primary))",
                        },
                      }}
                      className="h-[300px]"
                    >
                      <BarChart data={digitalSkillsData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis 
                          dataKey="skill" 
                          tick={{ fontSize: 12 }}
                          interval={0}
                          angle={-45}
                          textAnchor="end"
                          height={80}
                        />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="count" fill="hsl(var(--primary))" radius={4} />
                      </BarChart>
                    </ChartContainer>
                  </div>

                  {/* Canal de Lembrete */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Canal de Lembrete Preferido</h3>
                    <ChartContainer
                      config={{
                        whatsapp: { label: "WhatsApp", color: "hsl(var(--primary))" },
                        sms: { label: "SMS", color: "hsl(var(--primary-glow))" },
                        email: { label: "E-mail", color: "hsl(var(--secondary))" },
                        call: { label: "Ligação", color: "hsl(var(--accent))" },
                      }}
                      className="h-[300px]"
                    >
                       <RechartsPieChart>
                         <Pie
                           data={reminderChannelData}
                           cx="50%"
                           cy="50%"
                           outerRadius={80}
                           dataKey="value"
                           label={({ name, value }) => `${name}: ${value}`}
                         >
                           {reminderChannelData.map((entry, index) => (
                             <Cell key={`cell-${index}`} fill={entry.fill} />
                           ))}
                         </Pie>
                         <ChartTooltip content={<ChartTooltipContent />} />
                       </RechartsPieChart>
                    </ChartContainer>
                  </div>
                </div>

                {/* Dificuldades de Acessibilidade */}
                <div className="mt-6 space-y-4">
                  <h3 className="text-lg font-semibold">Dificuldades de Acessibilidade</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {accessibilityData.map((item, index) => {
                      const percentage = Math.round((item.count / item.total) * 100);
                      return (
                        <div key={index} className="p-4 border rounded-lg">
                          <div className="text-center space-y-2">
                            <h4 className="font-medium text-sm">{item.type}</h4>
                            <div className="text-2xl font-bold text-primary">{percentage}%</div>
                            <div className="text-sm text-muted-foreground">
                              {item.count} de {item.total} pacientes
                            </div>
                            <div className="w-full bg-secondary rounded-full h-2">
                              <div 
                                className="bg-primary h-2 rounded-full transition-all" 
                                style={{ width: `${percentage}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dashboard 2: Suporte e Engajamento */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <MessageSquare className="h-6 w-6" />
                  Suporte e Engajamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* FAQ Mais Acessados */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">FAQ Mais Acessados</h3>
                    <ChartContainer
                      config={{
                        views: {
                          label: "Visualizações",
                          color: "hsl(var(--secondary))",
                        },
                      }}
                      className="h-[300px]"
                    >
                      <BarChart data={faqData} layout="horizontal">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis 
                          dataKey="question" 
                          type="category" 
                          tick={{ fontSize: 10 }}
                          width={120}
                        />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="views" fill="hsl(var(--secondary))" radius={4} />
                      </BarChart>
                    </ChartContainer>
                  </div>

                  {/* Uso do Chatbot */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Tendências de Uso do Chatbot</h3>
                    <ChartContainer
                      config={{
                        usage: {
                          label: "Interações",
                          color: "hsl(var(--accent))",
                        },
                      }}
                      className="h-[300px]"
                    >
                      <LineChart data={chatbotUsageData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Line 
                          type="monotone" 
                          dataKey="usage" 
                          stroke="hsl(var(--accent))" 
                          strokeWidth={3}
                          dot={{ fill: "hsl(var(--accent))", strokeWidth: 2, r: 4 }}
                        />
                      </LineChart>
                    </ChartContainer>
                  </div>
                </div>

                {/* Perguntas Não Respondidas */}
                <div className="mt-6 space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <HelpCircle className="h-5 w-5" />
                    Principais Perguntas Não Respondidas
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {unansweredQuestions.map((question, index) => (
                      <div key={index} className="p-3 bg-muted rounded-lg flex items-center gap-3">
                        <div className="w-2 h-2 bg-warning rounded-full flex-shrink-0" />
                        <span className="text-sm">{question}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Botões de Exportação */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Exportar Relatório de Acessibilidade
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Exportar Dados de Engajamento
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Configurações */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informações do Profissional</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Nome</Label>
                      <Input value={mockProfessional.name} readOnly />
                    </div>
                    <div className="space-y-2">
                      <Label>CRM</Label>
                      <Input value={mockProfessional.crm} readOnly />
                    </div>
                    <div className="space-y-2">
                      <Label>Email</Label>
                      <Input value={mockProfessional.email} readOnly />
                    </div>
                    <div className="space-y-2">
                      <Label>Especialidade</Label>
                      <Input value={mockProfessional.specialty} readOnly />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Para alterar essas informações, entre em contato com o administrador do sistema.
                  </p>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Preferências do Sistema</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Notificações por Email</p>
                      <p className="text-sm text-muted-foreground">Receber emails sobre novos pacientes e consultas</p>
                    </div>
                    <Button variant="outline" size="sm">Ativado</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Relatórios Automáticos</p>
                      <p className="text-sm text-muted-foreground">Enviar relatórios mensais automaticamente</p>
                    </div>
                    <Button variant="outline" size="sm">Ativado</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};