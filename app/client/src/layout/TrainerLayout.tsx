import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import LeftMenu from '../components/LeftMenu/LeftMenu';
import '../style/style.scss';

const TrainerLayout: React.FC = (): any => {
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

export default TrainerLayout;
