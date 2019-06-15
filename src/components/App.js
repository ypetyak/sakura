import React from 'react';
import axios from 'axios';
import { Router, Route, Switch } from 'react-router-dom';

import twitter from '../api/twitter';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import LandingPage from './LandingPage';
import { TWITTER_KEY, TWITTER_SECRET} from '../secrets.json';
import history from '../history';
// import VideoList from './VideoList';
// import VideoDetail from './VideoDetail';

class App extends React.Component {

    state = {
        tweets: [],
    }

    componentDidMount() {

    }

    onTermSubmit = async (term) => {
        console.log("our term: ", term);
        // const response = await twitter.get('/search', {
        //     params: {
        //         q: term
        //     }
        // });

        // this.setState({
        //     tweets: "tweet"
        // })

        axios.get(`https://api.twitter.com/1.1/search/tweets.json?q=${term}`)
        .then(res => {
            console.log(res);
            this.setState({ tweets: res.data });
     })
     history.push("/results")
    };

    onVideoSelect = (video) => {
        console.log("Video in the App:", video);
        this.setState({
            selectedVideo: video
        })
    }


    render() {
        return (
            <div className="main-div">
                <Router history={history}>
                    <div>
                        <SearchBar
                            onFormSubmit={this.onTermSubmit}
                        />
                        <Switch>
                            <Route path="/" exact component={LandingPage}
                            />
                            <Route
                                path="/results" exact
                                component={SearchResult}
                            />
                        </Switch>
                    </div>
                </Router>
                <div class="ocean">
                  <div class="wave"></div>
                  <div class="wave"></div>
                </div>
            </div>
        )
    }
}

export default App;

// <div className="ui grid">
//     <div className="ui row">
//         <div className="eleven wide column">
//             <VideoDetail
//                 video={this.state.selectedVideo}
//             />
//         </div>
//         <div className="five wide column">
//             <VideoList
//                 videos={this.state.videos}
//                 onVideoSelect={this.onVideoSelect}
//             />
//         </div>
//     </div>
// </div>
