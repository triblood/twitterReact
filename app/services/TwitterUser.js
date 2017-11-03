var axios = require('axios');

var TwitterUserServices = {
	getUserInfo: ()=> {
		return axios.get('http://localhost/sandbox/twitter/getInfoUser.php')
		.then((arr) => {
			return{
				info: arr
			}
		})
	}
}

module.exports = TwitterUserServices;