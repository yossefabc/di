import React from "react";
import { Component } from "react";

class Color extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            favoriteColor: 'red',
          };
          
        }
        shouldComponentUpdate(nextProps, nextState){
            return true;
        }
        componentDidUpdate(prevProps, prevState) {
            console.log('after update');
          }
        
          getSnapshotBeforeUpdate(prevProps, prevState) {
            console.log('in getSnapshotBeforeUpdate');
            // Return null or a value to be passed to componentDidUpdate
            return null;
          }
        
          handleClick = () => {
            // Change favoriteColor to "blue"
            this.setState({ favoriteColor: 'blue' });
          };
        
          render() {
            return (
              <div>
                <h1 style={{ color: this.state.favoriteColor }}> {this.state.favoriteColor}</h1>
                <button onClick={this.handleClick}>Change Color to Blue</button>
              </div>
            );
          }
    }

    export default Color;