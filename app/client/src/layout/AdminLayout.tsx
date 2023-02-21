import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import LeftMenu from '../components/LeftMenu/LeftMenu';
import { authSelector } from '../redux/auth/authSelector';
import { refreshAction } from '../redux/auth/authSlice';

import '../style/style.scss';

const AdminLayout: React.FC = (): JSX.Element => {
	const auth = useSelector(authSelector);
	const dispatch = useDispatch();
	useEffect(() => {
		if (auth && localStorage.getItem('user')) {
			dispatch(refreshAction());
		}
	}, []);
	if (auth) {
		return (
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 1, delay: 1, type: 'easeInOut' }}
				className="main__container"
			>
				<Header />
				<div className="page__container">
					<div className="page__content">
						<LeftMenu />
						<Outlet />
					</div>
				</div>
			</motion.div>
		);
	}
	return <Navigate to="/login" replace={true} />;
};

export default AdminLayout;
