var axios = require('axios');

var TwitterUserServices = {
	getUserInfo: ()=> {
		return axios.get('http://localhost/sandbox/twitter/getInfoUser.php')
		.then((arr) => {
			this.setState(
				{
					
				}
			)
		})
	}
}

module.exports = TwitterUserServices;