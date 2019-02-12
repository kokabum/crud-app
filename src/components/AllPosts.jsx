import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import EditComponent from './EditComponent';

class AllPosts extends Component {
    render() {
        return (
            <div>
                <h1 className="post_heading">All Posts</h1>
                {this.props.posts.map((post) => post.editing ? <EditComponent post={post} key={post.id} /> : 
                    <Post key={post.id} post={post} />)}
                {console.log(this.props.posts)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

export default connect(mapStateToProps)(AllPosts);