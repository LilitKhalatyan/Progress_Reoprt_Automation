import React, { useState } from 'react';
import UsersList from '../../components/UsersList/UsersList';
import { useDispatch, useSelector } from 'react-redux';
import { loadingSelector, studentsSelector } from '../../redux/student/studentSelector';
import { deleteStudentByIdAction, getStudentByIdAction } from '../../redux/student/studentSlice';

// import './students.scss';

const Students: React.FC = () => {
	const dispatch = useDispatch();
	const students = useSelector(studentsSelector);
	const loading = useSelector(loadingSelector);
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
