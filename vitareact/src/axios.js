import axios from 'axios';
import { API } from './Backend';

const baseURL = API;

const axiosInstance = axios.create({
	baseURL: baseURL,
	timeout: 60000,
	headers: {
		Authorization: 'Bearer ' + localStorage.getItem('access_token'),
		'Content-Type': 'application/json',
		accept: 'application/json',
	},
});

axiosInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	async function (error) {
		if (typeof error.response === 'undefined') {
			alert(
				'A server/network error occurred. ' +
					'Looks like CORS might be the problem. ' +
					'Sorry about this - we will get it fixed shortly.'
			);
			return Promise.reject(error);
		}

		return Promise.reject(error.response);
	}
);

export default axiosInstance;
