import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StudentListElement from '../../components/StudentList/StudentListElem';
import { userSelector } from '../../redux/auth/authSelector';
import { studentsSelector } from '../../redux/student/studentSelector';
import { getStudentsByTrainerIdAction } from '../../redux/student/studentSlice';

const TrainerStudents: React.FC = () => {
	const user = useSelector(userSelector);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getStudentsByTrainerIdAction(user.id));
	}, []);
	const students = useSelector(studentsSelector);
	console.log(user.id)
	console.log(students)
	return (
		<>
			<StudentListElement title="All Students" data={students} />
		</>
	);
};
export default TrainerStudents;
