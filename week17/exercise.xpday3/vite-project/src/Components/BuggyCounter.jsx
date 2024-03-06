import React from "react";

class BuggyCounter extends React.Component{
    constructor(){
        super();
        this.state={
            counter:0
        }
    }
    handleClick=()=>{
        this.setState({counter:this.state.counter+1});
    }
    shouldComponentUpdate(nextProps, nextState) {
       
        return true;
      }
    render(){
        if(this.state.counter===5){
            throw new Error('i crashed');
        }
        return(
            <div>
                <h1>My Favorite Color Is Red</h1>
            <h1>Counter: {this.state.counter}</h1>
            <button onClick={this.handleClick}>Increment</button>
          </div>
        )
    }
}

export default BuggyCounter;