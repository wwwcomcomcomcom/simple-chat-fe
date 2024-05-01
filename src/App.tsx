import './App.css'
import React from "react";
import axios from "axios";
import {DivProps} from "./utils.ts";

interface AppState {
  data: string;
}

class App extends React.Component<DivProps,AppState> {
  constructor(props: DivProps) {
    super(props);
    this.state = {data: 'Loading...'};
  }

  getData = async () => {
    const data = await axios.get('/api').then(res=> res.data);
    return data;
  };

  componentDidMount() {
    this.getData().then(data => {
      this.setState({data: data.toString()});
    });
  }

  render() {
    return <div>
      data from backend {this.state.data}
    </div>
  }
}
export default App;