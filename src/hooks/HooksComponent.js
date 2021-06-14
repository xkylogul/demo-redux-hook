import React ,{useState} from 'react' //rfc

export default function HooksComponent() {
    //useState本身是一个函数，返回的使一个数组，数组的第一个值使初始值
   // 第二个值是改变后的值
  /*   let arr = useState(0)
    const state =arr[0]
    const SetState = arr[1] */
    const [state,SetState] = useState(0)//等价于上面三行代码
    const [name,setName] = useState('xky') 
    return (
        <div>
            <div>当前技术：{state}</div>
            <div>年末y:{name}</div>
           <button onClick={e=>SetState(state+3)}>+3</button> 
         <button onClick={e=>setName('玉树')}>转换</button> 
        </div>
    )
}
