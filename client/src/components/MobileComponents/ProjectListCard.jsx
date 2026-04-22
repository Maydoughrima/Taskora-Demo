import TaskDropdown from "../UI/TaskDropdown";
import Button from "../UI/Button";
import ProjectListCardContent from "./ProjectListCardContent";
import ProjectListTable from "../UI/ProjectListTable";
import TaskModal from "../UI/TaskModal";
import { useState } from "react";

export default function ProjectListCard({ projects = [], view = "table" }) {
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const getTextColor = (priority) => {
    switch (priority) {
      case "High":
        return "text-[var(--danger400)]";
      case "Medium":
        return "text-[var(--cta)]";
      case "Low":
        return "text-[var(--accent)]";
      default:
        return "text-[var(--text)]";
    }
  };

  const filteredProjects = projects.filter((project) =>
    priorityFilter === "All" ? true : project.priority === priorityFilter,
  );

  console.log("PROJECTS:", projects);

  return (
    <section className="flex w-full p-2 md:px-6 lg:px-4">
      <div className="flex flex-col p-2 gap-4 bg-[var(--secondary)] border w-full rounded-[16px] animate-fadeIn">
        {/* HEADER */}
        <div className="flex justify-between items-center">
          <div className="flex gap-1 md:gap-4 items-center">
            <div className="px-3 py-2 border rounded-md text-sm font-body text-[var(--text)]">
              Projects
            </div>

            <div className="flex gap-1">
              <div className="hidden md:flex items-center px-3 py-2 border rounded-md text-sm text-[var(--text)]">
              {filteredProjects.length}
            </div>

            <TaskDropdown
              options={["All", "High", "Medium", "Low"]}
              defaultValue="All"
              getTextColor={getTextColor}
              onSelect={(value) => setPriorityFilter(value)}
              btnclass={(selected) =>
                selected === "High"
                  ? "bg-[var(--danger)] text-[var(--danger400)]"
                  : selected === "Medium"
                    ? "bg-[var(--cta400)] text-[var(--cta)]"
                    : selected === "Low"
                      ? "bg-[var(--accent400)]"
                      : ""
              }
            />
            </div>
          </div>

          <Button
            className="bg-transparent shadow-none whitespace-nowrap"
            to="/projects"
          >
            <p className="text-[var(--cta)] text-sm">View All</p>
          </Button>
        </div>

        {/* MOBILE (CARDS ONLY) */}
        <div className="flex flex-col gap-3 md:hidden">
          {filteredProjects.map((project) => (
            <ProjectListCardContent
              key={project.id}
              project={project}
              onView={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* TABLET+ */}
        <div className="hidden md:block">
          {view === "table" ? (
            <ProjectListTable
              projects={filteredProjects}
              onView={(project) => setSelectedProject(project)}
            />
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredProjects.map((project) => (
                <ProjectListCardContent
                  key={project.id}
                  project={project}
                  onView={() => setSelectedProject(project)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ================= PROJECT MODAL ================= */}
      <TaskModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <div className="flex flex-col gap-5">
            {/* HEADER */}
            <div className="flex flex-col gap-1">
              <h2 className="font-heading font-semibold text-2xl text-[var(--text)]">
                {selectedProject.projectname}
              </h2>

              <p className="text-sm text-[var(--secondary400)]">
                Project Details Overview
              </p>
            </div>

            {/* INFO CARD */}
            <div className="flex flex-col gap-3 p-4 rounded-xl border bg-[var(--secondary)]">
              {/* CLIENT */}
              <div className="flex justify-between items-center">
                <p className="text-sm text-[var(--secondary400)]">Client</p>
                <p className="text-sm font-medium text-[var(--text)]">
                  {selectedProject.clientname || "-"}
                </p>
              </div>

              {/* STATUS */}
              <div className="flex justify-between items-center">
                <p className="text-sm text-[var(--secondary400)]">Status</p>

                <span
                  className={`px-2 py-1 rounded-md text-xs font-medium
              ${
                selectedProject.status === "Active"
                  ? "bg-[var(--positive)] text-[var(--positive600)]"
                  : selectedProject.status === "Completed"
                    ? "bg-[var(--accent100)] text-[var(--accent)]"
                    : "bg-[var(--secondary400)] text-[var(--text)]"
              }`}
                >
                  {selectedProject.status || "-"}
                </span>
              </div>

              {/* PRIORITY */}
              <div className="flex justify-between items-center">
                <p className="text-sm text-[var(--secondary400)]">Priority</p>

                <span
                  className={`px-2 py-1 rounded-md text-xs font-medium
              ${
                selectedProject.priority === "High"
                  ? "bg-[var(--danger100)] text-[var(--danger400)]"
                  : selectedProject.priority === "Medium"
                    ? "bg-[var(--cta100)] text-[var(--cta)]"
                    : selectedProject.priority === "Low"
                      ? "bg-[var(--accent100)] text-[var(--accent)]"
                      : "bg-[var(--secondary400)] text-[var(--text)]"
              }`}
                >
                  {selectedProject.priority || "-"}
                </span>
              </div>

              {/* DEADLINE */}
              <div className="flex justify-between items-center">
                <p className="text-sm text-[var(--secondary400)]">Deadline</p>
                <p className="text-sm font-medium text-[var(--text)]">
                  {selectedProject.deadline || "-"}
                </p>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex gap-2">
              <Button
                className="flex-1"
                onClick={() => console.log("Edit:", selectedProject.id)}
              >
                Edit Project
              </Button>

              <Button
                className="flex-1 text-[var(--danger400)]"
                variant="danger"
                onClick={() => console.log("Delete:", selectedProject.id)}
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
