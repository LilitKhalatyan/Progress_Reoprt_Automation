import LayoutWrapper from '../../layout/LayoutWrapper';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const PageNotFound: React.FC = () => {
	return (
		<LayoutWrapper>
			<ErrorMessage message="Page Not Found!" />
		</LayoutWrapper>
	);
};

export default PageNotFound;
