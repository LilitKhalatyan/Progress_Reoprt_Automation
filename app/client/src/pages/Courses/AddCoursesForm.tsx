import React from 'react';
import DatePicker from 'react-datepicker';
import { Controller, useForm } from 'react-hook-form';
import Button from '../../components/Button/Button';
import { useDispatch } from 'react-redux';
import { createCourseAction } from '../../redux/course/courseSlice';

import 'react-datepicker/src/stylesheets/datepicker.scss';

interface IProps {
	btnType: string;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddGroupsForm: React.FC<IProps> = (props) => {
	const dispatch = useDispatch();
	const onSubmit = (data: any) => {
		const finalData = {
			name: data.name,
			startDate: data.startDate.toLocaleString().slice(0, 9),
			endDate: data.endDate.toLocaleString().slice(0, 9),
		};
		dispatch(createCourseAction(finalData));
	};
	const onFail = (error: any) => {
		console.log(error, 'Error');
	};

	const {
		control,
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<{ name: string; startDate: string; endDate: string }>();

	const buttonComponent = () => {
		switch (props.btnType) {
			case 'add':
				return (
					<div className="btn__grp">
						<div className="input__grp">
							<Button value="Save" className='btn-modal' />
						</div>
						<div className="input__grp">
							<Button value="Save and add" className='btn-modal' />
						</div>
					</div>
				)
			case 'edit':
				return (
					<div className="input__grp">
						<Button value="Update" className='btn-modal' />
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
							// endDate={new Date()}
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
							// endDate={new Date()}
							placeholderText="Select End Date"
							id="end-date"
						/>
					)}
				/>
			</div>
			<>
				{buttonComponent()}
			</>
		</form>
	);
};

export default AddGroupsForm;
