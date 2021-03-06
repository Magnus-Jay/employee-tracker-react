import './App.css';
import API from './utils/api'
import React from "react";
import EmployeeTableBuilder from './components/EmployeeTableBuilder';


class App extends React.Component {
  state = {
    on: false,
    dataBackUp: [],
   searchTerm: "",
   data: []
  }

componentDidMount = () => {
      API.getEmployee().then(res => {
        // console.log(res);
        this.setState({ data: res.data.results,  dataBackUp: res.data.results  })
        console.log({data:res.data});
      }).catch(err => {
          console.log(err);
        })
    
    }
    onClickHandler = () => {
      this.setState({ on: !this.state.on })
    }
  
    handleFormSubmit = event => {
      event.preventDefault();
      this.filterUpdated(this.state.data);
    }
  
    nameFilter = () => {
      this.state.data.filter(function (data) {
        return this.state.filter === "n"
      })
    }
  
    handleInputChange = (e) => {
      let { value } = e.target
      value = value.toLowerCase()
      if (value) {
        const filtered = this.state.data.filter(user => (user.name.first.toLowerCase().includes(value) || (user.name.last.toLowerCase().includes(value))))
        this.setState({ data: filtered, searchTerm: value })
      } else {
        this.setState({ data: [...this.state.dataBackUp], searchTerm: value })
      }
    }
  
   
    sortNames = () => {
      const sortedNames = this.state.data.sort((a, b) => {
        if (a.name.first > b.name.first) {
          return 1;
        }
        if (a.name.first < b.name.first) {
          return -1;
        }
        return 0;
      })
      this.setState(prevState => ({
        ...prevState,
        data: sortedNames
      }))
    }
  
    buttonPress = () => {
      this.sortNames()
      console.log(this.state.data)
    }
  
        render() {
          return (
            <div>
              <input name="testInput" onChange={this.handleInputChange} value={this.state.searchTerm} placeholder="Search" />
              <EmployeeTableBuilder data={this.state.data} />
              <button className="btn btn-secondary" id="filterBtn" onClick={this.buttonPress}>Sort Names</button>
              <div className="searchArea col-sm-4 col-md-4 col-lg-4"></div>
            </div >
            
          )
        }
      }
  export default App;

  