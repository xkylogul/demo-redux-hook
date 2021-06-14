import React,{PureComponent} from 'react'
//import store from '../store'
//import {addAction,bannerAction,recommendAction} from '../store/actionCreators.js'
import {addAction,getHomeMultidataAction} from '../store/actionCreators.js'
//import {connect} from '../utils/connect'//不适用自己封装的connect
import {connect} from 'react-redux'
//import axios from 'axios'


 class About1 extends PureComponent {
    /*  constructor(props){
           super(props)
     } */
     
   render(){
    return (
        <div>
            <div>这是about1组件 </div>
            <button onClick={e=>this.props.decreated(2)}>+</button>
            <div>{this.props.counter}</div>
            <ul>
                {this.props.banner.map((item,key)=>{
                    return(
                        <li key={item.acm}>{item.title}</li>
                    ) 
                })}
            </ul>
            <ul>
                {this.props.recommend.map((item,key)=>{
                    return(
                        <li key={item.acm}>{item.title}</li>
                    ) 
                })}
            </ul>
        </div>
    )
   } 
   componentDidMount(){
/* axios({
    url:'http://123.207.32.32:8000/home/multidata'
}).then(res=>{
  
    const data = res.data.data
    console.log(data)
    this.props.ChangeBanner(data.banner.list)
    this.props.ChangeRecommend(data.recommend.list) 

}) */
this.props.getHomeMultidata()
   } 
        }
 const mapStateToProps = state=>{
     return{
         counter:state.counter,
         banner:state.banner,
         recommend:state.recommend
     }
 }
 const mapDispatchToProps = dispatch=>{
     return{
         decreated:function(num){
             dispatch(addAction(num))
         },
      /*    ChangeBanner:function(banner){
             dispatch(bannerAction(banner))
         },
         ChangeRecommend:function(recommend){
             dispatch(recommendAction(recommend))
         } */
         getHomeMultidata(){
             dispatch(getHomeMultidataAction)
         }
     }
 }
   

export default connect(mapStateToProps,mapDispatchToProps)(About1)
