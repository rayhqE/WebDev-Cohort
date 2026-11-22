import Redis from "ioredis";

function createrRedisConnection() {
  return new Redis({
    host: "localhost",
    port: "6379",
  });
}

export const publisher = createrRedisConnection();
export const subscriber = createrRedisConnection();
