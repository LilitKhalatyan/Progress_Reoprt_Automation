import React from 'react';
import { v4 as uuid } from 'uuid';
import { useForm } from 'react-hook-form';
import Button from '../../components/Button/Button';
import { useDispatch } from 'react-redux';
import { createSubjectAction } from '../../redux/subject/subjectSlice';

interface IProps {
	data: {
		id: number;
		name: string;
	}[];
	dataTrainers: {
		id: number;
		name: string;
		surname: string;
		email: string;
	}[];
}

const AddSubjectsForm: React.FC<IProps> = (props) => {
	const dispatch = useDispatch();
	const onSubmit = (data: any) => {
		const finalData = {
			name: data.name,
			courseId: data.selectGroup,
			staffId: data.selectTrainer,
		}
		dispatch(createSubjectAction(finalData));
	};
	const onFail = (error: any) => {
		console.log(error, 'Error');
	};

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<{
		name: string;
		selectGroup: string;
		selectTrainer: string;
	}>();

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
					<option key={uuid()} value="m" disabled selected hidden>
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
					<option key={uuid()} value="" disabled selected hidden>
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
			<div className="btn__grp">
				<div className="input__grp">
					<Button value="Save" />
				</div>
				<div className="input__grp">
					<Button value="Save and add" />
				</div>
			</div>
		</form>
	);
};

export default AddSubjectsForm;
