import React, { Component } from 'react';
import fetchPosts from '../../actions';
import { connect } from 'react-redux';

class PostList extends Component {
  componentDidMount() {
    console.log(this.fetchPosts);
  }
  render() {
    return <div>PostList</div>;
  }
}

const mapStateToProps = (state) => {
  return { myPosts: state.dummy };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
