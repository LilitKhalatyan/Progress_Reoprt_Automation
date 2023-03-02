import { useSelector } from 'react-redux';
import StudentListElement from '../../components/StudentList/StudentListElem';
import { studentsSelector } from '../../redux/student/studentSelector';

const TrainerStudents: React.FC = () => {
	const students = useSelector(studentsSelector);
	return (
		<>
			<StudentListElement title="All Students" data={students} />
		</>
	);
};
export default TrainerStudents;
