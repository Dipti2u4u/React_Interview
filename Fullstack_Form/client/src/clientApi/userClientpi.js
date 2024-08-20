import { BASE_URL } from "../axios_config/axiosConfig";
import axios from "axios";

const client = axios.create({
  baseURL: BASE_URL,
});

export const insertUser = (payload) => client.post("/user",payload);

const userClientApi = {
    insertUser,
}
export default userClientApi