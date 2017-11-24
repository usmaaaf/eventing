import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {
				Log,
				Dashboard,
				Reset,
				App,
				Home
} from '../modules';

const Routers = () => (
		<MuiThemeProvider>
			<BrowserRouter>
				<div>
					<Route path="/" component={App}/>
					<Route exact path="/" component={Home}/>
					<Route exact path="/login" component={Log}/>
					<Route path="/dashboard" component={Dashboard}/>
					<Route path="/reset" component={Reset}/>
				</div>
			</BrowserRouter>
		</MuiThemeProvider>
);

export {Routers};