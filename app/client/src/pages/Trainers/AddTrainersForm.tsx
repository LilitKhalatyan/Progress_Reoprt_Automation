import React, { useEffect, useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import Multiselect from 'multiselect-react-dropdown';
import Button from '../../components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { createTrainerAction } from '../../redux/trainer/trainerSlice';
import { trainerSelector } from '../../redux/trainer/selectors';
import { TCourse } from '../../types/courses';
import { coursesSelector } from '../../redux/course/courseSelector';

interface IProps {
	data: TCourse[];
	btnType: string;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
	show: boolean;
}
interface SelectElement {
	id: number;
	name: string;
}

const AddTrainersForm: React.FC<IProps> = (props) => {
	const dispatch = useDispatch();
	const [selectedValue, setSelectedValue] = useState<any>();
	const trainer = useSelector(trainerSelector);
	const courses = useSelector(coursesSelector);

	const onSubmit = (data: any) => {
		const dataSelect = {
			name: data.name,
			surname: data.surname,
			email: data.email,
			courseId: data.multiselect.map((el: SelectElement) => el.id),
		};
		reset({ name: '', surname: '', email: '' });
		setSelectedValue('');
		dispatch(createTrainerAction(dataSelect));
		props.setShow(false);
	};
	const onFail = (error: any) => {
		props.setShow(true);
	};

	const {
		control,
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<{
		name: string;
		surname: string;
		email: string;
		multiselect: string;
	}>();
	useEffect(() => {
		if (props.btnType === 'edit') {
			reset({ name: trainer[0]?.name, surname: trainer[0]?.surname, email: trainer[0]?.email });
			setSelectedValue(props.data.filter((el) => el?.id === trainer[0]?.courses[0]?.id));
		} else {
			reset({ name: '', surname: '', email: '' });
			setSelectedValue('');
		}
	}, [trainer, props.btnType, reset, props.data]);

	const buttonComponent = useMemo(() => {
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
	}, [props.btnType]);

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
				<Controller
					control={control}
					name="multiselect"
					render={({ field: { onChange, value } }) => {
						return (
							<Multiselect
								className="multi-select"
								options={!props.data.length ? courses : props.data}
								onSelect={onChange}
								displayValue="name"
								{...register('multiselect', {
									required: true,
								})}
								selectedValues={selectedValue}
							/>
						);
					}}
				/>
				{errors.multiselect ? (
					<>
						{errors.multiselect.type === 'required' && (
							<span className="input-invalid">This field is required</span>
						)}
					</>
				) : null}
			</div>
			<>{buttonComponent}</>
		</form>
	);
};

export default AddTrainersForm;
