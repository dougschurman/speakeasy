using Microsoft.AspNetCore.SignalR;
using SpeakEasy.Api.Models;

namespace SpeakEasy.Api.Hubs
{
    public class ChatHub : Hub
    {
        private readonly string _botUser;
        private readonly IDictionary<string, UserConnection> _connections;

        public ChatHub(IDictionary<string, UserConnection> connections)
        {
            _botUser = "SpeakEasy Bot";
            _connections = connections;
        }

        public override Task OnDisconnectedAsync(Exception exception)
        {
            //get the user connection and remove them from memory
            if (_connections.TryGetValue(Context.ConnectionId, out UserConnection userConnection))
            {
                _connections.Remove(Context.ConnectionId);
                //send the leaving room message
                Clients.Group(userConnection.Room)
                    .SendAsync("ReceiveMessage", _botUser, $"{userConnection.User} has left.");

                //update frontend list of users
                SendConnectedUsers(userConnection.Room);
            }
            return base.OnConnectedAsync();
        }

        public async Task SendMessage(string message)
        {
            //get the user from memory and send the message to their room
            if (_connections.TryGetValue(Context.ConnectionId, out UserConnection userConnection))
            {
                await Clients.Group(userConnection.Room)
                    .SendAsync("ReceiveMessage", userConnection.User, message);
            }
        }

        public async Task JoinRoom(UserConnection userConnection)
        {
            //add the user to the group
            await Groups.AddToGroupAsync(Context.ConnectionId, userConnection.Room);

            //add the user to our static in-memory storage
            _connections[Context.ConnectionId] = userConnection;

            //send the message that a user has joined the room.
            await Clients.Group(userConnection.Room).SendAsync("ReceiveMessage", _botUser, $"{userConnection.User} has joined {userConnection.Room}");

            //update the list of users on the frontend
            await SendConnectedUsers(userConnection.Room);
        }

        public Task SendConnectedUsers(string room)
        {
            //find the users that are in the room
            var users = _connections.Values
                .Where(w => w.Room == room)
                .Select(s => s.User);

            //send the list of users
            return Clients.Group(room).SendAsync("UsersInRoom", users);
        }
    }
}