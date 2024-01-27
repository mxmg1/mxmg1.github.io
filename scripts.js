import { Client, user } from "osu-web.js";

const user = await api.users.getSelf({
  urlParams: {
    mode: "osu",
  },
});
