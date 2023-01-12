import axios from "axios";


export const instance = axios.create({
    baseURL: 'https://api.spaceflightnewsapi.net/v3/articles?_limit=6',
});