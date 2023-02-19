import React, { useEffect, useState } from 'react';
import UsersList from '../../components/UsersList/UsersList';
import AddItem from '../../components/AddItem/AddItem';

import './students.scss';
import { useDispatch, useSelector } from 'react-redux';
import { studentsSelector } from '../../redux/student/studentSelector';
import { deleteStudentByIdAction, getAllStudentsAction, getStudentByIdAction } from '../../redux/student/studentSlice';
import { deleteStudentById } from '../../redux/student/studentSaga';

// const students = [
// 	{
// 		id: 1,
// 		groupId: 1,
// 		name: 'John',
// 		surname: 'Doe',
// 		email: 'nameX@gemail.com',
// 	},
// 	{
// 		id: 2,
// 		groupId: 2,
// 		name: 'Jam',
// 		surname: 'Yang',
// 		email: 'nameX@gemail.com',
// 	},
// 	{
// 		id: 3,
// 		groupId: 1,
// 		name: 'Tom',
// 		surname: 'Mirzoyan',
// 		email: 'nameX@gemail.com',
// 	},
// 	{
// 		id: 4,
// 		groupId: 1,
// 		name: 'Ann',
// 		surname: 'Hardy',
// 		email: 'nameX@gemail.com',
// 	},
// 	{
// 		id: 1,
// 		groupId: 1,
// 		name: 'John',
// 		surname: 'Doe',
// 		email: 'nameX@gemail.com',
// 	},
// 	{
// 		id: 2,
// 		groupId: 1,
// 		name: 'Jam',
// 		surname: 'Yang',
// 		email: 'nameX@gemail.com',
// 	},
// 	{
// 		id: 3,
// 		groupId: 2,
// 		name: 'Tom',
// 		surname: 'Mirzoyan',
// 		email: 'nameX@gemail.com',
// 	},
// 	{
// 		id: 4,
// 		groupId: 3,
// 		name: 'Ann',
// 		surname: 'Hardy',
// 		email: 'nameX@gemail.com',
// 	},
// ];

const Students: React.FC = () => {
	const dispatch = useDispatch();
	const students = useSelector(studentsSelector);
	const [displayAdd, setDisplayAdd] = useState(false);

	useEffect(() => {
		dispatch(getAllStudentsAction());
	},[])

	const handleDelete = (id: any) => {
		dispatch(deleteStudentByIdAction(id));
	};
	const handleGetStudent = (id: any) => {
		dispatch(getStudentByIdAction(id));
	};
	return (
		<>
			<UsersList
				title="Students"
				data={students}
				display={displayAdd}
				setDisplay={setDisplayAdd}
				onDelete={handleDelete}
				getDataById={handleGetStudent}
			/>
		</>
	);
};

export default Students;

