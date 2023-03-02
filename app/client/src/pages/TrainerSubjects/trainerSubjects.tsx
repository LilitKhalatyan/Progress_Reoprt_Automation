import { useSelector } from 'react-redux';
import StudentListElement from '../../components/StudentList/StudentListElem';
import { subjectsSelector } from '../../redux/subject/subjectSelector';

const TrainerSubjects: React.FC = () => {
	const subjects = useSelector(subjectsSelector);
	return (
		<>
			<StudentListElement title="All Subjects" data={subjects} />
		</>
	);
};
export default TrainerSubjects;
