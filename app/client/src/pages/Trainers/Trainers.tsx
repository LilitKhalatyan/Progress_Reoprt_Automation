import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UsersList from '../../components/UsersList/UsersList';
import { trainerSelector, trainersSelector } from '../../redux/trainer/selectors';
import { getAllTrainersAction } from '../../redux/trainer/trainerSlice';

import './trainers.scss';

const trainers = [
    { id: 1, name: "John", surname: "Doe", email: "nameX@gemail.com" },
    { id: 2, name: "Jam", surname: "Yang", email: "nameX@gemail.com" },
    { id: 3, name: "Tom", surname: "Mirzoyan", email: "nameX@gemail.com" },
    { id: 4, name: "Ann", surname: "Hardy", email: "nameX@gemail.com" },
    { id: 1, name: "John", surname: "Doe", email: "nameX@gemail.com" },
    { id: 2, name: "Jam", surname: "Yang", email: "nameX@gemail.com" },
    { id: 3, name: "Tom", surname: "Mirzoyan", email: "nameX@gemail.com" },
    { id: 4, name: "Ann", surname: "Hardy", email: "nameX@gemail.com" },
    { id: 1, name: "John", surname: "Doe", email: "nameX@gemail.com" },
    { id: 2, name: "Jam", surname: "Yang", email: "nameX@gemail.com" },
    { id: 3, name: "Tom", surname: "Mirzoyan", email: "nameX@gemail.com" },
    { id: 4, name: "Ann", surname: "Hardy", email: "nameX@gemail.com" },
    { id: 1, name: "John", surname: "Doe", email: "nameX@gemail.com" },
    { id: 2, name: "Jam", surname: "Yang", email: "nameX@gemail.com" },
    { id: 3, name: "Tom", surname: "Mirzoyan", email: "nameX@gemail.com" },
    { id: 4, name: "Ann", surname: "Hardy", email: "nameX@gemail.com" },
    { id: 1, name: "John", surname: "Doe", email: "nameX@gemail.com" },
    { id: 2, name: "Jam", surname: "Yang", email: "nameX@gemail.com" },
    { id: 3, name: "Tom", surname: "Mirzoyan", email: "nameX@gemail.com" },
    { id: 4, name: "Ann", surname: "Hardy", email: "nameX@gemail.com" },
    { id: 1, name: "John", surname: "Doe", email: "nameX@gemail.com" },
    { id: 2, name: "Jam", surname: "Yang", email: "nameX@gemail.com" },
    { id: 3, name: "Tom", surname: "Mirzoyan", email: "nameX@gemail.com" },
    { id: 4, name: "Ann", surname: "Hardy", email: "nameX@gemail.com" },
];

const Trainers: React.FC = () => {
	const [displayAdd, setDisplayAdd] = useState(false);
	const trainers = useSelector(trainersSelector);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllTrainersAction());
	}, []);
	return <UsersList title="trainers" data={trainers} display={displayAdd} setDisplay={setDisplayAdd} />;
};

export default Trainers;
