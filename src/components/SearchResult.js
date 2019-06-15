import React from 'react';

const SearchResult = (props) => {

    if (!props.tweets) {
        return <div> Loading... </div>
    }

    return (
        <div>
            <p>{props.tweets}</p>
        </div>
    )
}

export default SearchResult;
