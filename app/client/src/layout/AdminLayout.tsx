import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import LeftMenu from '../components/LeftMenu/LeftMenu';
import { userSelector } from '../redux/auth/authSelector';

import '../style/style.scss';

const AdminLayout: React.FC = (): JSX.Element => {
	return (
		<div className="main__container">
			<Header />
			<div className="page__container">
				<div className="page__content">
					<LeftMenu />
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default AdminLayout;
