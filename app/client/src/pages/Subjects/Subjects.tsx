import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UsersList from '../../components/UsersList/UsersList';
import { loadingSelector, subjectsSelector, errorSelector, messageSelector } from '../../redux/subject/subjectSelector';
import { deleteSubjectByIdAction, getSubjectByIdAction } from '../../redux/subject/subjectSlice';
// import "./subjects.scss";

const Subjects: React.FC = () => {
	const dispatch = useDispatch();
	const subjects = useSelector(subjectsSelector);
	const loading = useSelector(loadingSelector);
	const error = useSelector(errorSelector); //new line
	const message = useSelector(messageSelector); //new line

	const [displayAdd, setDisplayAdd] = useState(false);

	const handleDelete = (id: any) => {
		dispatch(deleteSubjectByIdAction(id));
	};
	const handleGetTrainer = (id: any) => {
		dispatch(getSubjectByIdAction(id));
	};
	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		// setSelect(e.target.value);
	};
	return (
		<>
			<UsersList
				title="Subjects"
				data={subjects}
				loading={loading}
				error={error}
				message={message}
				display={displayAdd}
				setDisplay={setDisplayAdd}
				onDelete={handleDelete}
				getDataById={handleGetTrainer}
				onSelect={handleSelectChange}
			/>
		</>
	);
};

export default Subjects;
