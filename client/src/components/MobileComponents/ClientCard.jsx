import TaskDropdown from "../UI/TaskDropdown";
import Button from "../UI/Button";
import ClientCardContent from "./ClientCardContent";
import ClientTable from "../UI/ClientTable";
import TaskModal from "../UI/TaskModal";
import { useState } from "react";

export default function ClientCard({ clients = [], view = "table" }) {
  const [statusFilter, setStatusFilter] = useState("Active");
  const [selectedClient, setSelectedClient] = useState(null);

  const getTextColor = (status) => {
    switch (status) {
      case "Active":
        return "text-[var(--highlight)]";
      case "Completed":
        return "text-[var(--accent)]";
      default:
        return "text-[var(--text)]";
    }
  };

  const filteredClients = clients.filter(
    (client) => client.status === statusFilter
  );

  return (
    <section className="flex w-full p-2 md:px-6 lg:px-4">
      <div className="flex flex-col p-2 gap-4 bg-[var(--secondary)] border w-full rounded-[16px] animate-fadeIn">
        
        {/* HEADER */}
        <div className="flex justify-between items-center">
          
          <div className="flex gap-2 md:gap-4 items-center">
            
            <div className="px-3 py-2 border rounded-md text-sm font-body text-[var(--text)]">
              Clients
            </div>

            <div className="hidden md:flex items-center px-3 py-2 border rounded-md text-sm text-[var(--text)]">
              {filteredClients.length}
            </div>

            <TaskDropdown
              options={["Active", "Completed"]}
              defaultValue="Active"
              getTextColor={getTextColor}
              onSelect={(value) => setStatusFilter(value)}
            />
          </div>

          <Button
            className="bg-transparent shadow-none whitespace-nowrap"
            to="/clients"
          >
            <p className="text-[var(--cta)] text-sm">View All</p>
          </Button>
        </div>

        {/* MOBILE (CARDS ONLY) */}
        <div className="flex flex-col gap-3 md:hidden">
          {filteredClients.map((client) => (
            <ClientCardContent
              key={client.id}
              client={client}
              onView={() => setSelectedClient(client)}
            />
          ))}
        </div>

        {/* TABLET+ */}
        <div className="hidden md:block">
          {view === "table" ? (
            <ClientTable clients={filteredClients} onView={(clients) => setSelectedClient(clients)}/>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredClients.map((client) => (
                <ClientCardContent
                  key={client.id}
                  client={client}
                  onView={() => setSelectedClient(client)}
                />
              ))}
            </div>
          )}
        </div>

      </div>

      {/* ================= CLIENT MODAL ================= */}
      <TaskModal
        isOpen={!!selectedClient}
        onClose={() => setSelectedClient(null)}
      >
        {selectedClient && (
          <div className="flex flex-col gap-2">
            
            <h2 className="font-body font-semibold text-[var(--text)] text-xl">
              {selectedClient.name}
            </h2>

            <p className="text-[var(--secondary400)]">
              Contact: {selectedClient.contact || "-"}
            </p>

            <p className="text-[var(--secondary400)]">
              Status: {selectedClient.status || "-"}
            </p>

            <p className="text-[var(--secondary400)]">
              Projects: {selectedClient.projects ?? 0}
            </p>

          </div>
        )}
      </TaskModal>

    </section>
  );
}