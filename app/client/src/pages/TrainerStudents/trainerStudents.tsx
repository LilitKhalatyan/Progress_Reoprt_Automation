import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UsersList from '../../components/UsersList/UsersList';
import { authSelector, userSelector } from '../../redux/auth/authSelector';
import { coursesSelector } from '../../redux/course/courseSelector';
import { courseReset, getCoursesByTrainerIdAction } from '../../redux/course/courseSlice';
import { errorSelector, loadingSelector, messageSelector, studentsSelector } from '../../redux/student/studentSelector';
import { getStudenstByCoursesAction , getStudentByCourseAction, getStudentsByTrainerIdAction, studentReset } from '../../redux/student/studentSlice';
import { subjectSelector } from '../../redux/subject/subjectSelector';

const TrainerStudents: React.FC = () => {
	const dispatch = useDispatch();
    const [selectedValue, setSelectedValue] = useState("all");
	const user = useSelector(userSelector);
	const courses = useSelector(coursesSelector);
	const subject = useSelector(subjectSelector);
	// console.log(subject,"subject")
	// console.log(courses, "before")
	const courseIds: any = [];
	courses.map(elem => courseIds.push(elem.id))
	// console.log(courseIds, "after")
	
	const students = useSelector(studentsSelector);
	const loading = useSelector(loadingSelector);
	const error = useSelector(errorSelector);
	const message = useSelector(messageSelector);
const auth = useSelector(authSelector);
	useEffect(() => {
		console.log('mount students')
		// console.log(auth, localStorage.getItem("user"))
		// console.log(courseIds,"gggggggggggggggg")
		if(auth && localStorage.getItem("user")) {
			dispatch(getStudenstByCoursesAction(courseIds));
			// dispatch(getCoursesByTrainerIdAction(user.id));
		}
		
		return () => {
			console.log("unmount students")
			// dispatch(courseReset());
			dispatch(studentReset());
		}
	}, []);
	const [displayAdd, setDisplayAdd] = useState(false);

	const handleDelete = (id: any) => {
		// dispatch(deleteCourseByIdAction(id));
	};
	const handleGetCourse = (id: any) => {
		// dispatch(getCourseByIdAction(id));
	};
	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		
		console.log(e.target.value, courseIds)
		if (e.target.value === 'all') {
			dispatch(getStudenstByCoursesAction(courseIds));
		}else {
			dispatch(getStudentByCourseAction(e.target.value));
		}
		setSelectedValue(e.target.value);
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
