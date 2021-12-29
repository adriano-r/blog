import "./post.css";

export default function Post() {
	return (
		<div className="post">
			<img
				className="postImg"
				src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F42%2Fa2%2Fa8%2F42a2a8751b63b25984ee0caac8fe962c.jpg&f=1&nofb=1"
				alt=""
			/>
			<div className="postInfo">
				<div className="postCats">
					<span className="postCat">Music</span>
					<span className="postCat">Life</span>
				</div>
				<span className="postTitle">Lorem, ipsum dolor</span>
				<hr />
				<span className="postDate">1 hour ago</span>
			</div>
			<p className="postDesc">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque perferendis dolorem
				minima quidem expedita unde, eius impedit quasi harum facere! Lorem ipsum dolor sit
				amet consectetur adipisicing elit. Cumque perferendis dolorem minima quidem expedita
				unde, eius impedit quasi harum facere! Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Cumque perferendis dolorem minima quidem expedita unde, eius
				impedit quasi harum facere! Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Cumque perferendis dolorem minima quidem expedita unde, eius impedit quasi harum
				facere! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque perferendis
				dolorem minima quidem expedita unde, eius impedit quasi harum facere!
			</p>
		</div>
	);
}
