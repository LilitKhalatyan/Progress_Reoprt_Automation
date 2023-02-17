import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { authSelector } from '../redux/auth/authSelector';
import { logoutAction } from '../redux/auth/authSlice';

const PublicLayout = () => {
	const user = useSelector(authSelector);
	const dispatch = useDispatch();

	if (!user) {
		dispatch(logoutAction());
		return <Outlet />;
	}
	return <Navigate to="/" replace={true} />;
};

export default PublicLayout;
