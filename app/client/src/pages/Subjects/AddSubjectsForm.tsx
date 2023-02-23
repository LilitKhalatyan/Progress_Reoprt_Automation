import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useForm } from 'react-hook-form';
import Button from '../../components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { createSubjectAction, updateSubjectByIdAction } from '../../redux/subject/subjectSlice';
import { subjectSelector } from '../../redux/subject/subjectSelector';
import { TCourse } from '../../types/courses';
import './subjects.scss';

interface IProps {
	data: TCourse[];
	dataTrainers: {
		id?: number;
		name: string;
		surname: string;
		email: string;
	}[];
	btnType: string;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
	show: boolean;
}
interface FinalData {
	id?: number;
	name: string;
	balls: string;
	finalballs?: string;
	courseId: string;
	staffId: string;
}

const AddSubjectsForm: React.FC<IProps> = (props) => {
	const [checkbox, setCheckbox] = useState<boolean>(false);
	console.log(checkbox);

	const dispatch = useDispatch();
	const subject = useSelector(subjectSelector);
	const onSubmit = (data: any, e: any) => {
		const finalData:FinalData = {
			id: subject[0]?.id,
			balls: data.balls,
			name: data.name,
			courseId: data.selectGroup,
			staffId: data.selectTrainer,
		};
		console.log(finalData, "ddd");
		
		if (checkbox) {
			finalData.finalballs = data.finalballs;
		}
		console.log(finalData);

		if (e.nativeEvent.submitter.name === 'saveAndAdd') {
			dispatch(createSubjectAction(finalData));
			props.setShow(true);
		}
		if (e.nativeEvent.submitter.name === 'save') {
			dispatch(createSubjectAction(finalData));
			props.setShow(false);
		}
		if (e.nativeEvent.submitter.name === 'update') {
			dispatch(updateSubjectByIdAction(finalData));
			props.setShow(false);
		}
		reset({ name: '', selectTrainer: 'default', selectGroup: 'default', balls: '', finalballs: '' });
	};
	const onFail = (error: any) => {
		props.setShow(true);
	};

	const {
		register,
		reset,
		formState: { errors },
		handleSubmit,
	} = useForm<{
		name: string;
		balls: string;
		finalballs?: string;
		selectGroup: string;
		selectTrainer: string;
	}>();
	useEffect(() => {
		if (props.btnType === 'edit') {
			reset({
				name: subject[0]?.name,
				selectGroup: `${subject[0]?.courseId}`,
				selectTrainer: `${subject[0]?.staffId}`,
			});
		} else {
			reset({ name: '', selectTrainer: 'default', selectGroup: 'default' });
		}
	}, [reset, props.btnType, subject]);
	const buttonComponent = () => {
		switch (props.btnType) {
			case 'add':
				return (
					<div className="btn__grp">
						<div className="input__grp">
							<Button value="Save" className="btn-modal" name={'save'} />
						</div>
						<div className="input__grp">
							<Button value="Save & Add" className="btn-modal" name={'saveAndAdd'} />
						</div>
					</div>
				);
			case 'edit':
				return (
					<div className="input__grp">
						<Button value="Update" className="btn-modal" name={'update'} />
					</div>
				);
		}
	};

	return (
		<form className="add-group-form__content" onSubmit={handleSubmit(onSubmit, onFail)}>
			<div className="input__grp">
				<label htmlFor="name" className="input">
					<input
						type="text"
						className="input__field"
						placeholder=" "
						id="name"
						{...register('name', {
							required: true,
							pattern: /^[a-zA-Z_-]{3,30}$/,
						})}
					/>
					<span className="input__label">Name</span>
				</label>
				{errors.name ? (
					<>
						{errors.name.type === 'required' && (
							<span className="input-invalid">⚠ This field is required</span>
						)}
						{errors.name.type === 'pattern' && (
							<span className="input-invalid">⚠ Please enter valid name</span>
						)}
					</>
				) : null}
			</div>
			<div className="input__grp">
				<label htmlFor="balls" className="input">
					<input
						type="number"
						className="input__field"
						placeholder=" "
						id="balls"
						{...register('balls', {
							required: true,
							pattern: /^[1-9]\d*$/,
						})}
					/>
					<span className="input__label">Max Score</span>
				</label>
				{errors.balls ? (
					<>
						{errors.balls.type === 'required' && (
							<span className="input-invalid">⚠ This field is required</span>
						)}
						{errors.balls.type === 'pattern' && (
							<span className="input-invalid">⚠ Please enter valid number</span>
						)}
					</>
				) : null}
			</div>
			{checkbox && (
				<div className="input__grp">
					<label htmlFor="finalballs" className="input">
						<input
							type="number"
							className="input__field"
							placeholder=" "
							id="finalballs"
							{...register('finalballs', {
								required: true,
								pattern: /^[1-9]\d*$/,
							})}
						/>
						<span className="input__label">Weightage</span>
					</label>
					{errors.finalballs ? (
						<>
							{errors.finalballs.type === 'required' && (
								<span className="input-invalid">⚠ This field is required</span>
							)}
							{errors.finalballs.type === 'pattern' && (
								<span className="input-invalid">⚠ Please enter valid number</span>
							)}
						</>
					) : null}
				</div>
			)}

			<div className="input__grp">
				<select
					id="selectGroup"
					{...register('selectGroup', {
						required: true,
					})}
				>
					<option key={uuid()} value="default" disabled selected hidden>
						Select group name
					</option>
					{props.data.map((option) => {
						return (
							<option key={uuid()} value={option.id}>
								{option.name}
							</option>
						);
					})}
				</select>
				{errors.selectGroup ? (
					<>
						{errors.selectGroup.type === 'required' && (
							<span className="input-invalid">⚠ This field is required</span>
						)}
					</>
				) : null}
			</div>
			<div className="input__grp">
				<select
					id="selectTrainer"
					{...register('selectTrainer', {
						required: true,
					})}
				>
					<option key={uuid()} value="default" disabled selected hidden>
						Select Trainer
					</option>
					{props.dataTrainers.map((option) => {
						return (
							<option key={uuid()} value={option.id}>
								{option.name}
							</option>
						);
					})}
				</select>
				{errors.selectTrainer ? (
					<>
						{errors.selectTrainer.type === 'required' && (
							<span className="input-invalid">⚠ This field is required</span>
						)}
					</>
				) : null}
			</div>
			<div className="input__grp">
				<label htmlFor="isAssessment" className="checkbox">
					<input
						type="checkbox"
						id="isAssessment"
						defaultChecked={checkbox}
						className="input__fiel"
						onChange={() => setCheckbox(!checkbox)}
					/>
					<span className="checkbox__lab">Assessment</span>
				</label>
			</div>
			<>{buttonComponent()}</>
		</form>
	);
};

export default AddSubjectsForm;
