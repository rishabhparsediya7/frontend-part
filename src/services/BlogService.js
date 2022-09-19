import { myAxios } from "./helper" ;

export const getData = () => {
    return myAxios
        .get("/blog/post/")
        .then((response)=>response.data)
}

export const pushData=(blog)=>{
    console.log(blog)
    return myAxios.post("/blog/admin/create", blog)
        .then((response)=>response.data)
}