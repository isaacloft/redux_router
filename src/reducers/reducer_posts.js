import _ from 'lodash';

import { FETCH_POSTS } from '../actions';

export default function (state = {}, action) {
	switch (action.type) {
		case FETCH_POSTS:
			console.log(_.mapKeys(action.payload.data, 'id'));
			return _.mapKeys(action.payload.data, 'id');

		default:
			return state;
	}
}
