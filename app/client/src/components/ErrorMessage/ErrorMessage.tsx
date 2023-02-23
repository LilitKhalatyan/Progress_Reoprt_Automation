import { useEffect } from 'react';
import img from './error.gif';
import './errorMessage.scss';

interface IProps {
    message: any;
    error?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ErrorMessage: React.FC<IProps> = (props) => {
    // useEffect(() => {
    // 	const setId = setTimeout(() => {
    // 		props.error(false);
    // 	}, 3500);

    // 	return (): void => {
    // 		clearTimeout(setId);
    // 	};
    // }, [props.error]);
    return (
        <>
            <img
                className='error-image'
                src={img}
                alt="Error"
            />
            <h3 className='error-title'>{props.message}</h3>
        </>
    );
};

export default ErrorMessage;
