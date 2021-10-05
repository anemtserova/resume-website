import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { About } from './Pages/about';
import { Home } from './Pages/home';
import { Projects } from './Pages/projects';

import { Navbar } from './Components/navbar';
import { Footer } from './Components/footer';

const Layout = () => {
	const basename = '';

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/about">
						<About />
					</Route>
					<Route exact path="/work">
						<Projects />
					</Route>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default Layout;
