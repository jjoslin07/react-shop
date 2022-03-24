import axios from "axios";

const BASE_URL = "http://localhost:5001/api/";
const TOKEN =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzE0ZDZlNzBkOGUyOWUzNDczODk0OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODA5NjUxNywiZXhwIjoxNjQ4MzU1NzE3fQ.VosBSiVj_BxTZzHacwdru2G7UGRFsasyfkYu4B_TO5Y";

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});
export const userRequest = axios.create({
	baseURL: BASE_URL,
	header: { token: `Bearer ${TOKEN}` },
});
