import { Project } from "../../projects/ProjectsList"
import '../../styles/ProjectCard.css'

interface ProjectCardProps {
    project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="projectcard">
            <div className="imagecontainer">
                <a href={project.url}><img src={project.splashimg} alt={project.title} /></a>
                <h2>{project.title}</h2>
            </div>
        </div>
    )
}

export default ProjectCard
