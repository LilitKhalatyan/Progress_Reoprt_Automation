import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './leftMenu.scss';
import { motion } from 'framer-motion';
import { log } from 'console';
import { useSelector } from 'react-redux';
import { userSelector } from '../../redux/auth/authSelector';

const LeftMenu: React.FC = () => {
	const navigate = useNavigate();
	const handleListItemClick = (e: React.MouseEvent<HTMLLIElement>) => {
		console.log(e.currentTarget.id);
		navigate(e.currentTarget.id);
	};
	const user = useSelector(userSelector);
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				delayChildren: 0.5,
			},
		},
	};
	const getPath = () => {
		if (user.roles === 'ADMIN') {
			return '';
		} else {
			return 'trainer/';
		}
	};
	let path = "";
	useEffect(() => {
		path = getPath()
	},[])
	const icons = ['courses-icon', 'students-icon', 'trainers-icon', 'subjects-icon', 'reports-icon'];

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
							let hide = "";
							if(user.roles === "USER" && icon.slice(0, -5) === "trainers") {
								hide = "hideLi"
							}
							return (
								<motion.li
									className={hide}
									variants={item}
									key={icon}
									id={`${path}${icon.slice(0, -5)}`}
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
