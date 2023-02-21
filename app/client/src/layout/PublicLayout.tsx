import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { authSelector } from '../redux/auth/authSelector';

const PublicLayout = () => {
	const user = useSelector(authSelector);
	if (!user) {
		return <Outlet />;
	}
	return <Navigate to="/" replace={true} />;
};

export default PublicLayout;
