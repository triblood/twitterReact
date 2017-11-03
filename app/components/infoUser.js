import React from 'react'
import TwitterUser from '../services/TwitterUser'

TwitterUser.getUserInfo().then(function(response){
	console.log(response.data.name);
});


export default () => (
	<div className="Info">
		<div className="imgUser"></div>
		<div className="dataUser">
			<div className="nameUser"></div>
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