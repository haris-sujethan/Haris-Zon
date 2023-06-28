import axios from "axios";

const instance = axios.create({

    baseURL: 'https://us-central1-clone-7e415.cloudfunctions.net/api'
});

export default instance;

//'http://localhost:5001/clone-7e415/us-central1/api'