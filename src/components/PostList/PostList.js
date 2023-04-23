import React, { Component } from 'react';
import UserHeader from '../UserHeader/UserHeader';
import {fetchPosts} from '../../actions';
import { connect } from 'react-redux';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.myPosts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user"></i>
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { myPosts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
