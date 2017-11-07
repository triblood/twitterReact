import React, {Component} from 'react'
var axios = require('axios');


class App extends Component{
	constructor()
	{
		super();
		this.state = {
			tweet: []
		}
	}

	componentDidMount(){
		axios.get('http://localhost/sandbox/twitter/getTweetUser.php')
		.then(({data}) => {
            console.log(data)
			this.setState({
				tweet: data
			})
		})
		.catch((err) => {})
	}

	render()
	{
        const tweetL = this.state.tweet.map((el, index) => {
            return <div key={index}>
                <div className="infoTweet">
                    <div className="TweetUser">{ el.user.name }</div>
                    <div className="TweetNick">@{ el.user.screen_name}</div>
                    <div className="TweetCreate">{ el.created_at}</div>
                </div>
                <div className="txtTweet">
                    {el.text}
                </div>
            </div>
        });
		return(
			<div className="mainTweet">
                {tweetL}
            </div>
		)
	}
}

export default App;