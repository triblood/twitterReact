var React = require('react');
var createReactClass = require('create-react-class');
var TwitterUser = require('../services/TwitterUser');

TwitterUser.getUserInfo().then(function(response){
	console.log(response);
});

var Twitter = createReactClass({
	render: function(){
		return (
			<div className="container">
				<h1>Teste</h1>
				<div className="row">
					<div className="col-md-2 bio">teste1</div>
					<div className="col-md-8 tweets">teste2</div>
					<div className="col-md-2 links">teste3</div>
				</div>
			</div>
		);
	}
});

module.exports = Twitter;