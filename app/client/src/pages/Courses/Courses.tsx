import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import UsersList from '../../components/UsersList/UsersList';
import { getAllCoursesAction } from '../../redux/course/courseSlice';
import { courseSelector } from '../../redux/course/courseSelector';
import './courses.scss';

const Courses: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllCoursesAction());
  }, []);

  const [displayAdd, setDisplayAdd] = useState(false);

  const courses = useSelector(courseSelector);

  return (
    <>
      <UsersList
        title="Courses"
        data={courses}
        display={displayAdd}
        setDisplay={setDisplayAdd}
      />
    </>
  );
};

export default Courses;
