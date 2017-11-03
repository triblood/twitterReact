import React from 'react'


export default props => (
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