import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Spinner from '../Spinner/Spinner';
import AddItem from '../../components/AddItem/AddItem';
import Button from '../Button/Button';
import addIcon from '../../asset/images/pages/add.png';
import editIcon from '../../asset/images/pages/edit.png';
import deleteIcon from '../../asset/images/pages/delete.png';

import './usersList.scss';
import { useSelector } from 'react-redux';
import { coursesSelector } from '../../redux/course/courseSelector';
import { motion } from 'framer-motion';

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
	onSelect: (id: any) => void;
	loading: boolean;
}

const UsersList: React.FC<IProps> = (props) => {
	const [loading, setLoading] = useState(true);
	const [type, setType] = useState('add');
	const courses = useSelector(coursesSelector);

	const { data, display, setDisplay, onDelete, getDataById, onSelect } = props;

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 2, delay: 0.5 }}
			className="users__container"
		>
			<div className="users__content">
				<div className="wrapper-line">
					<motion.h2
						initial={{ x: '-50vw', opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: '-50vw' }}
						transition={{ type: 'easeInOut', stiffness: 150, damping: 40, duration: 1, delay: 0.5 }}
						className="main-title"
					>
						{props.title}
					</motion.h2>
					<div className="users__header">
						<div className="head-filter__grp">
							<motion.input
								initial={{ x: '-50vw', opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								exit={{ x: '-50vw' }}
								transition={{ type: 'easeInOut', stiffness: 150, damping: 40, duration: 2, delay: 0.5 }}
								type="text"
								className="users-search"
							/>
							<motion.select
								initial={{ x: '-50vw', opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								exit={{ x: '-50vw' }}
								transition={{ type: 'easeInOut', stiffness: 120, damping: 40, duration: 2, delay: 0.2 }}
								name=""
								id=""
								className="users-sort"
								value="{select}"
								onChange={onSelect}
							>
								<option key={uuid()} value="all">
									All
								</option>
								{courses.map((option) => {
									return (
										<option key={uuid()} value={option.id}>
											{option.name}
										</option>
									);
								})}
							</motion.select>
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
							<AddItem title={props.title} show={display} setShow={setDisplay} btnType={type} />
						</div>
					</div>
					<hr />
					<div className="user_list_wrap">
						<div className="main-users__list">
							<>
								{loading ? (
									<Spinner loading={setLoading} />
								) : (
									data.map((item) => {
										return (
											<motion.div
												initial={{ opacity: 0 }}
												animate={{ opacity: 1 }}
												exit={{ opacity: 0 }}
												transition={{ type: 'easeOut', stiffness: 120, damping: 20, duration: 2.5, delay: 1 }}
												className="list-item"
												key={uuid()}
											>
												<div className="info-grp">
													<span>{item.name}</span>
													<span>{item.surname}</span>
													<span>{item.email}</span>
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
															setType('edit');
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
											</motion.div>
										);
									})
								)}
							</>
						</div>
					</div>
					<hr />
				</div>
			</div>
		</motion.div>
	);
};

export default UsersList;
