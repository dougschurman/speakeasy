import Lobby from "./lobby/Lobby";
import * as React from "react";
import Header from "./Header";
import {
  HubConnection,
  HubConnectionBuilder,
  LogLevel,
} from "@microsoft/signalr";
import Chat from "./chat/Chat";

export interface Message {
  user: string;
  text: string;
}

export default function Root() {
  const [connection, setConnection] = React.useState<HubConnection>();
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [users, setUsers] = React.useState<string[]>([]);
  const [currentUser, setCurrentUser] = React.useState<string>();
  const [room, setRoom] = React.useState<string>();

  const joinRoom = async (user: string, room: string) => {
    try {
      const connection = new HubConnectionBuilder()
        .withUrl("http://localhost:5187/chat")
        .configureLogging(LogLevel.Information)
        .build();

      connection.on("UsersInRoom", (userList: string[]) => {
        setUsers(userList);
        console.log(userList);
        console.log(users);
      });

      connection.on("ReceiveMessage", (user: string, text: string) => {
        setMessages((prev) => [...prev, { user, text }]);
      });

      connection.onclose((e) => {
        setConnection(null);
        setMessages([]);
        setUsers([]);
      });

      await connection.start();
      await connection.invoke("JoinRoom", { user, room });
      setRoom(room);

      setConnection(connection);
    } catch (e) {
      console.log(e);
    }
  };

  const closeConnection = async () => {
    try {
      await connection.stop();
    } catch (e) {
      console.log(e);
    }
  };

  const sendMessage = async (message: string) => {
    try {
      await connection.invoke("SendMessage", message);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Header
        connection={connection}
        closeConnection={closeConnection}
        users={users}
      />
      {!connection ? (
        <Lobby
          joinRoom={joinRoom}
          user={currentUser}
          setUser={setCurrentUser}
        />
      ) : (
        <Chat
          messages={messages}
          sendMessage={sendMessage}
          currentUser={currentUser}
          room={room}
        />
      )}
    </>
  );
}
