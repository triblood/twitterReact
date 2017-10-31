var axios = require('axios');

var TwitterUserServices = {
	getUserInfo: function() {
		return axios.get('https://api.twitter.com/1.1/account/verify_credentials.json', {
			headers: {
				'Authorization': {
					oauth_consumer_key: '',
					oauth_token: '',
					oauth_signature_method: '',
					oauth_timestamp: '',
					oauth_nonce: '',
					oauth_version: '1.0',
					oauth_signature:''
				}
			}
		});
	}
}

module.exports = TwitterUserServices;