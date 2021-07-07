import React, { useCallback } from "react";
import { connect } from 'react-redux'
import { selectReddit } from '../store/actions'
import Picker from '../components/Picker'

const RedditContainer = ({ selectedReddit, selectSubReddit, postsByReddit, dispatch, posts }) => {

    const handleChange = useCallback((nextReddit) => {
        // TODO: implement this method using redux-saga
        selectSubReddit(nextReddit)
    }, [])

    return (
        <div className="wrapper">
            <h2>Get data from Reddit and display them here</h2>
            <div>
                <Picker value={selectedReddit} onChange={handleChange} options={['reactjs', 'frontend']} />
            </div>
            <div>
                {/* Display reddits from selected option */}
                {posts.map((post => (
                    <div className="post" key={post.id}>
                        <h3>{post.title}</h3>
                        <p className="post-author">{post.author}</p>
                        <p className="post-selftext">{post.selftext}</p>
                    </div>
                )))}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const { selectedReddit, postsByReddit } = state
    const { isFetching, lastUpdated, items: posts } = postsByReddit[selectedReddit] || {
        isFetching: true,
        items: [],
    }

    return {
        selectedReddit,
        posts,
        isFetching,
        lastUpdated,
    }
}

const mapDispatchToProps = (dispatch) => ({
    selectSubReddit: (reddit) => dispatch(selectReddit(reddit))
    });

export default connect(mapStateToProps, mapDispatchToProps)(RedditContainer)
