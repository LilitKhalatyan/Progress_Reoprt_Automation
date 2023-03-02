import { motion } from 'framer-motion';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { uuid } from 'uuidv4';
import Button from '../../components/Button/Button';
import Spinner from '../../components/Spinner/Spinner';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { coursesSelector } from '../../redux/course/courseSelector';
import { errorSelector, studentsSelector } from '../../redux/student/studentSelector';
import { subjectsSelector } from '../../redux/subject/subjectSelector';

import './reports.scss'


export default function Reports() {
	const [subjectsSelectedOption, setSubjectsSelectedOption] = useState();
	const [coursesSelectedOption, setCoursesSelectedOption] = useState();
	const [loading, setLoading] = useState(true);
	const error = useSelector(errorSelector);


	const courses = useSelector(coursesSelector);
	const subjects = useSelector(subjectsSelector);
	const students = useSelector(studentsSelector);

	const navigate = useNavigate();

	const subjectsOptions = subjects.map((item) => {
		return { value: item.name, label: item.name, id: item.id };
	});

	const coursesOptions = courses.map((item) => {
		return { value: item.name, label: item.name, id: item.id };
	});

	const handleSubjectsChange = (subjectsSelectedOption: any) => {
		setSubjectsSelectedOption(subjectsSelectedOption);
	};

	const handleCoursesChange = (coursesSelectedOption: any) => {
		setCoursesSelectedOption(coursesSelectedOption);
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
							<Select
								value={coursesSelectedOption}
								onChange={handleCoursesChange}
								options={coursesOptions}
								styles={{
									control: (baseStyles, state) => ({
										...baseStyles,
										border: state.isFocused ? 0 : 0,
										boxShadow: '0 !important',
									}),
								}}
								className="react-select"
							/>
							<Select
								value={subjectsSelectedOption}
								onChange={handleSubjectsChange}
								options={subjectsOptions}
								isMulti
								styles={{
									control: (baseStyles, state) => ({
										...baseStyles,
										border: state.isFocused ? 0 : 0,
										boxShadow: '0 !important',
									}),
								}}
								className="react-select"
							/>

						</div>
					</div>
					<hr />
					<div className="user_list_wrap">
						<div className="main-users__list">
							{!loading && !error ? (
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
												</div>
												<div className="edit-grp">
													<Button
														value='Create report'
														className=" create-btn"
														title="Create report"
														onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
															// onDelete(e.currentTarget.dataset.id);
															console.log(e.currentTarget)
															navigate('/sent-report')
														}}
													/>
												</div>
											</motion.div>
										);
									})}
								</>
							) : (
								null
							)}
							{loading && !error ? (
								<Spinner loading={setLoading} />
							) : (
								null
							)}
							{error ? (
								<ErrorMessage message="Students get failed" />
							) : (
								null
							)}
						</div>
					</div>
					<hr />
				</div>
			</div>
		</motion.div>
	);
}
