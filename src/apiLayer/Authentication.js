import Cookies from "js-cookie";
import { POST } from ".";

const LoginApiHandler = async (payload) => {
  try {
    const res = await POST("config/v1/auths/login", payload);
    console.log(res, "Login Handler");

    if (res?.status === 200) {
      Cookies.set("jwt_token", res?.data?.data?.[0]?.jwt_token);
    }
    return res;
  } catch (error) {
    console.log(error);
  }
};

const logOutHandler = () => {
  Cookies.remove("jwt_token");
  window.location.href = "/";
};

export { LoginApiHandler, logOutHandler };
