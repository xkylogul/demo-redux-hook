import { action } from 'commander'
import React,{useState,useEffect,useContext,useReducer} from 'react'
//useEffect()相当于componentWillUnMount()和componentDidMount()组合钩子函数
import { UserContext,NameContext } from '../App'

function reducer(state,action){
    switch(action.type){
        case 'decreate':
            return{...state,count:state.count+1}
            case 'increate':
                return{...state,count:state.count-1}
                default:
                  return  state

    }
}

export default function EffectHooks(props) {
    const [count,setCount] =useState(1)
    const name = useContext(NameContext)
    const user = useContext(UserContext)
    const [state,dispatch] = useReducer(reducer,{count:0})
    console.log(name,user)
    //可以写多个useEffect
    useEffect(()=>{
        console.log('我发布了订阅')//componentDidMount()
        return()=>{
         console.log('收到发布的订阅')//组件卸载时调用componentWillUnMount()
        }
    },[count])//第二个参数必须时数组：数组含义：传入空数组代表谁都不依赖，不会重新执行，如何有值：count就会执行
    return (
        <div>
            <div>{count}</div>
            <button onClick={e=>{setCount(count+1)}}>点击</button>
            <button onClick={e=>dispatch({type:'increate'})}>+1</button>
            <button onClick={e=>dispatch({type:'decreate'})}>-1</button>
            <div>render:{state.count}</div>
        </div>
    )
}
