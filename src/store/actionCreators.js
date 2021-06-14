import axios from 'axios'
import {ADD_ACTION,SUB_ACTION,CHANGE_BANNER,CHANGE_RECOMMEND} from './constants.js'
/* export function addAction(num){
    return{
        type:'ADD_ACTION',
        num
    }
} */
/* export const addAction=(num)=>{
    return{
        type:'ADD_ACTION',
        num 
    }
} */
export const addAction=num=>({
    type:ADD_ACTION,
        num 
})
export const subAction = num=>({
    type:SUB_ACTION,
    num
})
export const bannerAction = banner=>({
    type:CHANGE_BANNER,
    banner
})
export const recommendAction = recommend=>({
    type:CHANGE_RECOMMEND,
    recommend
})
//redux-thunk中定义的函数
export const getHomeMultidataAction = (dispatch,getState)=>{//state可能依赖其他state的值，所以通过getState拿到
    axios({
        url: "http://123.207.32.32:8000/home/multidata",
      }).then(res=>{
          const data = res.data.data
          dispatch(bannerAction(data.banner.list))
          dispatch(recommendAction(data.recommend.list))
      })
}