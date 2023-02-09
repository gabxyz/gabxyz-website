import clsx from "clsx";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export interface ProjectCardProps {
  title: string;
  overview: string;
  stack: string[];
  liveUrl: string;
  repoUrl: string;
}

const ProjectCard = ({
  title,
  overview,
  stack,
  liveUrl,
  repoUrl,
}: ProjectCardProps) => {
  return (
    <>
      <div className="not-prose max-w-lg py-4">
        <a
          aria-label={`go to ${title} website`}
          target="_blank"
          rel="noopener noreferrer"
          href={liveUrl}
          className="group gap-1 font-medium inline-flex items-center underline decoration-gray-11 decoration-from-font underline-offset-4 motion-safe:duration-200 motion-safe:ease-productive-standard hover:opacity-80"
        >
          {title}
          <ArrowUpRight
            size={16}
            className="text-gray-11 group-hover:rotate-45 motion-safe:duration-200 motion-safe:ease-productive-standard"
          />
        </a>

        <p className="text-gray-11">{overview}</p>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-gray-11 text-sm">{stack.join(" - ")}</p>
          <a
            aria-label={`go to ${title} repository`}
            target="_blank"
            rel="noopener noreferrer"
            href={repoUrl}
            className="group gap-1 text-sm inline-flex items-center underline decoration-dotted decoration-gray-11 decoration-from-font underline-offset-4 motion-safe:duration-200 motion-safe:ease-productive-standard hover:opacity-80"
          >
            code
            <ArrowRight
              size={16}
              className="text-gray-11 group-hover:translate-x-0.5 motion-safe:duration-200 motion-safe:ease-productive-standard"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
