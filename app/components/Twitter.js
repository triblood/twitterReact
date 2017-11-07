import React from 'react'
import InfoUser from './infoUser'
import TweetLine from './tweetsLine'

export default () => ( 
    <div className = "container">
		<h1>Teste</h1>
		<div className="row">
			<div className="col-md-2 bio">
				<InfoUser />
			</div>
			<div className="col-md-8 tweets">
				<TweetLine />
			</div>
			<div className="col-md-2 links">teste3</div>
		</div>
    </div>
)