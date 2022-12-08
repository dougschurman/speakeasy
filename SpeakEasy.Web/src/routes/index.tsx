import Lobby from "./lobby/Lobby";
import * as React from "react";
import Header from "./Header";
import {
  HubConnection,
  HubConnectionBuilder,
  LogLevel,
} from "@microsoft/signalr";

export default function Root() {
  const [connection, setConnection] = React.useState<HubConnection>();

  const joinRoom = async (user: string, room: string) => {
    try {
      const connection = new HubConnectionBuilder()
        .withUrl("https://http://localhost:5187/chat")
        .configureLogging(LogLevel.Information)
        .build();

      connection.on("ReceiveMessage", (user: string, message: string) => {
        console.log(message);
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
      <Lobby joinRoom={joinRoom} />
    </>
  );
}
