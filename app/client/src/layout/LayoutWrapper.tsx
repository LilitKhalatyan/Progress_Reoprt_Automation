import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import Header from '../components/Header/Header';
import LeftMenu from '../components/LeftMenu/LeftMenu';

const LayoutWrapper: React.FC<PropsWithChildren> = ({ children }) => {
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
					{children}
				</div>
			</div>
		</motion.div>
	);
};

export default LayoutWrapper;
