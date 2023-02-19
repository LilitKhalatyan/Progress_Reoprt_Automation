import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { authSelector, userSelector } from '../redux/auth/authSelector';

import '../style/style.scss';
import AdminLayout from './AdminLayout';
import TrainerLayout from './TrainerLayout';

const AuthLayout: React.FC = (): JSX.Element => {
	const auth = useSelector(authSelector);
	const user = useSelector(userSelector);
	console.log(user.id === 1)
	console.log(user.id === 2)

	if (auth) {
		if (user.id === 1) {
			return <AdminLayout />;
		} else if (user.id === 2) {
			return <TrainerLayout />;
		}
	}
	return <Navigate to="/login" replace={true} />;
};

export default AuthLayout;
