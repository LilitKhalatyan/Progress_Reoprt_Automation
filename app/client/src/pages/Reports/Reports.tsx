import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { uuid } from 'uuidv4';
import Button from '../../components/Button/Button';
import { coursesSelector } from '../../redux/course/courseSelector';
import { studentsSelector } from '../../redux/student/studentSelector';
import { subjectsSelector } from '../../redux/subject/subjectSelector';

import './reports.scss'

export default function Reports() {
	const courses = useSelector(coursesSelector);
	const subjects = useSelector(subjectsSelector);
	const students = useSelector(studentsSelector);

	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		// setSelect(e.target.value);
	};

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
						style={{ margin: '0 0 12px 0' }}
					>
						Reports
					</motion.h2>
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
								value="{select}"
								onChange={handleSelectChange}
							>
								<option value="all">Courses</option>
								{courses.map((option) => {
									return <option value={option.id}>{option.name}</option>;
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
								value="{select}"
								onChange={handleSelectChange}
							>
								<option value="all">Subjects</option>
								{subjects.map((option) => {
									return <option value={option.id}>{option.name}</option>;
								})}
							</motion.select>
						</div>
					</div>
					<hr />
					<div className="user_list_wrap">
						<div className="main-users__list">
							<>
								{/* {!loading && !error ? ( */}
								<>
									<div className="items-title__wrapper">
										<div className="items-title">
											<span>name</span>
											<span>surname</span>
											<span>email</span>
										</div>
									</div>
									{students.map((item) => {
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
											>
												<div className="info-grp">
													<span>{item.name}</span>
													<span>{item.surname}</span>
													<span>{item.email}</span>
													{/* <span>{item.startDate?.toLocaleString().slice(0, 10)}</span>
														<span>{item.endDate?.toLocaleString().slice(0, 10)}</span> */}
												</div>
												<div className="edit-grp">
													<Button
														value='Create report'
														className=" create-btn"
														title="Create report"
														onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
															// onDelete(e.currentTarget.dataset.id);
															console.log(e.currentTarget)
														}}
													/>
													{/* <Button
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
														/> */}
												</div>
											</motion.div>
										);
									})}
								</>
								{/* ) : (
									null
								)} */}
								{/* {loading && !error ? (
									<Spinner loading={setLoading} />
								) : (
									null
								)}
								{props.error ? (
									<ErrorMessage message={message} />
								) : (
									null
								)} */}
							</>
						</div>
					</div>
					<hr />
				</div>
			</div>
		</motion.div>
	);
}
