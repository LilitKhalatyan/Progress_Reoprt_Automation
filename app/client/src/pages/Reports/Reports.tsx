import { motion } from 'framer-motion';

export default function Reports() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 2, delay: 0.5 }}
		>
			Reports
		</motion.div>
	);
}
