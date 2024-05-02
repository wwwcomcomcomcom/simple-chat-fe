import React from "react";
import { DivProps } from "../../utils/utils";

interface ChattingInputProps extends DivProps {
  socket: WebSocket;
  name: string;
}

interface ChattingInputState {
  message: string;
}

class ChattingInput extends React.Component<ChattingInputProps,ChattingInputState> {
  constructor(props:ChattingInputProps) {
    super(props);
    this.state = {
      message: "",
    };
  }

  sendMessage = () => {
    this.props.socket.send(
      JSON.stringify({
        name: this.props.name,
        message: this.state.message,
      })
    );
    this.setState({ message: "" });
  };

  render() {
    return (
      <div className="flex justify-center space-x-5">
        <input
          className="border border-gray-300 rounded-md w-1/2 p-2"
          type="text"
          value={this.state.message}
          onChange={(e) => this.setState({ message: e.target.value })}
        />
        <button
          onClick={this.sendMessage}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
        >Send</button>
      </div>
    );
  }
}
export default ChattingInput;