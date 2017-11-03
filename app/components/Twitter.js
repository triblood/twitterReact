import React from 'react'
import InfoUser from './infoUser'

export default () => ( 
    <div className = "container">
		<h1>Teste</h1>
		<div className="row">
			<div className="col-md-2 bio">
				<InfoUser />
			</div>
			<div className="col-md-8 tweets">teste2</div>
			<div className="col-md-2 links">teste3</div>
		</div>
    </div>
)