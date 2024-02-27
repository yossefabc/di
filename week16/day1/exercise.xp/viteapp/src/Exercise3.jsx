import React from "react";
import  './Exercise.css'
const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};
class Exercise extends React.Component{
  
    render(){
        return(<div>
        <h1 style={style_header}>this is a header</h1>
        <p className="para">this is a paragragh</p>
        <a href="#">this is a link</a>
        <form>
        <input />
            
        </form>
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cnn.com%2F2023%2F06%2F21%2Fsport%2Fcristiano-ronaldo-scores-on-record-breaking-200th-portugal-appearance-spt-intl%2Findex.html&psig=AOvVaw3irYrsFwTYQBWY1if2g3PS&ust=1709109493813000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNjnr5OPy4QDFQAAAAAdAAAAABAE"></img>
          <ul>
            <li>orange</li>
            <li>apple</li>
            <li>banana</li>
          </ul>
        </div>
        )
    }
}

export default Exercise;