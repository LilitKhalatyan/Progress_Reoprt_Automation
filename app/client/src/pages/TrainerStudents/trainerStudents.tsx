import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UsersList from '../../components/UsersList/UsersList';
import { authSelector, userSelector } from '../../redux/auth/authSelector';
import { coursesSelector } from '../../redux/course/courseSelector';
import { courseReset, getCoursesByTrainerIdAction } from '../../redux/course/courseSlice';
import {
	errorSelector,
	loadingSelector,
	messageSelector,
	studentsSelector,
} from '../../redux/student/studentSelector';
import {
	getStudenstByCoursesAction,
	getStudentByCourseAction,
	getStudentsByTrainerIdAction,
	studentReset,
} from '../../redux/student/studentSlice';
import { subjectSelector } from '../../redux/subject/subjectSelector';

const TrainerStudents: React.FC = () => {
	const dispatch = useDispatch();
	const [selectedValue, setSelectedValue] = useState('all');
	const [displayAdd, setDisplayAdd] = useState(false);
	const courses = useSelector(coursesSelector);
	const courseIds: any = [];
	courses.map((elem) => courseIds.push(elem.id));
	const students = useSelector(studentsSelector);
	const loading = useSelector(loadingSelector);
	const error = useSelector(errorSelector);
	const message = useSelector(messageSelector);
	const auth = useSelector(authSelector);
	useEffect(() => {
		if (auth && localStorage.getItem('user')) {
			dispatch(getStudenstByCoursesAction(courseIds));
		}
		return () => {
			dispatch(studentReset());
		};
	}, [courses]);

	const handleDelete = (id: any) => {
		// dispatch(deleteCourseByIdAction(id));
	};
	const handleGetCourse = (id: any) => {
		// dispatch(getCourseByIdAction(id));
	};
	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		console.log(e.target.value, courseIds);
		if (e.target.value === 'all') {
			console.log(e.target.value);
			dispatch(getStudenstByCoursesAction(courseIds));
		} else {
			dispatch(getStudenstByCoursesAction([e.target.value]));
		}
		setSelectedValue(e.target.value);
	};
	return (
		<>
			<UsersList
				title="All Students"
				data={students}
				loading={loading}
				error={error}
				message={message}
				display={displayAdd}
				// hideElement="hide"
				selectedValue={selectedValue}
				setDisplay={setDisplayAdd}
				onDelete={handleDelete}
				getDataById={handleGetCourse}
				onSelect={handleSelectChange}
			/>
		</>
	);
};
export default TrainerStudents;
