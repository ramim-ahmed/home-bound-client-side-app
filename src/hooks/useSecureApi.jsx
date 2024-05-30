import axios from "axios";

const secureApi = axios.create({
  baseURL: "http://localhost:8000/api/v1",
});
export default function useSecureApi() {
  return secureApi;
}
