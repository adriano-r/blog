import "./topbar.css";

export default function Topbar() {
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
					<li className="topListItem">HOME</li>
					<li className="topListItem">ABOUT</li>
					<li className="topListItem">CONTACT</li>
					<li className="topListItem">WRITE</li>
					<li className="topListItem">LOGOUT</li>
				</ul>
			</div>
			<div className="topRight">
				<img
					className="topImg"
					src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fbe%2Fc6%2F38%2Fbec638042941ca7997d296b041a13de2.jpg&f=1&nofb=1"
					alt=""
				/>
				<i className="topSearchIcon fas fa-search"></i>
			</div>
		</div>
	);
}
