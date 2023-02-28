import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UsersList from '../../components/UsersList/UsersList';

import {
	loadingSelector,
	errorSelector,
	messageSelector,
	trainersSelector,
} from '../../redux/trainer/trainerSelector';
import { deleteTrainerByIdAction, getTrainerByIdAction } from '../../redux/trainer/trainerSlice';

import './trainers.scss';

const Trainers: React.FC = () => {
	const dispatch = useDispatch();
	const [displayAdd, setDisplayAdd] = useState(false);
	const trainers = useSelector(trainersSelector);
	const loading = useSelector(loadingSelector);
	const error = useSelector(errorSelector); //new line
	const message = useSelector(messageSelector); //new line

	const handleDelete = (id: any) => {
		dispatch(deleteTrainerByIdAction(id));
	};
	const handleGetTrainer = (id: any) => {
		dispatch(getTrainerByIdAction(id));
	};
	const handleSelectChange = (id: any) => {
		// setSelect(e.target.value);
	};
	return (
		<>
			<UsersList
				title="Trainers"
				data={trainers}
				display={displayAdd}
				loading={loading}
				error={error} //new line
				message={message}
				setDisplay={setDisplayAdd}
				onDelete={handleDelete}
				getDataById={handleGetTrainer}
				onSelect={handleSelectChange}
			/>
		</>
	);
};

export default Trainers;
