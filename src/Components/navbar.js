import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
	return (
		<div className="d-flex justify-content-between">
			<div>My Navbar</div>
			<div className="d-flex justify-content-center">
				<div>
					<Link to="/">
						<button>Home</button>
					</Link>
				</div>
				<div>
					<Link to="/about">
						<button>About</button>
					</Link>
				</div>
				<div>
					<Link to="/work">
						<button>Projects</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
