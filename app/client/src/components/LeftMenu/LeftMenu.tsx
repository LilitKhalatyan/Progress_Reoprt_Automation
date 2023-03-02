import React from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './leftMenu.scss';
import { motion } from 'framer-motion';


const userRole = JSON.parse(localStorage.getItem('user')!)?.roles

const getLeftMenue = () => {
	if (userRole === "ADMIN") {
		return ['courses-icon', 'trainers-icon', 'students-icon', 'subjects-icon', 'reports-icon'];
	} else {
		return ['courses-icon', 'students-icon', 'subjects-icon'];
	}
}

const icons = getLeftMenue();

const LeftMenu: React.FC = () => {
	const navigate = useNavigate();
	const handleListItemClick = (e: React.MouseEvent<HTMLLIElement>) => {
		navigate(e.currentTarget.id);
	};
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				delayChildren: 0.5,
			},
		},
	};

	const item = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	};
	return (
		<div className="menu">
			<div className="menu__container">
				<nav>
					<motion.ul variants={container} initial="hidden" animate="show">
						{icons.map((icon) => {
							return (
								<motion.li variants={item} key={icon} id={icon.slice(0, -5)} onClick={handleListItemClick}>
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
