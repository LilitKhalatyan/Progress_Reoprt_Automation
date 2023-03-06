import React, { useRef, useMemo, useState } from 'react';
import AddStudentsForm from '../../pages/Students/AddStudentsForm';
import AddTrainersForm from '../../pages/Trainers/AddTrainersForm';
import AddSubjectsForm from '../../pages/Subjects/AddSubjectsForm';
import { motion, AnimatePresence } from 'framer-motion';

// import './addItem.scss';
import AddCoursesForm from '../../pages/Courses/AddCoursesForm';
import { useSelector } from 'react-redux';
import { coursesSelector } from '../../redux/course/courseSelector';
import { trainersSelector } from '../../redux/trainer/trainerSelector';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import CloseIcon from '../../components/CloseIcon/CloseIcon';
import PopUpButton from '../../components/PopUpButton/PopUpButton';
import PopUpTitle from '../../components/PopUpTitle/PopUpTitle';
import { uuid } from 'uuidv4';
import { useForm } from 'react-hook-form';

interface IProps {
	// title: string;
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
	btnType: string;
}

const TrainerPopUp: React.FC<IProps> = (props) => {
	const { btnType, show, setShow } = props;
	// const courses = useSelector(coursesSelector);
	// const trainers = useSelector(trainersSelector);

	const wrapperRef = useRef(null);

	useOutsideClick(wrapperRef, setShow);
	const {
		register,
		reset,
		formState: { errors },
		handleSubmit,
	} = useForm<{
		attendance: string;
		graduate: string;
		comment: string;
	}>();
	let className = show ? 'add-item show trainer' : 'add-item';
	const onSubmit = (data: any, e: any) => {
		console.log(data);
	};
	const onFail = (error: any) => {
		props.setShow(true);
	};
	

	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className={className}
				ref={wrapperRef}
			>
				<div className="add-item__content">
					<CloseIcon
						onClick={() => {
							setShow(false);
						}}
					/>
					<form className="add-group-form__content" onSubmit={handleSubmit(onSubmit, onFail)}>
						<div className="form_title">
							<PopUpTitle type={btnType} title="trainer" />
						</div>
						<div className="input__grp">
							<label htmlFor="attendance" className="input">
								<select
									id="attendance"
									{...register('attendance', {
										required: true,
									})}
								>
									<option value="100">in</option>
									<option value="0">out</option>
								</select>
							</label>
							{errors.attendance ? (
								<>
									{errors.attendance.type === 'required' && (
										<span className="input-invalid">⚠ This field is required</span>
									)}
								</>
							) : null}
						</div>
						<div className="input__grp">
							<label htmlFor="graduate" className="input">
								<input
									type="number"
									className="input__field"
									placeholder=" "
									id="graduate"
									{...register('graduate', {
										required: true,
									})}
								/>
								<span className="input__label">Graduate</span>
							</label>
							{errors.graduate ? (
								<>
									{errors.graduate.type === 'required' && (
										<span className="input-invalid">⚠ This field is required</span>
									)}
									{errors.graduate.type === 'pattern' && (
										<span className="input-invalid">⚠ Please enter valid name</span>
									)}
								</>
							) : null}
						</div>
						<div className="input__grp">
							<label htmlFor="comment" className="input">
								<input
									type="comment"
									className="input__field"
									placeholder=" "
									id="comment"
									{...register('comment', {
										required: true,
									})}
								/>
								<span className="input__label">Comment</span>
							</label>
							{errors.comment ? (
								<>
									{errors.comment.type === 'required' && (
										<span className="input-invalid">⚠ This field is required</span>
									)}
								</>
							) : null}
						</div>
						<PopUpButton type={btnType === "update" ? "edit" : btnType} />
					</form>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default TrainerPopUp;
