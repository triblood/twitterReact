var React = require('react');
var createReactClass = require('create-react-class');
var TwitterUser = require('../services/TwitterUser');

TwitterUser.getUserInfo().then(function(response){
	console.log(response.data);
	response.data.name
});


var infoUser = createReactClass({
	getInitialState: () => {
		return{
			nome:'',
			bgImg: '',
			imgUsr: '',
			nick:'',
			tweets: '',
			following: '',
			followers: ''
		};
	},
	getData: () => {
		TwitterUser.getUserInfo().then(function(e){
			console.log(e.data.name);
			this.setState({nome: e.data.name});
		});
	},
	render: () => {
		return(
			<div className="Info">
				<div className="imgUser"></div>
				<div className="dataUser">
					<div className="nameUser">{this.state.nome}</div>
					<div className="nickUser"></div>
				</div>
				<div className="otherInfos">
					<div className="Tweets">
						<span className="titulo">Tweets</span>
						<strong className="data"></strong>
					</div>
					<div className="Seguindo">
						<span className="titulo">Seguindo</span>
						<strong className="data"></strong>
					</div>
					<div className="Seguidores">
						<span className="titulo">Seguidores</span>
						<strong className="data"></strong>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = infoUser;