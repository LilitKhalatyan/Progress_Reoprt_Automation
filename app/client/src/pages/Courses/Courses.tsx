import React from 'react';
import './courses.scss';

const Courses: React.FC = () => {
  return (
    <div className='courses__container'>
      <div className='courses__content'>
        <div className='course-item'>Front End II</div>
        <div className='course-item'>Back End II</div>
        <div className='course-item'>Add course</div>

      </div>
    </div>
  )
}

export default Courses;