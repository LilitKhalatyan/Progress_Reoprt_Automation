import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import '../style/style.scss';

const MainLayout = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1.5 }}
			className="wrapper"
		>
			<Outlet />
		</motion.div>
	);
};

export default MainLayout;
