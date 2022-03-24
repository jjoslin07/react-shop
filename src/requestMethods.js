import axios from "axios";

const BASE_URL = "http://localhost:5001/api/";
const TOKEN =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzE0ZDZlNzBkOGUyOWUzNDczODk0OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODE0MzkwMSwiZXhwIjoxNjQ4NDAzMTAxfQ.kDOT5Zf5INDG0ZfdUaX7hVsZOeokfWX8pO5p_s6sEsk";

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});
export const userRequest = axios.create({
	baseURL: BASE_URL,
	header: { token: `Bearer ${TOKEN}` },
});
