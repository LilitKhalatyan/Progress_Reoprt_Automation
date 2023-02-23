import React, { useRef, useEffect, useMemo } from 'react';
import AddStudentsForm from '../../pages/Students/AddStudentsForm';
import AddTrainersForm from '../../pages/Trainers/AddTrainersForm';
import AddSubjectsForm from '../../pages/Subjects/AddSubjectsForm';
import CloseIcon from '../CloseIcon/CloseIcon';
import { motion, AnimatePresence } from 'framer-motion';

import './addItem.scss';
import AddCoursesForm from '../../pages/Courses/AddCoursesForm';
import { useSelector } from 'react-redux';
import { coursesSelector } from '../../redux/course/courseSelector';
import { trainersSelector } from '../../redux/trainer/selectors';

interface IProps {
	title: string;
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
	btnType: string;
}

const AddItem: React.FC<IProps> = (props) => {
	const { title, btnType, show, setShow } = props;

	const courses = useSelector(coursesSelector);
	const trainers = useSelector(trainersSelector);

	const useOutsideClick = (ref: React.RefObject<HTMLDivElement>) => {
		useEffect(() => {
			const handleClickOutside = (event: MouseEvent) => {
				if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
					setShow(false);
				}
			};
			document.addEventListener('mousedown', handleClickOutside);
			return () => {
				document.removeEventListener('mousedown', handleClickOutside);
			};
		}, [ref]);
	};

	const wrapperRef = useRef(null);

	useOutsideClick(wrapperRef);

	let className = show ? 'add-item show' : 'add-item';

	const formComponent = useMemo(() => {
		switch (title) {
			case 'Students':
				return <AddStudentsForm setShow={setShow} data={courses} btnType={btnType} show={show} />;
			case 'Trainers':
				return <AddTrainersForm setShow={setShow} data={courses} btnType={btnType} show={show} />;
			case 'Subjects':
				return (
					<AddSubjectsForm
						setShow={setShow}
						data={courses}
						dataTrainers={trainers}
						btnType={btnType}
						show={show}
					/>
				);
			case 'Courses':
				return <AddCoursesForm setShow={setShow} btnType={btnType} show={show} />;
		}
	}, [title, setShow, courses, btnType, show, trainers]);

	return (
		<AnimatePresence>
			{show && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					// transition={{ duration: 1,delay: 0.3,  type: 'easeInOut' }}
					className={className}
					ref={wrapperRef}
				>
					<div className="add-item__content">
						<CloseIcon
							onClick={() => {
								setShow(false);
							}}
						/>
						{formComponent}
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default AddItem;
