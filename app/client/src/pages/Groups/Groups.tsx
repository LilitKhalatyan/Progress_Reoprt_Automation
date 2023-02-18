import React, { useState } from 'react';
import UsersList from '../../components/UsersList/UsersList';
import './groups.scss';

const group = [
	{ id: 1, name: 'Front End' },
	{ id: 2, name: 'Back End' },
	{ id: 3, name: 'AI / ML' },
];

const Groups: React.FC = () => {
	const [displayAdd, setDisplayAdd] = useState(false);
	const handleDelete = (id: any) => {};
	const handleGetTrainer = (id: any) => {};
	return (
		<>
			<UsersList
				title="Groups"
				data={group}
				display={displayAdd}
				setDisplay={setDisplayAdd}
				onDelete={handleDelete}
				getDataById={handleGetTrainer}
			/>
		</>
	);
};

export default Groups;
