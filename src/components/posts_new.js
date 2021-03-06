import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPosts } from '../actions';

class PostsNew extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	onSubmit(formValues) {
		// console.log(formValues);
		this.props.createPosts(formValues)
		.then(() => {
			this.props.history.push('/');
		});
	}

	renderField(field) {
		const className = `form-group ${
			field.meta.touched && field.meta.error ? 'has-danger' : ''
		}`;
		return (
			<div className={className}>
				<span>{field.label}</span>
				<input className="form-control" type="text" {...field.input} />
				<span className="text-help">
					{field.meta.touched ? field.meta.error : ''}
				</span>
			</div>
		);
	}

	render() {
		const { handleSubmit } = this.props;

		return (
			<div>
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<Field
						label="Title"
						name="title"
						component={this.renderField}
					/>
					<Field
						label="Categories"
						name="categories"
						component={this.renderField}
					/>
					<Field
						label="Post Content"
						name="content"
						component={this.renderField}
					/>

					<button type="submit" className="btn btn-primary">
						Submit
					</button>
					<Link className="btn btn-danger margin-left-10" to="/">
						Cancel
					</Link>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	if (!values.title) {
		errors.title = 'Enter a title';
	}
	if (!values.categories) {
		errors.categories = 'Enter a category';
	}
	if (!values.content) {
		errors.content = 'Enter some content';
	}

	// if errors is empty object, there is no issue with form.
	// if not empty, issues exist
	return errors;
}

export default reduxForm({
	validate,
	form: 'PostsNewForm'
})(
	connect(
		null,
		{ createPosts }
	)(PostsNew)
);
