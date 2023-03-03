import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StudentListElement from '../../components/StudentList/StudentListElem';
import { userSelector } from '../../redux/auth/authSelector';
import { subjectsSelector } from '../../redux/subject/subjectSelector';
import { getSubjectByTrainerIdAction } from '../../redux/subject/subjectSlice';

const TrainerSubjects: React.FC = () => {
	const user = useSelector(userSelector);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getSubjectByTrainerIdAction(user.id));
	}, []);
	const subjects = useSelector(subjectsSelector);
	console.log(subjects)
	console.log(user.id)
	return (
		<>
			<StudentListElement title="All Subjects" data={subjects} />
		</>
	);
};
export default TrainerSubjects;
