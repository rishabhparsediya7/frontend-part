import axios from "axios" ;

export const BASE_URL = "https://spring-boot-react-blog.herokuapp.com";

export const myAxios = axios.create({
    baseURL : BASE_URL
});