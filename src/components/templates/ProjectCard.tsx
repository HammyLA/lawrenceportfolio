import { Project } from "../../projects/ProjectsList"
import '../../styles/ProjectCard.css'

interface ProjectCardProps {
    project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="projectcard">
            <div className="imagecontainer">
                <a href={project.url}><img className="grow" height="250" width="400" src={project.splashimg} alt={project.title} /></a>
            </div>
            <div>
                <h2>{project.title}</h2>
                <h5>Technologies: {project.technologies}</h5>
                <p>{project.shortDescription}</p>
            </div>
        </div>
    )
}

export default ProjectCard
