import React,{useState,useCallback,useMemo,memo} from 'react'
/**
 * useCallback在什么时候使用?
 * 场景: 在将一个组件中的函数, 传递给子元素进行回调使用时, 使用useCallback对函数进行处理.
 */

const HYbutton = memo((props)=>{//浅层比较
    console.log('button重新渲染'+props.title)
    return <button onClick={props.decreate}>HYbutton</button>
})
function caleCount(count){
    let total = 0
    for(let i =1;i<=count;i++){
        total +=i
    }
    return total
}
export default function MemoCallback() {
    const [count,setCount] = useState(0)

    function inCreate(){
     setCount(count+1)
     console.log('in')
    }
    const deCreate =useCallback(()=>{
        setCount(count-1)
        console.log('de')
    },[count]) //对回调函数进行性能优化
    const decreate = useMemo(()=>{
        return ()=>{
            setCount(count+1)
        }
       
    },[count])//对返回的值进行性能优化
    const tottl = useMemo(()=>{
        return caleCount(count)
    },[count])
    return (
        <div>
            <h2>{caleCount(count)}</h2>
            <h2>计算count值：{tottl}</h2>
            <h2>count:{count}</h2>
            <button onClick={inCreate}>+1</button>
            <button onClick={deCreate}>-1</button>
            <button onClick={decreate}>点击</button>
            <HYbutton title="btn" decreate={decreate}></HYbutton>
        </div>
    )
}
