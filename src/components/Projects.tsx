import { ProjectList } from "../projects/ProjectsList"
import ProjectCard from "./templates/ProjectCard"


function Projects() {
  return (
    <div>
      <h1 style={{margin: "25px 0px 100px 0px"}}>Projects</h1>
        {ProjectList.map((project) => {
            return <ProjectCard project={project} />
        })}
    </div>
  )
}

export default Projects
