import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import { Toolbar } from ''

import {
				Log,
				Dashboard,
				Reset,
				App,
				Home
} from '../modules';
import {Toolbar, ToolbarTitle} from 'material-ui';

const Routers = () => (
		<MuiThemeProvider>
			<BrowserRouter>
				<div>
					<Route path="/" component={App}/>
					<Route exact path="/" component={Home}/>
					<Route exact path="/login" component={Log}/>
					<Route path="/dashboard" component={Dashboard}/>
					<Route path="/reset" component={Reset}/>
					<Toolbar className="footer">
						<ToolbarTitle className="footer-note" text="Eventing"/>
					</Toolbar>
				</div>
			</BrowserRouter>
		</MuiThemeProvider>
);

export {Routers};