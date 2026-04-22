import React, { useState } from "react";
import ClientsListHeader from "../../components/UI/ClientsListHeader";
import ClientCard from "../../components/MobileComponents/ClientCard";
import { clients as initialClients } from "../../config/Clients";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";

export default function ClientList() {
  const [search, setSearch] = useState("");
  const [view, setView] = useState("table");
  const [clientsData, setClientsData] = useState(initialClients);

  const [openAddModal, setOpenAddModal] = useState(false);

  const [form, setForm] = useState({
    name: "",
    contact: "",
    status: "Active",
    projects: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddClient = () => {
    setClientsData((prev) => [
      ...prev,
      {
        id: `CL-${prev.length + 1}`,
        ...form,
      },
    ]);

    setOpenAddModal(false);

    setForm({
      name: "",
      contact: "",
      status: "Active",
      projects: 0,
    });
  };

  const filteredClients = clientsData.filter(
    (client) =>
      client.name.toLowerCase().includes(search.toLowerCase()) ||
      client.contact.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <ClientsListHeader
        search={search}
        setSearch={setSearch}
        view={view}
        setView={setView}
        onAddClient={() => setOpenAddModal(true)}
      />

      <ClientCard clients={filteredClients} view={view} />

      {/* ADD CLIENT MODAL */}
      {openAddModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-2 animate-slideUp">
          <div className="bg-white p-6 rounded-lg w-[400px] flex flex-col gap-3">
            
            <h2 className="text-lg font-semibold">Add Client</h2>

            <Input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Client Name"
            />

            <Input
              name="contact"
              value={form.contact}
              onChange={handleChange}
              placeholder="Contact (Email / Phone)"
            />

            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="border p-2 rounded"
            >
              <option value="Active">Active</option>
              <option value="Completed">Completed</option>
            </select>

            <Input
              type="number"
              name="projects"
              value={form.projects}
              onChange={handleChange}
              placeholder="Number of Projects"
            />

            <Button onClick={handleAddClient}>
              Add Client
            </Button>

            <Button
              onClick={() => setOpenAddModal(false)}
              variant="danger"
              className="text-[var(--danger400)] border border-[var(--danger)]"
            >
              Cancel
            </Button>

          </div>
        </div>
      )}
    </>
  );
}