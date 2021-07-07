import React, { useCallback } from "react";
import { connect } from 'react-redux'
import { selectReddit } from '../store/actions'
import Picker from '../components/Picker'

const RedditContainer = ({ selectedReddit, dispatch }) => {

    const handleChange = useCallback((nextReddit) => {
        // TODO: implement this method using redux-saga
    }, [])

    return (
        <div>
            <h3>Get data from Reddit and display them here</h3>
            <div>
                <Picker value={selectedReddit} onChange={handleChange} options={['reactjs', 'frontend']} />
            </div>
            <div>
                {/* Display reddits from selected option */}
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

export default connect(mapStateToProps)(RedditContainer)
