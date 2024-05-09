// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseData} = props
  const {courseTitle, description, duration, tagsList} = courseData
  return (
    <div className="courses-container">
      <div className="top-section">
        <h1 className="card-title">{courseTitle}</h1>
        <div className="icon-container">
          <AiFillClockCircle className="icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="card-des">{description}</p>
      <ul className="tags-list-container">
        {tagsList.map(eachTag => (
          <li key={eachTag.id} className="each-tag-container">
            <p className="tag-item">{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
