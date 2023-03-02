import { useSelector } from 'react-redux';
// import StudentList from '../../components/StudentList/StudentList';
import StudentListElement from '../../components/StudentList/StudentListElem';
import { coursesSelector } from '../../redux/course/courseSelector';

const TrainerCourses: React.FC = () => {
	const courses = useSelector(coursesSelector);
	return (
		<>
			<StudentListElement title="All Courses" data={courses}/>
		</>
	);
};

export default TrainerCourses;
