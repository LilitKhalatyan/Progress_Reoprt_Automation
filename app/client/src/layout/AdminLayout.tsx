import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { authSelector, userSelector } from '../redux/auth/authSelector';
import LayoutWrapper from './LayoutWrapper';
import warning from '../asset/images//warning/warning.svg';
import '../style/style.scss';
import { useEffect } from 'react';
import { refreshAction } from '../redux/auth/authSlice';

const AdminLayout: React.FC = (): JSX.Element => {
	const user = useSelector(userSelector);
	const auth = useSelector(authSelector);
	const dispatch = useDispatch();
	useEffect(() => {
		if (auth && localStorage.getItem('user')) {
			dispatch(refreshAction());
		}
	}, [auth, dispatch]);
	if (user.roles !== 'ADMIN') {
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

export default AdminLayout;
