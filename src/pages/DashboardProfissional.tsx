import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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
  Bell
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
    observations: ''
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Estatísticas do Mês
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Consultas Realizadas</span>
                      <span className="font-bold">89</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Taxa de Comparecimento</span>
                      <span className="font-bold text-success">88%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Pacientes Preparados</span>
                      <span className="font-bold text-success">78%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Média de Tempo por Consulta</span>
                      <span className="font-bold">32 min</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Exportar Relatórios</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Relatório de Absenteísmo (PDF)
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Lista de Pacientes (Excel)
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Estatísticas Mensais (PDF)
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Análise de Preparação dos Pacientes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-success/10 rounded-lg">
                    <div className="text-2xl font-bold text-success">78%</div>
                    <div className="text-sm text-muted-foreground">Preparados</div>
                  </div>
                  <div className="text-center p-4 bg-warning/10 rounded-lg">
                    <div className="text-2xl font-bold text-warning">15%</div>
                    <div className="text-sm text-muted-foreground">Em Preparação</div>
                  </div>
                  <div className="text-center p-4 bg-destructive/10 rounded-lg">
                    <div className="text-2xl font-bold text-destructive">7%</div>
                    <div className="text-sm text-muted-foreground">Não Preparados</div>
                  </div>
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