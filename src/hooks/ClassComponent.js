import React, { PureComponent } from 'react'

export default class ClassComponent extends PureComponent {
    constructor(props){
        super(props)
        this.state={counter:0}
    }
    render() {
        const {counter} = this.state
        return (
            <div>
                <button onClick={e=>{this.createMnent()}}>+2</button>
                <div>{counter}</div>
            </div>
        )
    }
    createMnent(){
        this.setState({
            counter:this.state.counter+2
        })
    }
}
