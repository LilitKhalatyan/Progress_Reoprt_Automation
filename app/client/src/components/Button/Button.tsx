import React from 'react';
import { FieldErrors } from 'react-hook-form';
import './button.scss';

interface IProps extends React.HTMLAttributes<HTMLInputElement> {
	dataId?: number;
	value?: string;
	// title?: string;
	src?: string;
	// className?: string;
	onClick?: ((e: any) => void) | undefined;
	setShow?: React.Dispatch<React.SetStateAction<boolean>>;
	err?: FieldErrors;
}

const Button: React.FC<IProps> = (props) => {
	const { className, value, title, src, onClick, dataId, setShow, err } = props;

	if (src) {
		return (
			<button
				data-id={dataId}
				className={className + ' btn-hover'}
				title={title}
				onClick={(e) => {
					if (onClick) onClick(e);
				}}
			>
				<img src={src} alt="" />
			</button>
		);
	} else {
		return (
			<button
				data-id={dataId}
				type="submit"
				className={className + ' btn-hover'}
				onClick={(e) => {
					if (onClick) onClick(e);
					if (setShow) setShow(false);
				}}
			>
				{value}
			</button>
		);
	}
};

export default Button;
