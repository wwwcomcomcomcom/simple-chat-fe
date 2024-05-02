import './App.css'
import React from "react";
import axios from "axios";
import {DivProps, getName, isLogin} from "./utils/utils.ts";
import ChatHeader from './components/chatting/ChatHeader.tsx';

interface Chatting {
  name: string;
  message: string;
}

interface AppState {
  chattings: Chatting[];
}

class App extends React.Component<DivProps,AppState> {
  
  socket: WebSocket;

  constructor(props: DivProps) {
    super(props);
    this.state = {
      chattings: []
    };
    this.socket = new WebSocket('ws://localhost:3000/ws');
    this.socket.onmessage = (event) => {
      console.log(event.data);
      this.setState({chattings: [...this.state.chattings,event.data]});
    };
  }

  getData = async () => {
    const data = await axios.get('/api').then(res=> res.data);
    return data;
  };

  componentDidMount() {
    
  }

  render() {

    if (!isLogin()) {
      window.location.href = '/login';
    }


    return <div>
      <ChatHeader name={getName()}/>
      {this.state.chattings.map((chatting) => {
        return <div>{chatting.name}: {chatting.message}</div>
      })}
    </div>
  }
}
export default App;