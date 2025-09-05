import type { Project } from "~/types";
import { Link } from "react-router";
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <a
      // to={`/projects/${project.id}`}
      href={project.url}
      target="_blank"
      className="block transform transition duration-300 hover:scale-[1.02]"
    >
      <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-sm hover:shadow-md overflow-hidden transition cursor-pointer">
        <img
          src={project.image}
          alt={project.title}
          className="w-full object-cover h-40"
        />
        <div className="p-5">
          <h2 className="text-2xl font-semibold text-blue-400">
            {project.title}
          </h2>
          <p className="text-gray-300">{project.description}</p>
          <div className="flex justify-between items-center text-gray-400 mt-2">
            <span>{project.category}</span>
            <span>{new Date(project.date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </a>
  );
};
export default ProjectCard;
