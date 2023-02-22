import LayoutWrapper from '../layout/LayoutWrapper';
import warning from '../asset/images//warning/warning.svg';

const PageNotFound: React.FC = () => {
	return (
		<LayoutWrapper>
			<h4>Page Not Found</h4>
			<img src={warning} alt="Page Not Found" />
		</LayoutWrapper>
	);
};

export default PageNotFound;
