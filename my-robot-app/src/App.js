import React, {Component} from 'react';
import "./App.css";
import { CardList } from './components/card-list';
import { SearchBox } from './components/search-box';

export default class App extends Component {
  constructor() {
    super();
  
    
    this.state = {
      robots: [],
      searchField: ""
    }
  }
  
  onSearchChanged = event => {
    this.setState({searchField: event.target.value});
  }
  componentDidMount()　{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(responce=>responce.json())
    .then(data => this.setState({ robots: data }))
  }
  render(){

    const {robots, searchField}=this.state;

    const filteredRobots = robots.filter(robot => robot.name.includes(searchField));

    return(
    <div className="App">
      <h1>Robot search</h1>
      <SearchBox onSearch={this.onSearchChanged} />
      <CardList robots = {filteredRobots}/>
    </div>
  );
  }
}
