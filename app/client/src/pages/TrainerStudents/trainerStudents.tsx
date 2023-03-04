import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StudentListElement from '../../components/StudentList/StudentListElem';
import UsersList from '../../components/UsersList/UsersList';
import { userSelector } from '../../redux/auth/authSelector';
import { coursesSelector } from '../../redux/course/courseSelector';
import { errorSelector, loadingSelector, messageSelector, studentsSelector } from '../../redux/student/studentSelector';
import { getStudentByCourseAction, getStudentsByTrainerIdAction } from '../../redux/student/studentSlice';

const TrainerStudents: React.FC = () => {
	const dispatch = useDispatch();

	const courses = useSelector(coursesSelector);

	const courseIds: any = [];
	courses.map(elem => courseIds.push(elem.id))

	useEffect(() => {
		dispatch(getStudentByCourseAction(courses[0].id));
	}, []);
	const students = useSelector(studentsSelector);
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
				title="All Students"
				data={students}
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
export default TrainerStudents;
