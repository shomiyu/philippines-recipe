import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "philippines-recipe",
  apiKey: process.env.API_KEY,
});
