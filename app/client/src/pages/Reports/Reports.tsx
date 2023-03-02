import { motion } from 'framer-motion';
import useQueryParams from '../../hooks/useQueryParams';

export default function Reports() {
	const { searchParams, setSearchParams } = useQueryParams();
	console.log(searchParams);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 2, delay: 0.5 }}
			style={{ zIndex: 9999999999 }}
		>
			Reports
			<button onClick={() => setSearchParams({ asd: [1, 2, 3], dsa: [1], vvv: 'vvv' })}>butto</button>
		</motion.div>
	);
}
