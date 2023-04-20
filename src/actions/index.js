import jsonPlacholder from '../apis/jsonPlacholder';

const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlacholder.get('/posts');

  dispatch({
    type: 'FETECH_POST',
    payload: response,
  });
};

export default fetchPosts;
