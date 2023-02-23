import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import UsersList from '../../components/UsersList/UsersList';
import { deleteCourseByIdAction, getCourseByIdAction } from '../../redux/course/courseSlice';
import { coursesSelector, loadingSelector, messageSelector } from '../../redux/course/courseSelector';
import { toast } from 'react-toastify';
// import './courses.scss';

const Courses: React.FC = () => {
	const dispatch = useDispatch();
	const courses = useSelector(coursesSelector);
	const loading = useSelector(loadingSelector);
	const message = useSelector(messageSelector);

	const notify = () =>
		toast(message, {
			position: 'top-center',
			className: 'toast-message',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			progress: undefined,
			theme: 'dark',
		});

	const [displayAdd, setDisplayAdd] = useState(false);

	const handleDelete = (id: any) => {
		dispatch(deleteCourseByIdAction(id));
		// notify();
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
				titles={[{ name: 'Name', startDate: 'Start Date', endDate: 'End Date' }]}
			/>
		</>
	);
};

export default Courses;
