import React, { PureComponent } from 'react'
import store from '../store'
import {subAction} from '../store/actionCreators'

export default class Home extends PureComponent {
  constructor(props){
  super(props);
  this.state={
    counter: store.getState().counter
  }
    }
    render() {
        const {counter} = this.state
        return (
            <div>
               <div> 这是home组件：</div>
               <div>{counter}</div>
               <button onClick={e=>{this.handleMemo()}}>+12</button>
            </div>
        )
    }
    handleMemo(){
        store.dispatch(subAction(2))
    }
    componentDidMount(){
        this.unsubscribe=store.subscribe(()=>{
            this.setState({
                counter:store.getState().counter
            })
        })
    }
    componentWillUnmount(){
        this.unsubscribe()
    }
}
