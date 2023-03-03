import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import StudentListElement from '../../components/StudentList/StudentListElem';
import { coursesSelector } from '../../redux/course/courseSelector';
import { userSelector } from '../../redux/auth/authSelector';
import { getCoursesByTrainerIdAction } from '../../redux/course/courseSlice';

const TrainerCourses: React.FC = () => {
	const user = useSelector(userSelector);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCoursesByTrainerIdAction(user.id));
	}, []);
	const courses = useSelector(coursesSelector);
	return (
		<>
			<StudentListElement title="All Courses" data={courses} />
		</>
	);
};

export default TrainerCourses;
