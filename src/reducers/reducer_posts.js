import _ from 'lodash';

import { FETCH_POSTS, CREATE_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_POSTS:
			console.log(_.mapKeys(action.payload.data, 'id'));
			return _.mapKeys(action.payload.data, 'id');

		case CREATE_POSTS:
			console.log('create a new post', action);
			// return _.mapKeys(action.payload.data, 'id');
			return state;

		case FETCH_POST:
			return { ...state, [action.payload.data.id]: action.payload.data };

		case DELETE_POST:
		// console.log(action);
			return _.omit(state, action.payload);
			// return state;

		default:
			return state;
	}
}
