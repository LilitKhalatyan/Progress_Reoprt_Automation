import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UsersList from '../../components/UsersList/UsersList';
import {
	coursesSelector,
	errorSelector,
	loadingSelector,
	messageSelector,
} from '../../redux/course/courseSelector';

const TrainerCourses: React.FC = () => {
	const dispatch = useDispatch();

	const courses = useSelector(coursesSelector);
	const loading = useSelector(loadingSelector);
	const error = useSelector(errorSelector);
	const message = useSelector(messageSelector);

	const [displayAdd, setDisplayAdd] = useState(false);

	const handleDelete = (id: any) => {
		// dispatch(deleteCourseByIdAction(id));
	};
	const handleGetCourse = (id: any) => {
		// dispatch(getCourseByIdAction(id));
	};
	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		// setSelect(e.target.value);
	};
	return (
		<>
			<UsersList
				title="All Courses"
				data={courses}
				loading={loading}
				error={error} //new line
				message={message}
				display={displayAdd}
				hideElement="hide"
				setDisplay={setDisplayAdd}
				onDelete={handleDelete}
				getDataById={handleGetCourse}
				onSelect={handleSelectChange}
			/>
		</>
	);
};

export default TrainerCourses;
