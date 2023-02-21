import { PropsWithChildren } from 'react';
import Header from '../components/Header/Header';
import LeftMenu from '../components/LeftMenu/LeftMenu';

const LayoutWrapper:React.FC<PropsWithChildren> = ({children}) => {

	return <div className="main__container">
				<Header />
					<div className="page__container">
						<div className="page__content">
						<LeftMenu />
						{children}
					</div>
				</div>
			</div>
}

export default LayoutWrapper;
