import React from 'react';
import Chart from 'react-google-charts';
import Loader from 'react-loader-spinner';

import TimeChart from './TimeChart';

class SearchResult extends React.Component {

    constructor(props) {

    super(props);

    this.state = {
        averageScore: 0,
        dateAndScore: []
        };

        // this.calculateAverage = this.calculateAverage.bind(this)
    }

    componentDidMount() {
        if (this.props.tweets) {
            this.calculateAverage(this.props.tweets)
            this.calculateTime(this.props.tweets)
        }
    }

    calculateAverage = (tweets) => {
        if (!tweets) {
            return
        }
        let sum = 0;
        tweets.map(tweet =>
            sum += tweet.sentimentScore
        );

        let average = sum / tweets.length
        let number = average.toString().slice(0, 4)


        this.setState({
            averageScore: number
        })
        return
    }

    calculateTime = (tweets) => {

        let dataArr = []
        for (let i = 0; i < tweets.length; i++) {
            let arrTweet = [i, tweets[i].sentimentScore]
            dataArr.push(arrTweet)
        }

        dataArr.unshift(['x', 'Risk Score'])

        console.log("array", dataArr);
        this.setState({
            dateAndScore: dataArr
        })
    }



    render() {
    console.log("Our props:", this.props);

    if (!this.props.tweets) {
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
            <TimeChart tweets={this.state.dateAndScore} />
            <div className="score-div">
                <h2>Your score is:</h2>
                <div className="number-div">
                    <p>{this.state.averageScore}</p>
                </div>
            </div>
            <div className="best-tweet-div">
                <div className="first-tweet">
                    <h2>Tweet with highest score {this.props.bestTweets.goodTweetScore}:
                    </h2>
                    <p>{this.props.bestTweets.goodTweet}</p>
                    </div>
                    <div className="second-tweet">
                    <h2>Tweet with lowest score {this.props.bestTweets.badTweetScore}:
                    </h2>
                    <p>{this.props.bestTweets.badTweet}</p>
                </div>
            </div>
        </div>
    )
    }
}

export default SearchResult;


// <p>{props.tweets.map(tweet => <p> {tweet.body} </p>)}</p>
