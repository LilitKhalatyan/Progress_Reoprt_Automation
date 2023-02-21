import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
import UsersList from '../../components/UsersList/UsersList';
import { deleteCourseByIdAction, getCourseByIdAction } from '../../redux/course/courseSlice';
import { coursesSelector, loadingSelector } from '../../redux/course/courseSelector';
// import './courses.scss';

const Courses: React.FC = () => {
	const dispatch = useDispatch();
	const courses = useSelector(coursesSelector);
	const loading = useSelector(loadingSelector);

	const [displayAdd, setDisplayAdd] = useState(false);

	const handleDelete = (id: any) => {
		dispatch(deleteCourseByIdAction(id));
	};
	const handleGetCourse = (id: any) => {
		dispatch(getCourseByIdAction(id));
	};
	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		// setSelect(e.target.value);
	};
	return (
		<>
			<UsersList
				title="Courses"
				data={courses}
				loading={loading}
				display={displayAdd}
				setDisplay={setDisplayAdd}
				onDelete={handleDelete}
				getDataById={handleGetCourse}
				onSelect={handleSelectChange}
			/>
		</>
	);
};

export default Courses;
