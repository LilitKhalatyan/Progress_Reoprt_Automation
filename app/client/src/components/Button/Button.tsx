import React from 'react';
import './button.scss';

interface IProps extends React.HTMLAttributes<HTMLInputElement> {
	dataId?: number;
	value?: string;
	// title?: string;
	src?: string;
	// className?: string;
	onClick?: ((e: any) => void) | undefined;
}

const Button: React.FC<IProps> = (props) => {
	const { className, value, title, src, onClick, dataId } = props;

	if (src) {
		return (
			<button
				data-id={dataId}
				className={className + ' btn'}
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
				className={className + ' btn'}
				onClick={(e) => {
					if (onClick) onClick(e);
				}}
			>
				{value}
			</button>
		);
	}
};

export default Button;
