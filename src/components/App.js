import React from 'react';
import axios from 'axios';
import { Router, Route, Switch } from 'react-router-dom';

import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import LandingPage from './LandingPage';
import RiskDetails from './RiskDetails';
import history from '../history';

const BASE_API_URL = 'http://localhost:8080'
const API_URL = `${BASE_API_URL}/searchTweets`

const fakeTweets = [
        {
            "tweetPost": "From water-tight contracts to helping in day-to-day management of driver partners, finances & cars, all the way to reconciliation & recovery services, as a newbie to the e-hailing business, we will guide you to get the best of your investment. Sign-up: at https://t.co/pzEv9P187l https://t.co/xKwN0W7tBB",
            "createdOn": "2019-06-15T17:00:01.000+0000",
            "sentimentScore": 0.8
        },
        {
            "tweetPost": "@fr_aquilini @lyft @Uber Ironically, even most Uber drivers will offer you water, right Frankie?",
            "createdOn": "2019-06-15T16:37:42.000+0000",
            "sentimentScore": 0.7
        },
        {
            "tweetPost": "A St. Petersburg man was arrested Thursday after police reports say he beat up an Uber driver with a water bottle, a car antenna and a cane belonging to an elderly bystander, according to WFTS.​ https://t.co/axxxOg045L",
            "createdOn": "2019-06-15T16:35:36.000+0000",
            "sentimentScore": 0.4
        },
        {
            "tweetPost": "RT @SirEviscerate: UBER DRIVER: You Death?\nDEATH: yeah *gets in car*\nDRIVER: There's water in the back, and a charger for your phone.\nDEATH…",
            "createdOn": "2019-06-15T16:04:52.000+0000",
            "sentimentScore": 0.3
        },
        {
            "tweetPost": "For the entire first year and a half of our marriage he kept our heads above water pretty much single-handedly while I eeked out tiny payouts from Uber and other gig jobs, never putting too much pressure on me to get my shit together.",
            "createdOn": "2019-06-15T15:37:50.000+0000",
            "sentimentScore": 0.7
        },
        {
            "tweetPost": "— take shorter showers! it will save you money and it makes sure you're not wasting water\n— carpool! if you need an uber use uber pool to save money and reduce carbon emissions! \n— walk or bike places instead of driving (if you can)",
            "createdOn": "2019-06-15T15:25:47.000+0000",
            "sentimentScore": 0.4
        },
        {
            "tweetPost": "@CoachLRJ I once did a flight of bourbon county stouts after a whole day of drinking in san diego. I was so drunk I offered my uber driver a job doing EPA water compliance in Albuquerque for my department.",
            "createdOn": "2019-06-15T14:59:44.000+0000",
            "sentimentScore": 0.4
        },
        {
            "tweetPost": "My uber driver had candy, water and mints. https://t.co/CzaSnc95oo",
            "createdOn": "2019-06-15T14:41:38.000+0000",
            "sentimentScore": 0.3
        },
        {
            "tweetPost": "Still can’t believe I had an uber driver offer me a half drank bottle of water last night",
            "createdOn": "2019-06-15T14:35:30.000+0000",
            "sentimentScore": 0.2
        },
        {
            "tweetPost": "RT @ErikStrofe: @KatTheHammer1 @southernwayjim @MARINE_99ZULU @mikandynothem @michaelbeatty3 @VFL2013 @whatznextfolks @michellemalkin @Mark…",
            "createdOn": "2019-06-15T14:28:41.000+0000",
            "sentimentScore": 0
        }
    ]

    const fakeTweetsTwo = {"goodTweet": "From water-tight contracts to helping in day-to-day management of driver partners, finances & cars, all the way to reconciliation & recovery services, as a newbie to the e-hailing business, we will guide you to get the best of your investment. Sign-up: at https://t.co/pzEv9P187l https://t.co/xKwN0W7tBB",
    "goodTweetScore": 0.8,
    "badTweet": "RT @ErikStrofe: @KatTheHammer1 @southernwayjim @MARINE_99ZULU @mikandynothem @michaelbeatty3 @VFL2013 @whatznextfolks @michellemalkin @Mark…",
    "badTweetScore": 0}

class App extends React.Component {

    state = {
        tweetsInfo: fakeTweets,
        bestTweets: fakeTweetsTwo
    }

    onTermSubmit = async (term) => {
        console.log("our term: ", term);
        axios.get(`${API_URL}?companyName=${term}`)
        .then(res => {
            console.log(res);
            this.setState({ tweetsInfo: res.data });
     })
     history.push("/results")
    };


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
                                render={(props) => <SearchResult {...props} tweets={this.state.tweetsInfo}
                                bestTweets={this.state.bestTweets}
                                 />}
                            />
                            <Route
                                path="/about" exact
                                component={RiskDetails}
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
