import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from '../redux/auth/authSelector';
import LayoutWrapper from './LayoutWrapper';
import { Outlet } from 'react-router';
// import access from '../asset/images/warning/access_denied.svg';
import warning from '../asset/images//warning/warning.svg';
import '../style/style.scss';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getCoursesByTrainerIdAction } from '../redux/course/courseSlice';
import { getSubjectByTrainerIdAction } from '../redux/subject/subjectSlice';

const TrainerLayout: React.FC = (): any => {
	const user = useSelector(userSelector);
	// <Navigate to="/trainers/courses" replace={false} />;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCoursesByTrainerIdAction(user.id));
		dispatch(getSubjectByTrainerIdAction(user.id));
	}, []);
	if (user.roles === 'USER') {
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

export default TrainerLayout;
