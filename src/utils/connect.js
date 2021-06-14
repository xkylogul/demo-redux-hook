import React,{PureComponent} from 'react'
//import store from '../store' //需要分离store
import {CreateContext} from './context'

export function connect(mapStateToProps,mapDispatchToProps){
    return function enChanceHOC(WrappedComponent){
        class EnchanceComponent extends PureComponent{
            constructor(props,context){
                super(props,context)
                this.state={ createContext:mapStateToProps(context.getState())}
           
            }
           componentDidMount(){
               this.unSubscribe = this.context.subscribe(()=>{
                   this.setState({
                      CreateContext:mapStateToProps(this.context.getState())
                   })
               })
           }
           componentWillUnmount(){
               this.unSubscribe()
           }
           render(){
               return <WrappedComponent
               {...this.props}
               {...mapStateToProps(this.context.getState())}
               {...mapDispatchToProps(this.context.dispatch)}
               />
           }
        }
     
       /*  Consumer 只是能在render进行渲染
        要想在在方法里拿到context， 使用context传来的数据的组件里写一个 contextType的静态属性
        static contextType=context
        static 就是定义静态的方法或者属性，这里相当于给Child定义了一个静态属性contextType，它的值是context
        设置后， 就可以用 this.context拿到context传过来的数据
         */
        EnchanceComponent.contextType=CreateContext
        return EnchanceComponent
    }
}