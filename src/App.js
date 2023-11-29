import './App.css';
import { Fragment } from 'react';
import { SideNavigation } from './components';

function App({children}) {
	return (
		<Fragment>
			<div>
				<SideNavigation />
			</div>
		</Fragment>
	);
}

export default App;
