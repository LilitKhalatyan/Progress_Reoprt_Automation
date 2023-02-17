import React, { useEffect, useState } from 'react';
import UsersList from '../../components/UsersList/UsersList';
import AddItem from '../../components/AddItem/AddItem';

import './students.scss';

const students = [
	{
		id: 1,
		groupId: 1,
		name: 'John',
		surname: 'Doe',
		email: 'nameX@gemail.com',
	},
	{
		id: 2,
		groupId: 2,
		name: 'Jam',
		surname: 'Yang',
		email: 'nameX@gemail.com',
	},
	{
		id: 3,
		groupId: 1,
		name: 'Tom',
		surname: 'Mirzoyan',
		email: 'nameX@gemail.com',
	},
	{
		id: 4,
		groupId: 1,
		name: 'Ann',
		surname: 'Hardy',
		email: 'nameX@gemail.com',
	},
	{
		id: 1,
		groupId: 1,
		name: 'John',
		surname: 'Doe',
		email: 'nameX@gemail.com',
	},
	{
		id: 2,
		groupId: 1,
		name: 'Jam',
		surname: 'Yang',
		email: 'nameX@gemail.com',
	},
	{
		id: 3,
		groupId: 2,
		name: 'Tom',
		surname: 'Mirzoyan',
		email: 'nameX@gemail.com',
	},
	{
		id: 4,
		groupId: 3,
		name: 'Ann',
		surname: 'Hardy',
		email: 'nameX@gemail.com',
	},
];

const Students: React.FC = () => {
	const [displayAdd, setDisplayAdd] = useState(false);

	return (
		<>
			<UsersList title="Students" data={students} display={displayAdd} setDisplay={setDisplayAdd} />
		</>
	);
};

export default Students;
