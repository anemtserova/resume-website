import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

export const Navbar = () => {
	return (
		<div className="d-flex flex-row justify-content-between">
			<div>My Navbar</div>
			<div className="d-flex flex-row justify-content-center">
				<Router>
					<div className="d-flex">
						<Link to="/">
							<button>Home</button>
						</Link>
					</div>
					<div className="d-flex">
						<Link to="/about">
							<button>About</button>
						</Link>
					</div>
					<div className="d-flex">
						<Link to="/work">
							<button>Projects</button>
						</Link>
					</div>
				</Router>
			</div>
		</div>
	);
};
