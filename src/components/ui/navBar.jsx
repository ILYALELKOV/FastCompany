import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
	return (
		<div className="d-flex justify-content-center mt-3">
			<ul className="nav">
				<li className="nav-item">
					<Link className="nav-link active fs-5" to="/">
						Main
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link fs-5" to="/login">
						Login
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link fs-5" to="/users">
						Users
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default NavBar
