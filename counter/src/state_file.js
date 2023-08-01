import React from 'react';


class Counter extends React.Component {
    constructor(){
        super();
        this.state= {
            count:1
        }
        
    }
   increment_func = () => {
    this.setState((lastState) => ({
        count: lastState.count + 1,
      }));
    };
    decrement_func = () => {
        this.setState((lastState) => ({
            count: lastState.count - 1,
          }));
        };
      
  
   
    render(){
        return(
            <div>
              <div className='write'>{this.state.count}</div>
              <button onClick={this.increment_func}  className='typeofbutton'>↑</button>
              <button onClick={this.decrement_func}  className='typeofbutton'>↓</button>
            </div>
        )
    }
}
export default Counter 