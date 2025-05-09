import { ProjectList } from "../projects/ProjectsList"
import ProjectCard from "./templates/ProjectCard"
import '../styles/Projects.css'

function Projects() {
  return (
    <div className="greysection">
      <h1 id="projects">My Projects</h1>
      <h3>I'm always trying to work on whatever comes to mind. Check these out if you'd like !</h3>
      <div className="projects">
          {ProjectList.map((project) => {
              return <ProjectCard project={project} />
          })}
      </div>
    </div>
  )
}

export default Projects
