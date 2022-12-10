# speakeasy

ASP.Net Core 7 app with SignalR running seperately from a React-Typescript front end using MaterialUI.

Room specific chat app where users can enter a name and room code to speak to other people in the room with real time updates from SignalR.

To run in dev environment:

1. Clone Repo
2. cd SpeakEasy.Api
3. dotnet restore
4. cd ./SpeakeEasy.Web
5. yarn / npm install
6. yarn dev:start
7. Run the debugger for the backend
8. Navigate to https://localhost:9000
