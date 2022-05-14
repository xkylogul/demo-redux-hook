import React ,{useRef,PureComponent,forwardRef}from 'react'



class TestBtn1 extends PureComponent{
    render(){
        return <h2>testbtn1</h2>
    }
}
/* function TestBtn2(){ //函数组件没有实例，所以无法使用ref
    return <h2>testbtn2</h2>
} */
const TestBtn2 = forwardRef((props,ref)=>{
    return <h2 ref={ref}>这是一caicaikan代饭</h2>
})

export default function HookRef() {
    const titleRef = useRef()
    const inputRef = useRef()
    const test1 = useRef()
    const test2 = useRef()
    function ChangeDOM(){
        titleRef.current.innerHTML = "Hello World";
      
      inputRef.current.focus()
      console.log(test2.current)
    }
    return (
        <div>
            <h2 ref={titleRef}>refhooks</h2>
            <input ref={inputRef} type="text"></input>
            <TestBtn1 ref={test1}/> 
            <TestBtn2 ref={test2}/> 
            <button onClick={e=>{ChangeDOM()}}>test</button>
        </div>
    )
}
