import React, {Component} from 'react'
var axios = require('axios');


class App extends Component{
	constructor()
	{
		super();
		this.state = {
			nome: '',
			nick: '',
			imgUser: '',
			bgUser: '',
			tweetsNum: '',
			followers: '',
			following: ''
		}
	}

	componentDidMount(){
		axios.get('http://localhost/sandbox/twitter/getInfoUser.php')
		.then(({data}) => {
			this.setState({
				nome: data.name,
				nick: data.screen_name,
				imgUser: data.profile_image_url,
				bgUser: data.profile_background_image_url,
				tweetsNum: data.statuses_count,
				followers: data.followers_count,
				following: data.friends_count
			})
		})
		.catch((err) => {})
	}

	render()
	{
		return(
			<div className="Info">
				<div className="imgUser"><img src={ this.state.imgUser } /></div>
				<div className="dataUser">
					<div className="nameUser">{ this.state.nome }</div>
					<div className="nickUser">{ this.state.nick }</div>
				</div>
				<div className="otherInfos">
					<div className="Tweets">
						<span className="titulo">Tweets</span>
						<strong className="data">{ this.state.tweetsNum }</strong>
					</div>
					<div className="Seguindo">
						<span className="titulo">Seguindo</span>
						<strong className="data">{ this.state.following }</strong>
					</div>
					<div className="Seguidores">
						<span className="titulo">Seguidores</span>
						<strong className="data">{ this.state.followers }</strong>
					</div>
				</div>
			</div>
		)
	}
}

export default App;