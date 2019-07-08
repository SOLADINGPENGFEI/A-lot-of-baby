import request from '@/utils/request.js';

//轮播大牌化妆品
export let dapai=(parmars)=>{
    return request.post('https://upapi.jinaup.com/api/open/sepcial/query/1.0.0?siid='+parmars)
} 