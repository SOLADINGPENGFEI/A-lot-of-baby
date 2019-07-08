import request from '../utils/request';

export let login =params=>{
    return request.post("/api/open/init/app/1")
}
export let navTab=params=>{
    return request.post("/api/open/product/category/query/1.0.0")
}