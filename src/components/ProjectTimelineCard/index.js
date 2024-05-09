// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    description,
    duration,
    imageUrl,
    projectTitle,
    projectUrl,
  } = projectDetails

  return (
    <div className="project-container">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="project-title-icon-container">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="project-icon-container">
          <AiFillCalendar className="date-icon" />
          <p className="project-duration">{duration}</p>
        </div>
      </div>
      <p className="project-des">{description}</p>
      <a href={projectUrl} className="project-url" target="__blank">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
