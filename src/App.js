import Table from './components/table'
import Search from './components/searchbar'
import Header from './components/header'
import { Component } from "react"
import api from './utils/api';


class App extends Component {
  state={
    employees:[],
    original:[],
    search:""
  }
  componentDidMount() {
    api.getRandomPeople().then(response => {
      this.setState({
        employees:response.data.results,
        original:response.data.results,
      })
    })
  }
  handleInputChange=event=>{
    const{name,value}=event.target
    this.setState({
      [name]:value
    })
    const newEmployees=this.state.original.filter(employee=>{
      return employee.name.first.toLowerCase().includes(value.toLowerCase())
      ||
      employee.name.last.toLowerCase().includes(value.toLowerCase())
    })

    this.setState({
      employees:newEmployees
    })

  }

  handleSubmitFirst=event=>{
    const newEmployees=this.state.employees.sort((a,b)=>a.name.first.localeCompare(b.name.first))
    this.setState({
      employees:newEmployees
    })
  }

  handleSubmitLast=event=>{
    const newEmployees=this.state.employees.sort((a,b)=>a.name.last.localeCompare(b.name.last))
    this.setState({
      employees:newEmployees
    })
  }

  render() {
    return (
      <>
        <Header />
        <Search  handleInputChange={this.handleInputChange} search={this.state.search} />
        <Table employees={this.state.employees} handleSubmitFirst={this.handleSubmitFirst} handleSubmitLast={this.handleSubmitLast} />
      </>
    );
  }
}

export default App;