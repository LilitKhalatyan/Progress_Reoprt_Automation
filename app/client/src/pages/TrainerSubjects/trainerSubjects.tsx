import { useState } from 'react';
import { useSelector } from 'react-redux';
import UsersList from '../../components/UsersList/UsersList';
import {
	errorSelector,
	loadingSelector,
	messageSelector,
	subjectsSelector,
} from '../../redux/subject/subjectSelector';

const TrainerSubjects: React.FC = () => {
	const subjects = useSelector(subjectsSelector);
	const loading = useSelector(loadingSelector);
	const error = useSelector(errorSelector);
	const message = useSelector(messageSelector);

	const [displayAdd, setDisplayAdd] = useState(false);
	const [selectedValue, setSelectedValue] = useState('all');

	const handleDelete = (id: any) => {};
	const handleGetTrainer = (id: any) => {};
	const handleSelectChange = (e: any) => {};
	return (
		<>
			<UsersList
				title="All Subjects"
				data={subjects}
				loading={loading}
				error={error}
				message={message}
				hideElement="hide"
				display={displayAdd}
				selectedValue={selectedValue}
				setDisplay={setDisplayAdd}
				onDelete={handleDelete}
				getDataById={handleGetTrainer}
				onSelect={handleSelectChange}
			/>
		</>
	);
};

export default TrainerSubjects;
