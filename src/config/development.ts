import { Config } from "./Config";

export const development: Config = {
  host:"http://localhost",
  port: process.env.PORT || 3000,
  mongodb_uri:
    process.env.MONGODB_URI || "mongodb://localhost:27017/node-tsc-app-local",
};
