import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
import UsersList from '../../components/UsersList/UsersList';
import { subjectsSelector } from '../../redux/subject/subjectSelector';
import {
	deleteSubjectByIdAction,
	getAllSubjectAction,
	getSubjectByIdAction,
} from '../../redux/subject/subjectSlice';
// import "./subjects.scss";

// const subjects = [
// 	{ id: 1, name: 'DevOps' },
// 	{ id: 2, name: 'HTML/CSS' },
// 	{ id: 3, name: 'JavaScript' },
// 	{ id: 4, name: 'Java' },
// 	{ id: 1, name: 'NodeJS' },
// 	{ id: 2, name: 'CS' },
// 	{ id: 3, name: 'QA' },
// 	{ id: 4, name: 'React/Redux' },
// ];

const Subjects: React.FC = () => {
	const dispatch = useDispatch();
	const {subjects, loading} = useSelector(subjectsSelector);
	// const subjects = useSelector()
	const [displayAdd, setDisplayAdd] = useState(false);
	const handleDelete = (id: any) => {
		dispatch(deleteSubjectByIdAction(id));
	};
	const handleGetTrainer = (id: any) => {
		dispatch(getSubjectByIdAction(id));
	};

	useEffect(() => {
		dispatch(getAllSubjectAction());
	}, []);

	return (
		<>
		{loading ? Spinner() : <UsersList
				title="Subjects"
				data={subjects}
				display={displayAdd}
				setDisplay={setDisplayAdd}
				onDelete={handleDelete}
				getDataById={handleGetTrainer}
			/>}
			
		</>
	);
};

export default Subjects;
