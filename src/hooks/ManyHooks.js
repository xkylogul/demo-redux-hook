import React ,{useState} from 'react'

export default function ManyHooks() {
    const [stduent,setName] = useState([{name:'dd',age:2},{name:'ff',age:14}])
    function createAdd(index){
 const newStduent = [...stduent]
 newStduent[index].age +=1
 setName(newStduent)
    }
    return (
        <div>
            {
                stduent.map((item,index)=>{
                    return(
                        <li key={index}>姓名：{item.name}年纪：{item.age} <button onClick={e=>createAdd(index)}>甲乙</button></li>
                    )
                })
            }
            <button onClick={e=>setName([...stduent,{name:'夏克玉',age:18}])}>添加</button>
        </div>
    )
}
