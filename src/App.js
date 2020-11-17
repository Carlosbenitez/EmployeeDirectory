import Table from './components/table'
import Search from './components/searchbar'
import Header from './components/header'
import { Component } from "react"
import api from './utils/api';


class App extends Component {
  state={
    employees:[]
  }
  componentDidMount() {
    api.getRandomPeople().then(response => {
      this.setState({
        employees:response.data.results
      })
    })
  }
  render() {
    return (
      <>
        <Header />
        <Search />
        <Table employees={this.state.employees}/>
      </>
    );
  }
}

export default App;