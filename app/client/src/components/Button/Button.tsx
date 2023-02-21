import React from 'react';
import './button.scss';

interface IProps extends React.HTMLAttributes<HTMLInputElement> {
	dataId?: number;
	value?: string;
	src?: string;
	name?: string;
	onClick?: ((e: any) => void) | undefined;
	getID?: React.Dispatch<React.SetStateAction<any>>;
}

const Button: React.FC<IProps> = (props) => {
	const { className, value, title, src, onClick, dataId, name, getID } = props;

	if (src) {
		return (
			<button
				data-id={dataId}
				className={className + ' btn-hover'}
				title={title}
				onClick={(e) => {
					if (onClick) onClick(e);
				}}
				name={name}
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
					console.log(e.currentTarget.dataset.id);

					if (onClick) onClick(e);
					if (getID) getID(e.currentTarget.dataset.dataId);
				}}
				name={name}
			>
				{value}
			</button>
		);
	}
};

export default Button;
