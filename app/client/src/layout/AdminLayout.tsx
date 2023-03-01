import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { authSelector, userSelector } from '../redux/auth/authSelector';
import LayoutWrapper from './LayoutWrapper';
import { useEffect } from 'react';
import { refreshAction } from '../redux/auth/authSlice';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import '../style/style.scss';

const AdminLayout: React.FC = () => {
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

export default AdminLayout;
