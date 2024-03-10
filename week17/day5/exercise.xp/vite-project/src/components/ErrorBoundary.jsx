import React,{Component} from "react";


class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state={
            hasError:false
        }
    }
    componentDidCatch(error, errorInfo) {
        this.setState({
          hasError: true
        });
        console.error('Error caught by ErrorBoundary:', error, errorInfo);
      }
      render() {
        if (this.state.hasError) {
          return <h2>Something went wrong in this component.</h2>;
        }
        return this.props.children;
      }
}

export default ErrorBoundary;