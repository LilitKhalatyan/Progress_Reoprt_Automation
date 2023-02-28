import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UsersList from '../../components/UsersList/UsersList';
import { deleteStudentByIdAction, getStudentByIdAction } from '../../redux/student/studentSlice';
import { loadingSelector, studentsSelector, messageSelector, errorSelector } from '../../redux/student/studentSelector';

const Students: React.FC = () => {
	const dispatch = useDispatch();
	const students = useSelector(studentsSelector);
	const loading = useSelector(loadingSelector);
	const error = useSelector(errorSelector); //new line
	const message = useSelector(messageSelector);
	console.log(message)
// console.log(error,'error', message, 'msg')
	const [displayAdd, setDisplayAdd] = useState(false);

	const handleDelete = (id: any) => {
		dispatch(deleteStudentByIdAction(id));
	};
	const handleGetStudent = (id: any) => {
		dispatch(getStudentByIdAction(id));
	};
	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		// setSelect(e.target.value);
	};
	return (
		<>
			<UsersList
				title="Students"
				data={students}
				loading={loading}
				error={error}
				message={message}
				display={displayAdd}
				setDisplay={setDisplayAdd}
				onDelete={handleDelete}
				getDataById={handleGetStudent}
				onSelect={handleSelectChange}
			/>
		</>
	);
};

export default Students;
