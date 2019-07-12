import {navTab,navData,navSort} from '../../Api/index'
// console.log('aaa',navTab)
const state = {
    navlist:[],//导航数据
    navI:-1,//加高亮
    flag: false,//改变状态布尔值
    getNavChildsId:null,//选中导航的id
    
}
const actions = {
    //有子类的导航
    async navtab({commit}){
        const data = await navTab()
        commit('getnavtab',data.result)
     },
      //没有子类的导航
     async DataNav({commit}){
        const data = await navData()
        commit('getnavtab',data.result)
     },
     //获取导航列表信息
     async navListSort({commit,state},params){
        // const data=await navSort();
         params.cid=state.getNavChildsId,
         params.pageIndex=1
        console.log("params...",params)
     }
}
const mutations={
    getnavtab(state,payload){
        state.navlist = payload; 
    },
    setNavI(state,payload){
        state.navI=payload
    },
    getFlag(state,payload){
        state.flag=payload
    },
    getNavChildsId(state,payload){
        state.getNavChildsId=payload
    },
    // getNavChilds(state){
    //     console.log(1121)
    //    
    // }
}
const getters={
    getNavChilds(state){
        // console.log(state.getNavChildsId)
         if(state.navI!=-1){
            
            return state.navlist.filter(item=>item.cid===state.getNavChildsId)
         }
    }
}
export default{
    namespaced:true,
    state,
    actions,
    mutations,
    getters
}