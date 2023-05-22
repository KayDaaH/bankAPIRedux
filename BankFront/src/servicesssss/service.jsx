import axios from "axios";
// Default
axios.defaults.baseURL = "http://localhost:3001/api/v1/user";

const getToken = (email, password) => {
  axios
    .post("/login", {
      email: email,
      password: password,
    })
    .then((res) => res.data.body.token);
};

export { getToken };
