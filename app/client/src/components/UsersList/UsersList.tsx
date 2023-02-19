import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import AddItem from '../../components/AddItem/AddItem';
import Button from '../Button/Button';
import addIcon from '../../asset/images/pages/add.png';
import editIcon from '../../asset/images/pages/edit.png';
import deleteIcon from '../../asset/images/pages/delete.png';

import './usersList.scss';

interface IProps {
	data: {
		id?: number;
		name: string;
		surname?: string;
		email?: string;
		groupId?: number;
		startDate?: string;
		endDate?: string;
		courseId?: number;
		staffId?: number;
	}[];
	title: string;
	display: boolean;
	setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
	onDelete: (id: any) => void;
	getDataById: (id: any) => void;
}

const group = [
	{ id: 1, name: 'Front End' },
	{ id: 2, name: 'Back End' },
	{ id: 3, name: 'AI / ML' },
];

const UsersList: React.FC<IProps> = (props) => {
	const [type, setType] = useState('add');
	const { data, display, setDisplay, onDelete, getDataById } = props;
	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		// setSelect(e.target.value);
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
								title={'add' + ' ' + props.title}
								src={addIcon}
								onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
									setDisplay(true);
									setType('add');
								}}
							/>
							<AddItem title={props.title} show={display} setShow={setDisplay} btnType={type}/>
						</div>
					</div>
					<div className="main-users__list">
						<hr />
						{data.map((item) => {
							return (
								<div className="list-item" key={uuid()}>
									<div className="info-grp">
										<span >{item.name}</span>
										<span >{item.surname}</span>
										<span >{item.email}</span>
									</div>
									<div className="edit-grp">
										<Button
											dataId={item.id}
											className="users-btn"
											title={'edit' + ' ' + props.title}
											src={editIcon}
											onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
												getDataById(e.currentTarget.dataset.id);
												setDisplay(true);
												setType('edit')
											}}
										/>
										<Button
											dataId={item.id}
											className="users-btn"
											title={'delete' + ' ' + props.title}
											src={deleteIcon}
											onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
												onDelete(e.currentTarget.dataset.id);
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
