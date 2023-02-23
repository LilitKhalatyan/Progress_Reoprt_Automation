import { useSelector } from 'react-redux';
import { userSelector } from '../redux/auth/authSelector';
import LayoutWrapper from './LayoutWrapper';
import { Outlet } from 'react-router';
// import access from '../asset/images/warning/access_denied.svg';
import warning from '../asset/images//warning/warning.svg';
import '../style/style.scss';

const TrainerLayout: React.FC = (): any => {
	const user = useSelector(userSelector);
	if (user.roles !== 'USER') {
		return (
			<LayoutWrapper>
				<h4>Access Denied</h4>
				<img src={warning} alt="Access Denied" />
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
