import { useState } from 'react';
import { Plus, Search, Mail, Phone, Building2, MapPin, MoreHorizontal, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import ClientModal from './modals/ClientModal';
import ConfirmDialog from './modals/ConfirmDialog';
import { toast } from "sonner";
import { clients } from '@/data/companyData';

const AdminClients = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [clientModalOpen, setClientModalOpen] = useState(false);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState<any>(null);
  const [confirmAction, setConfirmAction] = useState<() => void>(() => {});

  const [clientsList, setClientsList] = useState(clients);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>;
      case 'Inactive':
        return <Badge variant="secondary">Inactive</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const handleNewClient = () => {
    setSelectedClient(null);
    setClientModalOpen(true);
  };

  const handleEditClient = (client: any) => {
    setSelectedClient(client);
    setClientModalOpen(true);
  };

  const handleDeleteClient = (client: any) => {
    setConfirmAction(() => () => {
      setClients(clients.filter(c => c.id !== client.id));
      toast.success('Client deleted successfully!');
    });
    setConfirmDialogOpen(true);
  };

  const handleSaveClient = (client: any) => {
    if (selectedClient) {
      setClientsList(clientsList.map(c => c.id === client.id ? client : c));
    } else {
      setClientsList([...clientsList, client]);
    }
  };

  const filteredClients = clientsList.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="font-orbitron font-bold text-2xl">Client Management</h2>
          <p className="text-muted-foreground">Manage client relationships and information</p>
        </div>
        <Button className="flex items-center space-x-2" onClick={handleNewClient}>
          <Plus className="h-4 w-4" />
          <span>Add Client</span>
        </Button>
      </div>

      {/* Search */}
      <Card className="glass-card p-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search clients by name, contact person, or company..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </Card>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClients.map((client) => (
          <Card key={client.id} className="glass-card p-6 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={client.avatar} />
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {getInitials(client.name)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{client.name}</h3>
                  <p className="text-sm text-muted-foreground">{client.id}</p>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => toast.info(`Viewing profile for ${client.name}`)}>View Profile</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleEditClient(client)}>Edit Client</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => toast.info(`Sending message to ${client.contactPerson}`)}>Send Message</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive" onClick={() => handleDeleteClient(client)}>
                    Delete Client
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Status</span>
                {getStatusBadge(client.status)}
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <Building2 className="h-4 w-4 text-muted-foreground" />
                  <span>{client.company}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{client.location}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="truncate">{client.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{client.phone}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-border">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-lg font-semibold">{client.projects}</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold">{client.totalValue}</div>
                    <div className="text-xs text-muted-foreground">Total Value</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{client.rating}</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  Since {new Date(client.joinDate).toLocaleDateString()}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Modals */}
      <ClientModal
        open={clientModalOpen}
        onOpenChange={setClientModalOpen}
        client={selectedClient}
        onSave={handleSaveClient}
      />
      
      <ConfirmDialog
        open={confirmDialogOpen}
        onOpenChange={setConfirmDialogOpen}
        title="Delete Client"
        description="Are you sure you want to delete this client? This action cannot be undone."
        onConfirm={confirmAction}
        confirmText="Delete"
        destructive
      />
    </div>
  );
};

export default AdminClients;