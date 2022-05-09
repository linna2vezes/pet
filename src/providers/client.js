import axios from "axios";

//  const apiURL = process.env.REACT_APP_API_URL;
const apiURL = "https://otterwise-fake-api.herokuapp.com"


const instance = axios.create({
  baseURL: apiURL,
});

instance.interceptors.request.use((config) => {
  const user = localStorage.getItem("user");

  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: user ? `Bearer ${JSON.parse(user).token}` : "",
    },
  };
});

export default instance;
