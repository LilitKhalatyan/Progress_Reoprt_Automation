import React, { useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { useForm } from 'react-hook-form';
import Button from '../../components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { studentSelector } from '../../redux/student/studentSelector';
import { createStudentAction } from '../../redux/student/studentSlice';
import { TCourse } from '../../types/courses';

interface IProps {
	data: TCourse[];
	btnType: string;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
	show: boolean;
}

const AddStudentsForm: React.FC<IProps> = (props) => {
	const dispatch = useDispatch();
	const student = useSelector(studentSelector);
	const onSubmit = (data: any) => {
		const finalData = {
			name: data.name,
			surname: data.surname,
			email: data.email,
			courseId: data.select,
		};
		dispatch(createStudentAction(finalData));
	};
	const onFail = (error: any) => {
		console.log(error, 'Error');
	};

	const {
		register,
		reset,
		formState: { errors },
		handleSubmit,
	} = useForm<{
		name: string;
		surname: string;
		email: string;
		select: string;
	}>();
	useEffect(() => {
		if (props.btnType === 'edit') {
			reset({
				name: student[0]?.name,
				surname: student[0]?.surname,
				email: student[0]?.email,
				select: `${student[0]?.courseId}`,
			});
		} else {
			reset({ name: '', surname: '', email: '', select: '' });
		}
	}, [student, reset, props.btnType]);
	const buttonComponent = () => {
		switch (props.btnType) {
			case 'add':
				return (
					<div className="btn__grp">
						<div className="input__grp">
							<Button value="Save" className="btn-modal" />
						</div>
						<div className="input__grp">
							<Button value="Save and add" className="btn-modal" />
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
				<label htmlFor="surname" className="input">
					<input
						type="text"
						className="input__field"
						placeholder=" "
						id="surname"
						{...register('surname', {
							required: true,
							pattern: /^[a-zA-Z]{3,30}$/,
						})}
					/>
					<span className="input__label">Surname</span>
				</label>
				{errors.surname ? (
					<>
						{errors.surname.type === 'required' && (
							<span className="input-invalid">⚠ This field is required</span>
						)}
						{errors.surname.type === 'pattern' && (
							<span className="input-invalid">⚠ Please enter valid name</span>
						)}
					</>
				) : null}
			</div>
			<div className="input__grp">
				<label htmlFor="email" className="input">
					<input
						type="email"
						className="input__field"
						placeholder=" "
						id="email"
						{...register('email', {
							required: true,
							pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/,
						})}
					/>
					<span className="input__label">Email</span>
				</label>
				{errors.email ? (
					<>
						{errors.email.type === 'required' && (
							<span className="input-invalid">⚠ This field is required</span>
						)}
						{errors.email.type === 'pattern' && (
							<span className="input-invalid">⚠ Please enter valid name</span>
						)}
					</>
				) : null}
			</div>
			<div className="input__grp">
				<select
					id="select"
					{...register('select', {
						required: true,
					})}
					value="value"
				>
					<option key={uuid()} value="" disabled selected hidden>
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
				{errors.select ? (
					<>
						{errors.select.type === 'required' && (
							<span className="input-invalid">⚠ This field is required</span>
						)}
					</>
				) : null}
			</div>
			<>{buttonComponent()}</>
		</form>
	);
};

export default AddStudentsForm;
