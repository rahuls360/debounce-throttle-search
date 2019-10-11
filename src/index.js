import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import { debounce, throttle } from 'lodash';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      value: ''
    }
  }

  callAPI = debounce(() => {
    const {value} = this.state;

    console.log('API called')
    axios.get(`https://example.com?q=${value}`)
      .then(res => res.data)
      .catch(err => err)
  }, 500);

  handleChange = (event) => {
    this.setState({value: event.target.value})
    this.callAPI();
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <input onChange={this.handleChange} value={value} placeholder="search..."/>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
