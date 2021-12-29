import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
	const user = false;
	return (
		<div className="top">
			<div className="topLeft">
				<i className="topIcon fab fa-facebook-f"></i>
				<i className="topIcon fab fa-twitter"></i>
				<i className="topIcon fab fa-pinterest"></i>
				<i className="topIcon fab fa-instagram"></i>
			</div>
			<div className="topCenter">
				<ul className="topList">
					<li className="topListItem">
						<Link className="link" to="/">
							HOME
						</Link>
					</li>
					<li className="topListItem">
						<Link className="link" to="/">
							ABOUT
						</Link>
					</li>
					<li className="topListItem">
						<Link className="link" to="/">
							CONTACT
						</Link>
					</li>
					<li className="topListItem">
						<Link className="link" to="/write">
							WRITE
						</Link>
					</li>
					<li className="topListItem">{user && "LOGOUT"}</li>
				</ul>
			</div>
			<div className="topRight">
				{user ? (
					<img
						className="topImg"
						src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fbe%2Fc6%2F38%2Fbec638042941ca7997d296b041a13de2.jpg&f=1&nofb=1"
						alt=""
					/>
				) : (
					<ul className="topList">
						<li className="topListItem">
							<Link className="link" to="/login">
								LOGIN
							</Link>
						</li>
						<li className="topListItem">
							<Link className="link" to="/register">
								REGISTER
							</Link>
						</li>
					</ul>
				)}
				<i className="topSearchIcon fas fa-search"></i>
			</div>
		</div>
	);
}
