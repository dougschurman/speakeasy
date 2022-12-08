import Lobby from "./lobby/Lobby";
import * as React from "react";
import Header from "./Header";
import {
  HubConnection,
  HubConnectionBuilder,
  LogLevel,
} from "@microsoft/signalr";
import Chat from "./chat/Chat";

export default function Root() {
  const [connection, setConnection] = React.useState<HubConnection>();
  const [messages, setMessages] = React.useState<
    { user: string; message: string }[]
  >([]);

  const joinRoom = async (user: string, room: string) => {
    try {
      const connection = new HubConnectionBuilder()
        .withUrl("http://localhost:5187/chat")
        .configureLogging(LogLevel.Information)
        .build();

      connection.on("ReceiveMessage", (user: string, message: string) => {
        setMessages((prev) => [...prev, { user, message }]);
      });

      await connection.start();
      await connection.invoke("JoinRoom", { user, room });

      setConnection(connection);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Header />
      {!connection ? (
        <Lobby joinRoom={joinRoom} />
      ) : (
        <Chat messages={messages} />
      )}
    </>
  );
}
