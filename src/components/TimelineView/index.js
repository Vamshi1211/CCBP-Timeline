import {Chrono} from 'react-chrono'
import {Component} from 'react'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props

    return (
      <div className="chrono-container">
        <h1 className="heading">
          MY JOURNEY OF
          <span className="platform"> CCBP 4.0 </span>
        </h1>
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          theme={{
            primary: '#0967d2',
            secondary: '#ffffff',
            titleColor: '#0967d2',
            titleColorActive: 'red',
          }}
          fontSizes={{
            title: '1rem',
          }}
        >
          {timelineItemsList.map(eachItem => {
            if (eachItem.categoryId === 'COURSE') {
              return (
                <CourseTimelineCard key={eachItem.id} courseData={eachItem} />
              )
            }
            return (
              <ProjectTimelineCard
                key={eachItem.id}
                projectDetails={eachItem}
              />
            )
          })}
        </Chrono>
      </div>
    )
  }
}

export default TimelineView
