interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  status: string;
  technologies: string[];
  icon: string;
}

export function ProjectCard({
  title,
  description,
  status,
  technologies,
  icon,
}: ProjectCardProps) {
  const statusColor =
    status === "In Progress"
      ? "bg-blue-500/20 text-blue-400"
      : "bg-yellow-500/20 text-yellow-400";

  return (
    <div className="p-8 rounded-lg bg-[#1a1a1a] border border-gray-800 hover:border-red-600 transition-all hover:shadow-lg hover:shadow-red-600/20">
      {/* Icon & Title */}
      <div className="flex items-start gap-4 mb-4">
        <span className="text-4xl">{icon}</span>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <span
            className={`inline-block mt-2 px-3 py-1 text-xs font-semibold rounded-full ${statusColor}`}
          >
            {status}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-semibold text-gray-300 bg-gray-800 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
