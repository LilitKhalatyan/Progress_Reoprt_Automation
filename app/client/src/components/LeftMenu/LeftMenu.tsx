import React from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './leftMenu.scss';

const icons = ['courses-icon', 'trainers-icon', 'students-icon', 'subjects-icon', 'reports-icon'];

const LeftMenu: React.FC = () => {
	const navigate = useNavigate();
	const handleListItemClick = (e: React.MouseEvent<HTMLLIElement>) => {
		navigate(e.currentTarget.id);
	};
	return (
		<div className="menu">
			<div className="menu__container">
				<nav>
					<ul>
						{icons.map((icon) => {
							return (
								<li key={uuid()} id={icon.slice(0, -5)} onClick={handleListItemClick}>
									<div className={icon}></div>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default LeftMenu;
