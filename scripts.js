import { Client, Client, LegacyClient } from "osu-web.js";

// Client of current connection
const Client = new Client('acces token');


// get a user

let v2User = await Client.users.getuser(5707541{
    urlParams: {
        mode: 'osu'
    }
});