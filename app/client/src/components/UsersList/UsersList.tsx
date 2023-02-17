import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';
import AddItem from '../../components/AddItem/AddItem';
import Button from '../Button/Button';
import addIcon from '../../asset/images/pages/add.png';
import editIcon from '../../asset/images/pages/edit.png';
import deleteIcon from '../../asset/images/pages/delete.png';

import './usersList.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTrainersAction, getTrainerAction } from '../../redux/trainer/trainerSlice';
import { trainersSelector } from '../../redux/trainer/selectors';

interface IProps {
	data: {
		id: number;
		name: string;
		surname?: string;
		email?: string;
		groupId?: number;
	}[];
	title: string;
	display: boolean;
	setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

const group = [
	{ id: 1, name: 'Front End' },
	{ id: 2, name: 'Back End' },
	{ id: 3, name: 'AI / ML' },
];

const UsersList: React.FC<IProps> = (props) => {
	const { data, display, setDisplay } = props;
	const dispatch = useDispatch();
	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		// setSelect(e.target.value);
	};

	const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const id: any = e.currentTarget.dataset.id;
		console.log(id);

		dispatch(getTrainerAction(id));
	};

	return (
		<div className="users__container">
			<div className="users__content">
				<div className="wrapper-line">
					<h2 className="main-title">{props.title}</h2>
					<div className="users__header">
						<div className="head-filter__grp">
							<input type="text" className="users-search" />
							<select name="" id="" className="users-sort" value="{select}" onChange={handleSelectChange}>
								<option key={uuid()} value="all">
									All
								</option>
								{group.map((option) => {
									return (
										<option key={uuid()} value={option.id}>
											{option.name}
										</option>
									);
								})}
							</select>
						</div>
						<div className="head-add">
							<Button
								className="add-btn"
								title="add student"
								src={addIcon}
								onClick={(e: any) => {
									setDisplay(true);
								}}
							/>
							<AddItem title={props.title} show={display} setShow={setDisplay} />
						</div>
					</div>
					<div className="main-users__list">
						<hr />
						{data.map((item) => {
							function dispatch(arg0: { payload: undefined; type: 'trainers/getTrainerAction' }) {
								throw new Error('Function not implemented.');
							}

							return (
								<div className="list-item" key={uuid()}>
									<div className="info-grp">
										<input type="text" value={item.name} onChange={() => console.log('first')} />
										<input type="text" value={item.surname} onChange={() => console.log('first')} />
										<input type="text" value={item.email} onChange={() => console.log('first')} />
									</div>
									<div className="edit-grp">
										<Button
											dataId={item.id}
											className="users-btn"
											title="edit student"
											src={editIcon}
											onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
												onClick(e);
												setDisplay(true);
											}}
										/>
										<Button
											dataId={item.id}
											className="users-btn"
											title="delete student"
											src={deleteIcon}
											onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
												onClick(e);
											}}
										/>
									</div>
								</div>
							);
						})}
						<hr />
					</div>
				</div>
			</div>
		</div>
	);
};

export default UsersList;
