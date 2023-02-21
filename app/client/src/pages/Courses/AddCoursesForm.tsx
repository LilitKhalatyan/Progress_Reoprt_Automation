import React, { useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { Controller, useForm } from 'react-hook-form';
import Button from '../../components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { createCourseAction } from '../../redux/course/courseSlice';

import 'react-datepicker/src/stylesheets/datepicker.scss';
import { courseSelector } from '../../redux/course/courseSelector';

interface IProps {
	btnType: string;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
	show: boolean;
}

const AddGroupsForm: React.FC<IProps> = (props) => {
	const dispatch = useDispatch();
	const course = useSelector(courseSelector);
	const onSubmit = (data: any) => {
		const finalData = {
			name: data.name,
			startDate: data.startDate,
			endDate: data.endDate,
		};
		dispatch(createCourseAction(finalData));
	};
	const onFail = (error: any) => {
		console.log(error, 'Error');
	};

	const {
		control,
		reset,
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<{ name: string; startDate: Date; endDate: Date }>();
	useEffect(() => {
		if (course.length) {
			if (props.btnType === 'edit') {
				reset({
					name: course[0]?.name,
					startDate: new Date(course[0]?.startDate),
					endDate: new Date(course[0]?.endDate),
				});
			} else {
				reset({ name: '', startDate: new Date(), endDate: new Date() });
			}
		}
	}, [reset, props.btnType, course]);
	const buttonComponent = () => {
		switch (props.btnType) {
			case 'add':
				return (
					<div className="btn__grp">
						<div className="input__grp">
							<Button value="Save" className="btn-modal" />
						</div>
						<div className="input__grp">
							<Button value="Save & add" className="btn-modal" setShow={props.setShow} err={errors} />
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
							pattern: /^[a-zA-Z-]{3,30}$/,
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
				<Controller
					control={control}
					name="startDate"
					render={({ field }: any) => (
						<DatePicker
							className="data-picker"
							selected={field.value}
							minDate={new Date()}
							onChange={(date: Date) => field.onChange(date)}
							selectsStart
							startDate={new Date()}
							placeholderText="Select Start Date"
							id="start-date"
						/>
					)}
				/>
			</div>
			<div className="input__grp">
				<Controller
					control={control}
					name="endDate"
					rules={{ required: true }}
					render={({ field }: any) => (
						<DatePicker
							className="data-picker"
							selected={field.value}
							minDate={new Date()}
							onChange={(date: Date) => field.onChange(date)}
							selectsEnd
							startDate={new Date()}
							placeholderText="Select End Date"
							id="end-date"
						/>
					)}
				/>
			</div>
			<>{buttonComponent()}</>
		</form>
	);
};

export default AddGroupsForm;
