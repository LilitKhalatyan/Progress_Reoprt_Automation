import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import UsersList from '../../components/UsersList/UsersList';
import { getAllCoursesAction } from '../../redux/course/courseSlice';
import { coursesSelector, courseSelector } from '../../redux/course/courseSelector';
import { useDispatch } from 'react-redux';
import './groups.scss';

// const group = [
//   { id: 1, name: 'Front End' },
//   { id: 2, name: 'Back End' },
//   { id: 3, name: 'AI / ML' },
// ];

const Groups: React.FC = () => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(getAllCoursesAction());
  }, []);

  const [displayAdd, setDisplayAdd] = useState(false);

  const courses = useSelector(coursesSelector);
  console.log(courses)
  return (
    <>
      {/* <UsersList
        title="Groups"
        data={group}
        display={displayAdd}
        setDisplay={setDisplayAdd}
      /> */}
      <UsersList
        title="Groups"
        data={courses}
        display={displayAdd}
        setDisplay={setDisplayAdd}
      />
    </>
  );
};

export default Groups;
