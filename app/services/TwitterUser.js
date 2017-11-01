var axios = require('axios');

var TwitterUserServices = {
	getUserInfo: function() {
		return axios.get('http://localhost/sandbox/twitter/getInfoUser.php');
	}
}

module.exports = TwitterUserServices;