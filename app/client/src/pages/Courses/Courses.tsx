import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import UsersList from '../../components/UsersList/UsersList';
import {
	deleteCourseByIdAction,
	getAllCoursesAction,
	getCourseByIdAction,
} from '../../redux/course/courseSlice';
import { coursesSelector } from '../../redux/course/courseSelector';
import './courses.scss';

const Courses: React.FC = () => {
	const dispatch = useDispatch();
	const courses = useSelector(coursesSelector);

	useEffect(() => {
		dispatch(getAllCoursesAction());
	}, []);

	const [displayAdd, setDisplayAdd] = useState(false);

	const handleDelete = (id: any) => {
		dispatch(deleteCourseByIdAction(id));
	};
	const handleGetCourse = (id: any) => {
		dispatch(getCourseByIdAction(id));
	};
	return (
		<>
			<UsersList
				title="Courses"
				data={courses}
				display={displayAdd}
				setDisplay={setDisplayAdd}
				onDelete={handleDelete}
				getDataById={handleGetCourse}
			/>
		</>
	);
};

export default Courses;
