import jsonPlacholder from '../apis/jsonPlacholder';
import _ from 'lodash';

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlacholder.get('/posts');

  dispatch({
    type: 'FETECH_POST',
    payload: response.data,
  });
};

export const fetchUser = (id) => (dispatch) => {
  _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlacholder.get(`/users/${id}`);

  dispatch({
    type: 'FETECH_USER',
    payload: response.data,
  });
});
