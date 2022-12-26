import axios from 'axios';

const BASE_URL = "http://localhost:5000/api";
const Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjI5NmRjY2JmYzNjZTAyNGRhODNlNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDEzMzExNiwiZXhwIjoxNjYwMzkyMzE2fQ.TMBcTYhOKhsGTqHgVY6fAGoX9UCc2rC100JwvzoSqhE";

export const publicRequest = axios.create({
    baseURL:BASE_URL,
});
export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${Token}`},
});
