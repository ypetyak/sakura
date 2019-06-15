import React from 'react';

import twitter from '../api/twitter';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
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
        const response = await twitter.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({
            tweets: "tweet"
        })
    };

    onVideoSelect = (video) => {
        console.log("Video in the App:", video);
        this.setState({
            selectedVideo: video
        })
    }


    render() {
        return (
            <div className="ui container">
                <SearchBar
                    onFormSubmit={this.onTermSubmit}
                />
                <div className="ui container">
                    <SearchResult
                        tweets={this.state.tweets}
                    />
                    <a href="https://twitter.com/intent/tweet?button_hashtag=watercrisis&ref_src=twsrc%5Etfw" className="twitter-hashtag-button" data-show-count="false">Tweet #watercrisis</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
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
