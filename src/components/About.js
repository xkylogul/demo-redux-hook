
import React, { PureComponent } from 'react'
import store from '../store'
import {addAction} from '../store/actionCreators.js'



export default class About extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            counter:store.getState().counter
        }
    }
    render() {
        return (
            <div>
                <div>这是abouty组件 </div>
                <button onClick={e=>{this.createAdd()}}>+</button>
                <div>{this.state.counter}</div>
            </div>
        )
    }
    createAdd(){
    store.dispatch(addAction(5))
    } 
    componentDidMount(){
     
        //发布订阅
        this.unsubscribe = store.subscribe(()=>{
            this.setState({
                counter:store.getState().counter
            })
        })
      
    }
    componentWillUnmount(){
        //销毁订阅
        this.unsubscribe()
    }
}
