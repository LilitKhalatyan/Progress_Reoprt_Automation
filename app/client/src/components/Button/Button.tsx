import React from 'react';
import './button.scss';

interface IProps extends React.HTMLAttributes<HTMLInputElement> {
	dataId?: number;
	value?: string;
	src?: string;
	name?: string;
	onClick?: ((e: any) => void) | undefined;
	getID?: React.Dispatch<React.SetStateAction<any>>;
	sendReport?: () => void;
}

const Button: React.FC<IProps> = (props) => {
	const { className, value, title, src, onClick, dataId, name, getID, sendReport } = props;

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
					if (onClick) onClick(e);
					if (getID) getID(e.currentTarget.dataset.dataId);
					if (sendReport) sendReport();
				}}
				name={name}
			>
				{value}
			</button>
		);
	}
};

export default Button;
