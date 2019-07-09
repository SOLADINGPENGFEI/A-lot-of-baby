import {getSwiper} from '../../Api/index'

// console.log('aa',getSwiper)

const state = {
    getswipe:[]
}

const actions = {
           async swipers({commit}){
                const data = await getSwiper()
                // console.log(data)
                commit('getswipers',data.result)
           }

}


const mutations = {
    getswipers(state,payload){
        //  console.log('....',payload)
         // 赋值给payload
         state.getswipe = payload; 
    }
}




export default{
    namespaced:true,
    state,
    actions,
    mutations,
    
}