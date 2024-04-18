import { apiUrl } from "@/lib";
import axios from "axios";
import Cookies from "js-cookie";

const getHeaders = () => {
  const token = Cookies.get("jwt_token");

  if (token) {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  } else {
    return {
      "Content-Type": "application/json",
    };
  }
};

const POST = async (url = "", body = {}) => {
  try {
    const response = await axios.post(apiUrl + url, body, {
      headers: getHeaders(),
    });
    return response;
  } catch (error) {
    console.log(error);
    return error?.response?.data?.message;
  }
};

export { POST };
