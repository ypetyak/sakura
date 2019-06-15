import React from 'react';
import Loader from 'react-loader-spinner';

import TimeChart from './TimeChart';

class SearchResult extends React.Component {

    render() {
    console.log("Our props in results:", this.props);

    if (this.props.tweets.length == 0) {
        return  (
            <div className="loader-div">
            <h2> Analysing...</h2>
            <Loader
                 type="Puff"
                 color="rgb(128,193,194)"
                 height="100"
                 width="100"
              />
              </div>
          )
    }

    return (
        <div className="results-div">
            <TimeChart tweets={this.props.dateAndScore} />
            <div className="score-div">
                <h2>Your score is:</h2>
                <div className="number-div">
                    <p>{this.props.averageScore}</p>
                </div>
            </div>
            <div className="best-tweet-div">
                <div className="first-tweet">
                    <h2>Tweet with highest score {this.props.tweets.goodTweetScore}:
                    </h2>
                    <p>{this.props.tweets.goodTweet}</p>
                    </div>
                    <div className="second-tweet">
                    <h2>Tweet with lowest score {this.props.tweets.badTweetScore}:
                    </h2>
                    <p>{this.props.tweets.badTweet}</p>
                </div>
            </div>
        </div>
    )
    }
}

export default SearchResult;

