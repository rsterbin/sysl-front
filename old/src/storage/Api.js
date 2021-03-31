import axios from 'axios';

const BASE_BACKEND = process.env.NODE_ENV === 'production' ? '' : 'http://localhost2:3001';
const BASE_URL = BASE_BACKEND + '/api/v1.0';

class Api {

    // This will be created when it's needed
    axiosInstance = null;

    getAxios() {
        if (this.axiosInstance === null) {
            this.axiosInstance = axios.create({
                baseURL: BASE_URL,
            });
        }
        return this.axiosInstance;
    }

    getGameData(slug, uuid) {
        return this.getAxios().get(`/games/${slug}/${uuid}`);
    }

}

export default new Api();
