using Microsoft.AspNetCore.SignalR;
using SpeakEasy.Api.Models;

namespace SpeakEasy.Api.Hubs
{
    public class ChatHub : Hub
    {
        private readonly string _botUser;

        public ChatHub()
        {
            _botUser = "SpeakEasy Bot";
        }

        public async Task JoinRoom(UserConnection con)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, con.Room);
            await Clients.Group(con.Room).SendAsync("ReceiveMessage", _botUser, $"{con.User} has joined ${con.Room}");
        }
    }
}