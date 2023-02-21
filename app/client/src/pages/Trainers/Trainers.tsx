import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UsersList from '../../components/UsersList/UsersList';
import { loadingSelector, trainersSelector } from '../../redux/trainer/selectors';
import { deleteTrainerAction, getTrainerAction } from '../../redux/trainer/trainerSlice';

import './trainers.scss';

const Trainers: React.FC = () => {
	const [displayAdd, setDisplayAdd] = useState(false);
	const trainers = useSelector(trainersSelector);
	const loading = useSelector(loadingSelector);
	const dispatch = useDispatch();

	const handleDelete = (id: any) => {
		dispatch(deleteTrainerAction(id));
	};
	const handleGetTrainer = (id: any) => {
		dispatch(getTrainerAction(id));
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
				setDisplay={setDisplayAdd}
				onDelete={handleDelete}
				getDataById={handleGetTrainer}
				onSelect={handleSelectChange}
			/>
		</>
	);
};

export default Trainers;
