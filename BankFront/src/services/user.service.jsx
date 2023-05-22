import Axios from "./caller.service";

const getUserData = async (credentials) => {
  const responseLogin = await Axios.post("/login", credentials);
  const token = responseLogin.data.body.token;
  if (token) {
    const responseData = await Axios.post("/profile", null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const userData = {
      token: token,
      firstName: responseData.data.body.firstName,
      lastName: responseData.data.body.lastName,
      userId: responseData.data.body.id,
    };
    return userData;
  }
  return false;
};

const resetUserData = () => {
  return {
    token: null,
    firstName: null,
    lastName: null,
    userId: null,
  };
};

const userEditDb = async (credentials, token) => {
  console.log(JSON.stringify(credentials));
  await Axios.put("/profile", credentials, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export { getUserData, resetUserData, userEditDb };
