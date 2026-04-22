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
        return "text-[var(--positive600)]";
      case "Completed":
        return "text-[var(--accent)]";
      default:
        return "text-[var(--text)]";
    }
  };

  const filteredClients = clients.filter((client) => {
    if (statusFilter === "All") return true;
    return client.status === statusFilter;
  });

  return (
    <section className="flex w-full p-2 md:px-6 lg:px-4">
      <div className="flex flex-col p-2 gap-4 bg-[var(--secondary)] border w-full rounded-[16px] animate-fadeIn">
        {/* HEADER */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2 md:gap-4 items-center">
            <div className="px-3 py-2 border rounded-md text-sm font-body text-[var(--text)]">
              Clients
            </div>

            <div className="flex gap-1">
              <div className="hidden md:flex items-center px-3 py-2 border rounded-md text-sm text-[var(--text)]">
                {filteredClients.length}
              </div>

              <TaskDropdown
                options={["All", "Active", "Completed"]}
                defaultValue="All"
                getTextColor={getTextColor}
                onSelect={(value) => setStatusFilter(value)}
                btnclass={(selected) =>
                  selected === "Active"
                    ? "bg-[var(--positive)]"
                    : selected === "Completed"
                      ? "bg-[var(--accent400)]"
                      : ""
                }
              />
            </div>
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
            <ClientTable
              clients={filteredClients}
              onView={(clients) => setSelectedClient(clients)}
            />
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
          <div className="flex flex-col gap-5">
            {/* HEADER */}
            <div className="flex flex-col gap-1">
              <h2 className="font-heading font-semibold text-2xl text-[var(--text)]">
                {selectedClient.name}
              </h2>

              <p className="text-sm text-[var(--secondary400)]">
                Client Details Overview
              </p>
            </div>

            {/* INFO CARD */}
            <div className="flex flex-col gap-3 p-4 rounded-xl border bg-[var(--secondary)]">
              {/* CONTACT */}
              <div className="flex justify-between items-center">
                <p className="text-sm text-[var(--secondary400)]">Contact</p>
                <p className="text-sm font-medium text-[var(--text)]">
                  {selectedClient.contact || "-"}
                </p>
              </div>

              {/* STATUS */}
              <div className="flex justify-between items-center">
                <p className="text-sm text-[var(--secondary400)]">Status</p>

                <span
                  className={`px-2 py-1 rounded-md text-xs font-medium
              ${
                selectedClient.status === "Active"
                  ? "bg-[var(--positive)] text-[var(--positive600)]"
                  : selectedClient.status === "Completed"
                    ? "bg-[var(--accent100)] text-[var(--accent)]"
                    : "bg-[var(--secondary400)] text-[var(--text)]"
              }`}
                >
                  {selectedClient.status || "-"}
                </span>
              </div>

              {/* PROJECTS */}
              <div className="flex justify-between items-center">
                <p className="text-sm text-[var(--secondary400)]">Projects</p>
                <p className="text-sm font-medium text-[var(--text)]">
                  {selectedClient.projects ?? 0}
                </p>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex gap-2">
              <Button
                className="flex-1"
                onClick={() => console.log("Edit:", selectedClient.id)}
              >
                Edit Client
              </Button>

              <Button
                className="flex-1 text-[var(--danger400)]"
                variant="danger"
                onClick={() => console.log("Delete:", selectedClient.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        )}
      </TaskModal>
    </section>
  );
}
