import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { userSelector } from '../redux/auth/authSelector';
import LayoutWrapper from './LayoutWrapper';
import warning from '../asset/images//warning/warning.svg';
import '../style/style.scss';

const AdminLayout: React.FC = (): JSX.Element => {
	const user = useSelector(userSelector);

	if (user.roles === 'ADMIN') {
		return (
			<LayoutWrapper>
				<Outlet />
			</LayoutWrapper>
		);
	} else {
		return (
			<LayoutWrapper>
				<h4>Access Denied</h4>
				<img src={warning} alt="Access Denied" />
			</LayoutWrapper>
		);
	}
};

export default AdminLayout;
