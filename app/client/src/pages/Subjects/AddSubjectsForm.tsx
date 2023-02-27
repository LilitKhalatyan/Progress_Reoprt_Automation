import React, { useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { useForm } from 'react-hook-form';
import Button from '../../components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { createSubjectAction } from '../../redux/subject/subjectSlice';
import { subjectSelector } from '../../redux/subject/subjectSelector';
import { TCourse } from '../../types/courseTypes';
import { ITrainer } from '../../types/trainerTypes';

interface IProps {
	data: TCourse[];
	dataTrainers: ITrainer [];
	btnType: string;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
	show: boolean;
}

const AddSubjectsForm: React.FC<IProps> = (props) => {
	const dispatch = useDispatch();
	const subject = useSelector(subjectSelector);
	const onSubmit = (data: any) => {
		const finalData = {
			name: data.name,
			courseId: data.selectGroup,
			staffId: data.selectTrainer,
		};
		dispatch(createSubjectAction(finalData));
		props.setShow(false);
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
							<Button value="Save" className="btn-modal" />
						</div>
						<div className="input__grp">
							<Button value="Save & Add" className="btn-modal" />
						</div>
					</div>
				);
			case 'edit':
				return (
					<div className="input__grp">
						<Button value="Update" className="btn-modal" />
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
							pattern: /^[a-zA-Z]{3,30}$/,
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
			<>{buttonComponent()}</>
		</form>
	);
};

export default AddSubjectsForm;
