import './App.css';
import API from './utils/API'
import React from "react";

class App extends React.Component {
  state = {
   data: [],
   search: ""
  }

componentDidMount = () => {
      API.search().then(res => {
        console.log(res);
        this.setState({ data: res.data })
        console.log(data.res.data);
      }).catch(err => {
          console.log(err);
        })
    
    }
        // .then(res => this.setState({ result: res.data }))
        // .catch(err => console.log(err));

  render() {
    return (
      <div>Test</div>
    )
  }
}

  export default App;

  