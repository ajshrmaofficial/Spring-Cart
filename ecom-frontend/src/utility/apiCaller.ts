import axios from "axios";
import { backendUrl } from "./constants";

const backendClient = axios.create({
  baseURL: backendUrl,
});

type apiCallerProps = {
  type: "GET" | "POST";
  endpoint:
    | "/api/"
    | "/api/product/getProducts"
    | `/api/product/getProducts/${number}`
    | `/api/product/searchProducts?keyword=${string}`
    | "/api/auth/login"
    | "/api/auth/register";
  payload?: unknown;
};

export const apiCaller = async ({
  type,
  endpoint,
  payload,
}: apiCallerProps) => {
  const token = localStorage.getItem("token");

  if (token) {
    backendClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  try {
    let res;
    if (type == "GET") {
      res = await backendClient.get(endpoint);
    } else if (type == "POST") {
      res = await backendClient.post(endpoint, payload);
    } else{
      throw new Error(`Unsupported HTTP method used: ${type}`); 
    }
    
    return res.data;
    
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Request failed with status ${error.message}`);
    } else return "Unexpected error" + error;
  }
};
