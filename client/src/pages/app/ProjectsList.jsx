import React, { useState } from "react";
import ProjectListHeader from "../../components/UI/ProjectListHeader";
import ProjectListCard from "../../components/MobileComponents/ProjectListCard";
import { projects as initialProjects } from "../../config/Projects";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";

export default function ProjectsList() {
  const [search, setSearch] = useState("");
  const [view, setView] = useState("table");
  const [projectsData, setProjectsData] = useState(initialProjects);

  const [openAddModal, setOpenAddModal] = useState(false);

  const [form, setForm] = useState({
    projectname: "",
    clientname: "",
    status: "Active",
    priority: "Medium",
    deadline: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddProject = () => {
    setProjectsData((prev) => [
      ...prev,
      {
        id: `PJ-${String(prev.length + 1).padStart(3, "0")}`,
        ...form,
      },
    ]);

    setOpenAddModal(false);

    setForm({
      projectname: "",
      clientname: "",
      status: "Active",
      priority: "Medium",
      deadline: "",
    });
  };

  const filteredProjects = projectsData.filter(
    (project) =>
      project.projectname.toLowerCase().includes(search.toLowerCase()) ||
      project.clientname.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* HEADER */}
      <ProjectListHeader
        search={search}
        setSearch={setSearch}
        view={view}
        setView={setView}
        onAddProject={() => setOpenAddModal(true)}
      />

      {/* LIST */}
      <ProjectListCard projects={filteredProjects} view={view} />

      {/* ADD PROJECT MODAL */}
      {openAddModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-2 animate-slideUp">
          <div className="bg-white p-6 rounded-lg w-[400px] flex flex-col gap-3">

            <h2 className="text-lg font-semibold">Add Project</h2>

            <Input
              name="projectname"
              value={form.projectname}
              onChange={handleChange}
              placeholder="Project Name"
            />

            <Input
              name="clientname"
              value={form.clientname}
              onChange={handleChange}
              placeholder="Client Name"
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

            <select
              name="priority"
              value={form.priority}
              onChange={handleChange}
              className="border p-2 rounded"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>

            <Input
              type="date"
              name="deadline"
              value={form.deadline}
              onChange={handleChange}
            />

            <Button onClick={handleAddProject}>
              Add Project
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