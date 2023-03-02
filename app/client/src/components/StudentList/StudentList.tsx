import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { motion } from 'framer-motion';
import { TCourse } from '../../types/courseTypes';
import { courseSelector, coursesSelector } from '../../redux/course/courseSelector';
import Button from '../Button/Button';
import ErrorMessage from '../ErrorMessage/ErrorMessage'; //new line
import Spinner from '../Spinner/Spinner';
import editIcon from '../../asset/images/pages/edit.png';
import { authSelector, userSelector } from '../../redux/auth/authSelector';
import { getAllCoursesAction, getCoursesByTrainerIdAction } from '../../redux/course/courseSlice';
import { getSubjectByCourseIdAction } from '../../redux/subject/subjectSlice';
import './studentList.scss';



const UsersList: React.FC = () => {

	const dispatch = useDispatch();
	const auth = useSelector(authSelector);
	const user = useSelector(userSelector);
	console.log(auth, user)
	
	useEffect(() => {
		// if (auth && localStorage.getItem('user')) {
			dispatch(getAllCoursesAction)
			// dispatch(getCoursesByTrainerIdAction(user.id));
			console.log("HI------------------------", user.id)
		// }
		// if (course) {
			// dispatch(getSubjectByCourseIdAction(course.id));
		// }
	}, []);
	
	const courses = useSelector(coursesSelector)
	// const course = useSelector(courseSelector);
	console.log(courses)




	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [type, setType] = useState('add');
	// const courses = useSelector(coursesSelector);
	// const { data, getDataById, onCourseSelect, onSubjectSelect, setDisplay, error, message, selectedValue } = props;
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
					{/* <motion.h2
						initial={{ x: '-50vw', opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: '-50vw' }}
						transition={{ type: 'easeInOut', stiffness: 150, damping: 40, duration: 1, delay: 0.5 }}
						className="main-title"
					> */}
						{"Course => Subjects => Students"}
					{/* </motion.h2> */}
					<div className="users__header">
						<div className="head-filter__grp">
							<motion.select
								initial={{ x: '-50vw', opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								exit={{ x: '-50vw' }}
								transition={{ type: 'easeInOut', stiffness: 120, damping: 40, duration: 2, delay: 0.2 }}
								name=""
								id=""
								className="users-sort"
								// value={selectedValue}
								// onChange={onCourseSelect}
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
							<motion.select
								initial={{ x: '-50vw', opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								exit={{ x: '-50vw' }}
								transition={{ type: 'easeInOut', stiffness: 120, damping: 40, duration: 2, delay: 0.2 }}
								name=""
								id=""
								className="users-sort"
								// value={selectedValue}
								// onChange={onSubjectSelect}
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
					</div>
					<hr />
					<div className="user_list_wrap">
						<div className="main-users__list">
							<>
								{!loading && !error ? (
									<>
										<div className="items-title__wrapper">
											{/* <div className="items-title">
												<span>{data[0]?.name ? 'name' : null}</span>
												<span>{data[0]?.surname ? 'surname' : null}</span>
												<span>{data[0]?.attendance ? 'attendance' : null}</span>
												<span>{data[0]?.score ? 'score' : null}</span>
												<span>{data[0]?.comment ? 'comment' : null}</span>
											</div> */}
										</div>
										{courses.map((item) => {
											return (
												<motion.div
													initial={{ opacity: 0 }}
													animate={{ opacity: 1 }}
													exit={{ opacity: 0 }}
													transition={{
														type: 'easeOut',
														stiffness: 120,
														damping: 20,
														duration: 2.5,
														delay: 0.2,
													}}
													className="list-item"
													key={uuid()}
												>
													<div className="info-grp">
														<span>{item.name}</span>
														{/* <span>{item.surname}</span> */}
														{/* <span>{item.email}</span>
														<span>{item.startDate?.toLocaleString().slice(0, 10)}</span>
														<span>{item.endDate?.toLocaleString().slice(0, 10)}</span> */}
													</div>
													<div className="edit-grp">
														<Button
															dataId={item.id}
															className="users-btn"
															title={`edit report`}
															src={editIcon}
															onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
																// getDataById(e.currentTarget.dataset.id);
																// setDisplay(true);
																setType('edit');
															}}
														/>
													</div>
												</motion.div>
											);
										})}
									</>
								) : null}
								{/* {loading && !error ? <Spinner loading={setLoading} /> : null}
								{props.error ? <ErrorMessage message={message} /> : null} */}
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
