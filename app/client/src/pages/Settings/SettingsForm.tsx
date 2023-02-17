import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../components/Button/Button';

const SettingsForm: React.FC = () => {
	const onSubmit = (data: any) => {
		console.log(
			JSON.stringify({
				name: data.name,
				surname: data.surname,
				email: data.email,
				multiselect: data.multiselect,
			})
		);
	};
	const onFail = (error: any) => {
		console.log(error, 'Error');
	};

	const {
		control,
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<{
		name: string;
		surname: string;
		email: string;
		newPassword: string;
		oldPassword: string;
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
							pattern: /^[a-zA-Z]{3,30}$/,
						})}
					/>
					<span className="input__label">Name</span>
				</label>
				{errors.name ? (
					<>
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
							pattern: /^[a-zA-Z]{3,30}$/,
						})}
					/>
					<span className="input__label">Surname</span>
				</label>
				{errors.surname ? (
					<>
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
							pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/,
						})}
					/>
					<span className="input__label">Email</span>
				</label>
				{errors.email ? (
					<>
						{errors.email.type === 'pattern' && (
							<span className="input-invalid">⚠ Please enter valid name</span>
						)}
					</>
				) : null}
			</div>
			<div className="input__grp">
				<label htmlFor="newPassword" className="input">
					<input
						type="newPassword"
						className="input__field"
						placeholder=" "
						id="newPassword"
						{...register('newPassword', {
							pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
						})}
					/>
					<span className="input__label">New Password</span>
				</label>
				{errors.newPassword ? (
					<>
						{errors.newPassword.type === 'pattern' && (
							<span className="input-invalid">⚠ Please enter valid name</span>
						)}
					</>
				) : null}
			</div>
			<div className="input__grp">
				<label htmlFor="oldPassword" className="input">
					<input
						type="oldPassword"
						className="input__field"
						placeholder=" "
						id="oldPassword"
						{...register('oldPassword', {
							required: true,
							pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
						})}
					/>
					<span className="input__label">Old Password</span>
				</label>
				{errors.oldPassword ? (
					<>
						{errors.oldPassword.type === 'required' && (
							<span className="input-invalid">⚠ This is required field</span>
						)}
						{errors.oldPassword.type === 'pattern' && (
							<span className="input-invalid">⚠ Please enter valid name</span>
						)}
					</>
				) : null}
			</div>
			<div className="input__grp">
				<Button value="Update profile" />
			</div>
		</form>
	);
};

export default SettingsForm;
