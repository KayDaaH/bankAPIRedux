import Axios from "./caller.service";

/**
 * Retrieves user data from the server based on provided credentials.
 * @param {Object} credentials - User login credentials.
 * @returns {Object|boolean} - User data object if successful, otherwise false.
 */
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
  } else {
    return false;
  }
};

/**
 * Resets the user data.
 * @returns {Object} - Empty user data object.
 */
const resetUserData = () => {
  return {
    token: null,
    firstName: null,
    lastName: null,
    userId: null,
  };
};

/**
 * Updates the user data on the server.
 * @param {Object} credentials - Updated user data.
 * @param {string} token - User authentication token.
 */
const userEditDb = async (credentials, token) => {
  await Axios.put("/profile", credentials, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export { getUserData, resetUserData, userEditDb };
