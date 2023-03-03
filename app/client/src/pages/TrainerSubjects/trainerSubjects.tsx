import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StudentListElement from '../../components/StudentList/StudentListElem';
import { userSelector } from '../../redux/auth/authSelector';
import { subjectsSelector } from '../../redux/subject/subjectSelector';

const TrainerSubjects: React.FC = () => {
	const user = useSelector(userSelector);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getSubjectsByTrainerIdAction(user.id));
	}, []);
	const subjects = useSelector(subjectsSelector);
	return (
		<>
			<StudentListElement title="All Subjects" data={subjects} />
		</>
	);
};
export default TrainerSubjects;
