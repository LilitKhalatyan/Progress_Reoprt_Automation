import React, { useEffect, useState } from 'react';
import Avatar from 'react-avatar';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from '../../asset/images/logo.svg';
import { logoutAction } from '../../redux/auth/authSlice';
import './header.scss';

const Header: React.FC = () => {
	const [user, setUser] = useState('');

	useEffect(() => {
		setUser(
			`${JSON.parse(localStorage.getItem('user')!)?.name} ${
				JSON.parse(localStorage.getItem('user')!)?.surname
			}`
		);
	}, []);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleListItemClick = () => {
		navigate('settings');
	};

	const isLogout = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		e.stopPropagation();
		localStorage.removeItem('user');
		dispatch(logoutAction(navigate));
	};

	return (
		<header className="header">
			<div className="header__container">
				<div className="header__content">
					<div className="header__logo">
						<img src={logo} alt="Sourceminde logo" />
					</div>
					<div className="user-side">
						<div className="user-icon">
							<Avatar
								name={user}
								size="34"
								textSizeRatio={1.75}
								round="20px"
								onClick={handleListItemClick}
								title="settings"
								color="#5c1c70"
							/>
						</div>
						<div
							className="logout-icon"
							title="log out"
							onClick={(e) => {
								isLogout(e);
							}}
						/>
					</div>
				</div>
			</div>
		</header>
	);
};
export default Header;
