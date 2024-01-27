import { Client } from "osu-web.js";

const url = new URL("https://osu.ppy.sh/api/v2/oauth/tokens/current");

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

fetch(url, {
  method: "DELETE",
  headers,
}).then((response) => response.json());
