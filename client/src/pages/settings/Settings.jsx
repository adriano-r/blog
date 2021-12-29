import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
	return (
		<div className="settings">
			<div className="settingsWrapper">
				<div className="settingsTitle">
					<span className="settingsUpdateTitle">Update Your Acount</span>
					<span className="settingsDeleteTitle">Delete Acount</span>
				</div>
				<form className="settingsForm">
					<label> Profile Picture</label>
					<div className="settingsPP">
						<img
							src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F10%2FImages-anime-landscape.jpg&f=1&nofb=1"
							alt=""
						/>
						<label htmlFor="fileInput">
							<i className="settingsPPIcon far fa-user-circle"></i>
						</label>
						<input type="file" id="fileInput" style={{ display: "none" }} />
					</div>
					<label>Username</label>
					<input type="text" placeholder="User" />
					<label>Email</label>
					<input type="email" placeholder="User@email.com" />
					<label>Password</label>
					<input type="password" />
					<button className="settingsSubmit">Update</button>
				</form>
			</div>
			<Sidebar />
		</div>
	);
}
