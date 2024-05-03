import "./App.css";
import React from "react";
import axios from "axios";
import { DivProps, getName, isLogin } from "./utils/utils.ts";
import ChatHeader from "./components/chatting/ChatHeader.tsx";
import ChattingInput from "./components/chatting/ChattingInput.tsx";

interface Chatting {
  name: string;
  message: string;
}

interface AppState {
  chattings: Chatting[];
}

class App extends React.Component<DivProps, AppState> {
  socket: WebSocket;
  name: string;

  constructor(props: DivProps) {
    super(props);
    this.name = getName();
    this.state = {
      chattings: [],
    };
    this.socket = new WebSocket("ws://localhost:3001/ws");
    this.socket.onmessage = (event) => {
      console.log(event.data);
      this.setState({
        chattings: [...this.state.chattings, ...JSON.parse(event.data)],
      });
    };
  }

  getData = async () => {
    const data = await axios.get("/api").then((res) => res.data);
    return data;
  };

  componentDidMount() {}

  render() {
    if (!isLogin()) {
      window.location.href = "/login";
    }

    return (
      <div>
        <ChatHeader name={this.name}/>
        <main className="container mx-auto h-[80vh] overflow-y-scroll" style={{"scrollbarWidth":"none"}}>
          {this.state.chattings.map((chatting, index) => {

            const color = this.name === chatting.name ? "bg-green-400" : "bg-cyan-300";

            return (
              <div key={index.toString()} className="my-10">
                <span className={`rounded-lg ${color} p-2`}>
                  {chatting.name}: {chatting.message}
                </span>
              </div>
            );
          })}
        </main>
        <ChattingInput name={this.name} socket={this.socket}/>
      </div>
    );
  }
}
export default App;
