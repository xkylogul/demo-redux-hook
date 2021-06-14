
import React from 'react'
//import store from '../store'
import {subAction} from '../store/actionCreators.js'
//import {connect} from '../utils/connect'
import {connect} from 'react-redux'


 function Home1(props) {
   
        return (
            <div>
                <div>这是home1组件 </div>
                <button onClick={e=>props.increated(4)}>+</button>
                <div>{props.counter}</div>
            </div>
        )
        }
      
 const mapStateToProps = state=>{
     return{
         counter:state.counter
     }
 }
 const mapDispatchToProps = dispatch=>{
     return{

         increated:function(num){
     
             dispatch(subAction(num))
         }
     }
 }
   

export default connect(mapStateToProps,mapDispatchToProps)(Home1)
