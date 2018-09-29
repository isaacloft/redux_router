import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPost, deletePost } from '../actions';

class PostsShow extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }
	componentDidMount() {
		const id = this.props.match.params.id;
		// console.log('id is', id);
		if (!this.props.post) {
			this.props.fetchPost(id);
		}
	}

	onDeleteClick() {
		const id = this.props.match.params.id;

		this.props.deletePost(id)
		.then(() => this.props.history.push('/'));
	}

	render() {
		const { post } = this.props;

		if (!post) {
			return <div>Loading</div>;
		}
		return (
			<div>
				<Link className="btn btn-default" to="/">
					Go back to index
				</Link>
				<button
					className="btn btn-danger pull-xs-right"
					onClick={this.onDeleteClick.bind(this)}
				>
					Delete Post
				</button>

				<h3>{post.title}</h3>
				<h6>categories: {post.categories}</h6>
				<p>{post.content}</p>
			</div>
		);
	}
}

function mapStateToProps({ posts }, ownProps) {
	return { post: posts[ownProps.match.params.id] };
}

export default connect(
	mapStateToProps,
	{ fetchPost, deletePost }
)(PostsShow);
