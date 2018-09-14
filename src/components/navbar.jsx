import React from 'react';

//Componentes funcionales sin estado, no tienen una clase y el prop se pasa arriba
const NavBar = ({totalProducts}) => {
	console.log('NavBar - Renderizado');
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
		<a className="navbar-brand" href="">
		Navbar
		</a><span className="badge badge-pill badge-secondary">{totalProducts}</span>
		</nav>
		);
};

export default NavBar;