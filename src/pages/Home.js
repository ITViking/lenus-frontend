import React from "react";
import '../App.css';
import EntriesContainer from '../components/EntriesContainer';
import LineChart from '../components/LineChart';
import { Link } from 'react-router-dom'

export default class Weight extends React.Component {
  constructor() {
    super();
    
    this.state = {
      weightList: []
    };
  }
  
  componentDidMount() {
    fetch("http://localhost:3001/weight")
    .then(res => res.json())
    .then((result) => {
      this.setState({
        weightList: result
      });
    });
  }  
  render() {
    const weightList = this.state.weightList;
    return (
      <div className="App">
        <button id="hamburger-menu">
          <div class="menu-bar"></div>
          <div class="menu-bar"></div>
          <div class="menu-bar"></div>
        </button>
        <main>
          <LineChart dataEntries={weightList} />
          <Link className="primary-button" to="/weight/new">Add weigh in</Link>
          <EntriesContainer dataEntries={weightList} />
        </main>
      </div>
    )
  };
}
