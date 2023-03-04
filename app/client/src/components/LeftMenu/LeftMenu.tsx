import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getPath } from '../../utils/helpers/getPath';

import './leftMenu.scss';
import { container, item } from '../../utils/motion/leftMenu';

const userRole = JSON.parse(localStorage.getItem('user')!)?.roles;

const getLeftMenu = () => {
	if (userRole === 'ADMIN') {
		return ['courses-icon', 'students-icon', 'subjects-icon', 'trainers-icon', 'reports-icon'];
	} else {
		return ['courses-icon', 'students-icon', 'subjects-icon'];
	}
};

const icons = getLeftMenu();

const LeftMenu: React.FC = () => {
	const navigate = useNavigate();
	const handleListItemClick = (e: React.MouseEvent<HTMLLIElement>) => {
		navigate(e.currentTarget.id);
	};

	return (
		<div className="menu">
			<div className="menu__container">
				<nav>
					<motion.ul variants={container} initial="hidden" animate="show">
						{icons.map((icon) => {
							return (
								<motion.li
									variants={item}
									key={icon}
									id={`${getPath(userRole)}${icon.slice(0, -5)}`}
									onClick={handleListItemClick}
								>
									<div className={icon}></div>
								</motion.li>
							);
						})}
					</motion.ul>
				</nav>
			</div>
		</div>
	);
};

export default LeftMenu;
