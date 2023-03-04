import { useSelector } from 'react-redux';
import { userSelector } from '../redux/auth/authSelector';
import LayoutWrapper from './LayoutWrapper';
import { Outlet } from 'react-router';
import warning from '../asset/images//warning/warning.svg';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

import '../style/style.scss';

const TrainerLayout: React.FC = () => {
	const user = useSelector(userSelector);
	if (user.roles !== 'USER') {
		return (
			<LayoutWrapper>
				<ErrorMessage message="Access Denied" />
			</LayoutWrapper>
		);
	} else {
		return (
			<LayoutWrapper>
				<Outlet />
			</LayoutWrapper>
		);
	}
};

export default TrainerLayout;
