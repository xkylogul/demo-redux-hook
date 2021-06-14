import {ADD_ACTION,SUB_ACTION,CHANGE_BANNER,CHANGE_RECOMMEND} from './constants.js'
const initState = {
    counter:0,
    banner:[],
    recommend:[]
}
function reducer(state=initState,action){
 switch(action.type){
     case ADD_ACTION :
         return{
             ...state,counter:state.counter+action.num
         }
    case SUB_ACTION :
        return{
            ...state,counter:state.counter-action.num
        }
    case CHANGE_BANNER :
        return{
            ...state,banner:action.banner
        }
        case CHANGE_RECOMMEND :
            return{
                ...state,recommend:action.recommend
            }
        default:
            return state
 }
}
export default reducer