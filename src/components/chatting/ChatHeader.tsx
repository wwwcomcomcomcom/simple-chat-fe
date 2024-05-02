import React from "react";
import { GoPerson } from "react-icons/go";
import { DivProps, logout } from "../../utils/utils";

interface ChatHeaderState {
  name: string;
}

interface ChatHeaderProps extends DivProps {
  name?: string;
}

class ChatHeader extends React.Component<ChatHeaderProps, ChatHeaderState>{

  constructor(props: ChatHeaderProps) {
    super(props);
    this.state = { name: props.name || "Unknown"};
  }

  onLogout(){
    logout();
    window.location.href = '/login';
  }

  render() {
    return (
      <header className="sticky top-0 z-10 bg-white shadow-md dark:bg-gray-800">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <div className="mr-4 rounded-full">
              <GoPerson className="w-8 h-8 text-gray-500 dark:text-gray-400" />
            </div>
            <div>
              <h1 className="text-lg font-medium text-gray-900 dark:text-white">{this.state.name}</h1>
            </div>
          </div>
          <button
            type="button"
            className="rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            onClick={this.onLogout}
          >
            Logout
          </button>
        </div>
      </header>
    );
  }
}

export default ChatHeader;